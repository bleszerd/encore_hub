import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import API from '../../services/API'
import * as S from './styles'

export default function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { push } = useRouter()

    useEffect(() => {
        const auth = sessionStorage.getItem("@auth")
        
        if (auth) {
            push(`/admin/panel`)
        }
    }, [])

    async function handleLogin(event: any) {
        event.preventDefault()

        try {
            const response = await API.post(`/auth`, {
                username,
                password
            })

            const jwtNoSanitized: string = response.data.token

            if (!jwtNoSanitized) {
                throw new Error("User not valid!")
            }

            const jwtToken = jwtNoSanitized.split(' ')[1]

            const jsonSession = {
                username,
                jwt: jwtToken
            }

            sessionStorage.setItem("@auth", JSON.stringify(jsonSession))

            push(`/admin/panel`)
        } catch (err) {
            setError("Houve um erro, verifique as informações inseridas e tente novamente.")
        }
    }

    return (
        <S.LoginFormContainer>
            <S.AuthorLogin>Login do autor</S.AuthorLogin>
            <S.FullWideInput placeholder="Identificação" onChange={e => setUsername(e.target.value)} />
            <S.MultipleColumnsDiv>
                <S.FullWideInput placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)} />
                <S.ButtonLogin onClick={event => handleLogin(event)}>Entrar</S.ButtonLogin>
            </S.MultipleColumnsDiv>
        </S.LoginFormContainer>
    )
}