import Link from 'next/link'
import { IAuthorFooterProps } from '../../typescript/types'
import * as S from './styles'

export default function AuthorFooter({ fullName, bio, social, username, photo }: IAuthorFooterProps) {
    return (
        <S.AuthorFooterContainer>
            <S.AuthorImage src={photo} />
            <S.AuthorDetailsContainer>
                <Link href={`/author/${username}`}>
                    <S.AuthorName>{fullName}</S.AuthorName>
                </Link>
                <S.AuthorBio>{bio}</S.AuthorBio>
                <S.SocialBar>
                    {
                        !!social.twitter && (
                            <S.SocialBarColumn href={`https://twitter.com/${social.twitter}`} target="_blank">
                                <S.SocialTwitter />
                            </S.SocialBarColumn>
                        )
                    }

                    {
                        !!social.instagram && (
                            <S.SocialBarColumn href={`https://instagram.com/${social.instagram}`} target="_blank">
                                <S.SocialInstagram />
                            </S.SocialBarColumn>
                        )
                    }

                    {
                        !!social.github && (
                            <S.SocialBarColumn href={`https://github.com/${social.github}`} target="_blank">
                                <S.SocialGithub />
                            </S.SocialBarColumn>
                        )
                    }

                    {/* <S.SocialBarColumn href="https://linkedin.com/in/viniciusresend3/" target="_blank">
                        <S.SocialLinkedIn />
                    </S.SocialBarColumn> */}
                </S.SocialBar>
            </S.AuthorDetailsContainer>
        </S.AuthorFooterContainer>
    )
}