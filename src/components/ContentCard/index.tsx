import { useRouter } from 'next/router'
import { ContentCardProps } from '../../typescript/types'
import * as S from './styles'

export default function ContentCard({ contentCard }: ContentCardProps) {
    const {author, date, image, slug, title} = contentCard
    
    const router = useRouter()

    function navigateToPostPage(){
        router.push(`/posts/${slug}`)
    }

    return (
        <S.ContentCardContainer onClick={navigateToPostPage}>
            <S.Image src={image}>
                <S.ImageEffect>
                    <S.CardDetails>
                        <S.CardHeaderSection>
                            <S.CardTitle>{title}</S.CardTitle>
                        </S.CardHeaderSection>

                        <S.CardAuthorSection>
                            <S.CardAuthorInfo>por
                                <S.AuthorLink>{author}</S.AuthorLink>,
                                <S.AuthorLink>{date}</S.AuthorLink>
                            </S.CardAuthorInfo>
                        </S.CardAuthorSection>
                    </S.CardDetails>
                </S.ImageEffect>
            </S.Image>



        </S.ContentCardContainer>
    )
}