import * as S from './styles'
import Link from 'next/link'

export default function Header(){
    return (
        <S.HeaderContainer>
            <S.LogoSection>
                <Link href="/">
                    <S.LogoTitle>Encore Station</S.LogoTitle>
                </Link>
            </S.LogoSection>

            <S.NavigationSection>
                <S.NavigationButton>Sobre</S.NavigationButton>
                <S.NavigationButton>Autores</S.NavigationButton>
            </S.NavigationSection>
        </S.HeaderContainer>
    )
}