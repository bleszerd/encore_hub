import { useEffect, useState } from 'react'
import API from '../../services/API'
import jwt from 'jsonwebtoken'

import * as S from './styles'

import { MouseEvent } from 'react'
import { LoginFormProps } from '../../typescript/types'

export default function LoginForm({ fetchUserData }: LoginFormProps) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //Verify JWT token on local storage
    useEffect(() => {
        const jwtStored = localStorage.getItem("@jwt")
        const jwtKey = process.env.JWT_KEY

        if (jwtStored && jwtKey && jwt.verify(jwtStored, jwtKey)) {
            console.log("User logged!");
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