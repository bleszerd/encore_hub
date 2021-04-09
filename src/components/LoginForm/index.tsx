import * as S from './styles'

export default function LoginForm() {
    return (
        <S.LoginFormContainer>
            <S.AuthorLogin>Login do autor</S.AuthorLogin>
            <S.FullWideInput placeholder="Identificação" />
            <S.MultipleColumnsDiv>
                <S.FullWideInput placeholder="Senha" />
                <S.ButtonLogin>Entrar</S.ButtonLogin>
            </S.MultipleColumnsDiv>
        </S.LoginFormContainer>
    )
}