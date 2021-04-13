import Link from 'next/link'
import { useRouter } from 'next/router'
import { AuthorFooterProps } from '../../typescript/types'

import * as S from './styles'

export default function AuthorFooter({ authorData }: AuthorFooterProps | any) {
    const { push } = useRouter()

    return (
        <S.AuthorFooterContainer>
            <S.AuthorImage src={authorData.photo} />
            <S.AuthorDetailsContainer>
                <S.AuthorName onClick={() => push(`/authors/${authorData.username}`)}>
                    {authorData.fullName}
                </S.AuthorName>
                <S.AuthorBio>{authorData.bio}</S.AuthorBio>
                <S.SocialBar>

                    {!!authorData.social.twitter &&
                        <S.SocialBarColumn href={`https://twitter.com/${authorData.social.twitter}`} target="_blank">
                            <S.SocialTwitter />
                        </S.SocialBarColumn>}

                    {!!authorData.social.instagram &&
                        <S.SocialBarColumn href={`https://instagram.com/${authorData.social.instagram}`} target="_blank">
                            <S.SocialInstagram />
                        </S.SocialBarColumn>
                    }

                    {!!authorData.social.github &&
                        <S.SocialBarColumn href={`https://github.com/${authorData.social.github}`} target="_blank">
                            <S.SocialGithub />
                        </S.SocialBarColumn>
                    }

                    {!!authorData.social.linkedin &&
                        <S.SocialBarColumn href={`https://linkedin.com/in/${authorData.social.linkedin}/`} target="_blank">
                            <S.SocialLinkedIn />
                        </S.SocialBarColumn>
                    }
                </S.SocialBar>
            </S.AuthorDetailsContainer>
        </S.AuthorFooterContainer>
    )
}