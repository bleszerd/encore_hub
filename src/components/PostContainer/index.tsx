import * as S from './styles'
import { PostSectionProps } from '../../typescript/types'
import { parseToMarkdown } from '../../utils/markdown'
import { useEffect, useState } from 'react'

export default function PostSection({ author, date, image, title, content }: PostSectionProps) {
    const [postContent, setPostContent] = useState("Loading")

    useEffect(() => {
        const markdownParsed = parseToMarkdown(content)

        setPostContent(markdownParsed)
    }, [content])

    return (
        <S.PostContainer>
            <S.PostHeader>
                <S.PostImage src={image} />
            </S.PostHeader>
            <S.PostBody>
                <S.PostTitle>{title}</S.PostTitle>
                <S.PostMetadata>por
                    <S.MetadataLink>{author}</S.MetadataLink>,
                    <S.MetadataLink>{date}</S.MetadataLink>
                </S.PostMetadata>
                <S.Content dangerouslySetInnerHTML={{
                    __html: postContent
                }} />
            </S.PostBody>
        </S.PostContainer>
    )
}
