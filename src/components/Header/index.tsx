import * as S from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
    const {  push } = useRouter()

    return (
        <S.HeaderContainer>
            <S.LogoSection>
                <Link href="/">
                    <S.LogoTitle>Encore Station</S.LogoTitle>
                </Link>
            </S.LogoSection>

            <S.NavigationSection>
                <S.NavigationButton onClick={() => push(`/about`)}>Sobre</S.NavigationButton>
                <S.NavigationButton onClick={() => push(`/authors`)}>Autores</S.NavigationButton>
            </S.NavigationSection>
        </S.HeaderContainer>
    )
}