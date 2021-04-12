import Link from 'next/link'

import * as S from './styles'

export default function AuthorFooter() {
    return (
        <S.AuthorFooterContainer>
            <S.AuthorImage src="https://avatars.githubusercontent.com/u/77847606?s=400&v=4" />
            <S.AuthorDetailsContainer>
                <Link href={`/author/bleszerd`}>
                    <S.AuthorName>Vinícius Resende</S.AuthorName>
                </Link>
                <S.AuthorBio>Engenheiro de software e desenvolvedor web full stack.</S.AuthorBio>
                <S.SocialBar>

                    <S.SocialBarColumn href={`https://twitter.com/link`} target="_blank">
                        <S.SocialTwitter />
                    </S.SocialBarColumn>


                    <S.SocialBarColumn href={`https://instagram.com/link`} target="_blank">
                        <S.SocialInstagram />
                    </S.SocialBarColumn>


                    <S.SocialBarColumn href={`https://github.com/link`} target="_blank">
                        <S.SocialGithub />
                    </S.SocialBarColumn>

                    <S.SocialBarColumn href="https://linkedin.com/in/viniciusresend3/" target="_blank">
                        <S.SocialLinkedIn />
                    </S.SocialBarColumn>
                </S.SocialBar>
            </S.AuthorDetailsContainer>
        </S.AuthorFooterContainer>
    )
}