import { useRouter } from 'next/router'
import * as S from './styles'

export default function LoginForm() {
    const { push } = useRouter()

    return (
        <S.LoginFormContainer>
            <S.AuthorLogin>Login do autor</S.AuthorLogin>
            <S.FullWideInput placeholder="Identificação" />
            <S.MultipleColumnsDiv>
                <S.FullWideInput placeholder="Senha" />
                <S.ButtonLogin onClick={(event) => {event.preventDefault(); push(`/admin/panel`)}}>Entrar</S.ButtonLogin>
            </S.MultipleColumnsDiv>
        </S.LoginFormContainer>
    )
}