import * as S from './styles'

import { IAuthor } from '../../typescript/database'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function AllAuthors({ authorsData }: any) {
    const { push } = useRouter()
    const [authors, setAuthors] = useState<IAuthor[]>()

    useEffect(() => {
        const allAuthors: IAuthor[] = authorsData.authors
        allAuthors.forEach(aut => {
            if (allAuthors.indexOf(aut) % 2 === 0) {
                aut.__v = 'left'
            } else {
                aut.__v = 'right'
            }
        })
        setAuthors(allAuthors)
    }, [])

    function handleAuthorNavigation(username: string) {
        push(`/authors/${username}`)
    }

    return (
        <S.AllAluthorsContainer>
            {!!authors && authors.map(author => (
                <S.AuthorCard>
                    <S.AuthorNamePhoto>
                        {author.__v == "left" && <S.AuthorPhoto src={author.photo} />}
                        <S.AuthorInfo>
                            <S.AuthorName side={author.__v || ""} onClick={() => handleAuthorNavigation(author.username || "")}>{author.fullName}</S.AuthorName>
                            <S.AuthorUsername side={author.__v || ""} onClick={() => handleAuthorNavigation(author.username || "")}>@{author.username}</S.AuthorUsername>
                            <S.AuthorBio>{author.bio}</S.AuthorBio>

                            <S.SocialBar side={author.__v || ""}>
                                {!!author.social &&
                                    <>
                                        {!!author.social.twitter &&
                                            <S.SocialBarColumn href={`https://twitter.com/${author.social.twitter}`} target="_blank">
                                                <S.SocialTwitter />
                                            </S.SocialBarColumn>}

                                        {!!author.social.instagram &&
                                            <S.SocialBarColumn href={`https://instagram.com/${author.social.instagram}`} target="_blank">
                                                <S.SocialInstagram />
                                            </S.SocialBarColumn>
                                        }

                                        {!!author.social.github &&
                                            <S.SocialBarColumn href={`https://github.com/${author.social.github}`} target="_blank">
                                                <S.SocialGithub />
                                            </S.SocialBarColumn>
                                        }

                                        {!!author.social.linkedin &&
                                            <S.SocialBarColumn href={`https://linkedin.com/in/${author.social.linkedin}/`} target="_blank">
                                                <S.SocialLinkedIn />
                                            </S.SocialBarColumn>
                                        }
                                    </>}


                            </S.SocialBar>

                        </S.AuthorInfo>
                        {author.__v == "right" && <S.AuthorPhoto src={author.photo} />}
                    </S.AuthorNamePhoto>
                </S.AuthorCard>
            ))}

        </S.AllAluthorsContainer>
    )
}