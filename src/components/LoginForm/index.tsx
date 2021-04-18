import { useEffect, useState } from 'react'
import API from '../../services/API'
import jwt from 'jsonwebtoken'
import Cookie from 'js-cookie'
import {retrieveData, handleAuthLogout} from '../../utils/auth'

import * as S from './styles'

import { MouseEvent } from 'react'
import { useRouter } from 'next/router'

export default function LoginForm() {
    const { push } = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //Verify JWT token on local storage
    useEffect(() => {
        const jwtKey = process.env.JWT_KEY
        const {localAuthorData, localJwt} = retrieveData()

        if (localJwt && jwtKey) {
            try {
                jwt.verify(localJwt, jwtKey)
            } catch (err) {
                handleAuthLogout()
            }
        }
    }, [])

    async function handleSignIn(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
        e.preventDefault()

        const authorizationBody = {
            username,
            password
        }

        const authorizationResponse = await API.post(`/auth`, authorizationBody)

        //On auth success...
        if (authorizationResponse.data.token) {
            const rawJwtTokenResponse: string = authorizationResponse.data.token
            const jwt = rawJwtTokenResponse.split(" ")[1]

            localStorage.setItem("@jwt", jwt)
            fetchUserData(username)
        }
    }

    async function fetchUserData(authorUsername: string) {
        const authorResponse = await API.get(`/authors/${authorUsername}`)

        const { bio, birthday, fullName, fullText, photo, social, username } = authorResponse.data.result

        const authorToCookie = {
            fullName,
            username,
            photo,
            bio,
            birthday,
            social,
            fullText
        }

        Cookie.set("@authorizedAuthor", JSON.stringify(authorToCookie), {
            expires: 7200, //2h
            sameSite: 'strict'
        })

        push(`/admin/panel`)
    }

    return (
        <S.LoginFormContainer>
            <S.AuthorLogin>Login do autor</S.AuthorLogin>
            <S.FullWideInput placeholder="Identificação" onChange={e => setUsername(e.target.value)} />
            <S.MultipleColumnsDiv>
                <S.FullWideInput placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)} />
                <S.ButtonLogin onClick={e => handleSignIn(e)}>Entrar</S.ButtonLogin>
            </S.MultipleColumnsDiv>
        </S.LoginFormContainer>
    )
}