import * as S from './styles'
import { PostSectionProps } from '../../typescript/types'
import { useEffect, useState } from 'react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import dracula from './dracula'

const components = {
    code({ node, className, ...props }: any) {
        const match = /language-(\w+)/.exec(className || '')
        return match
            ? <SyntaxHighlighter language={match[1]} PreTag="div" style={dracula} {...props} />
            : <code className={className} {...props} />
    }
}

export default function PostSection({ author, date, image, title, content }: PostSectionProps) {
    const [postContent, setPostContent] = useState<any>(content)

    /* Rerender markdown on change */
    useEffect(() => {
        setPostContent(content)
    }, [content])

    /* Load External Scripts */
    useEffect(() => {
        const s = document.createElement("script");
        s.setAttribute("src", "https://platform.twitter.com/widgets.js");
        s.setAttribute("async", "true");
        document.head.appendChild(s);
    }, []);

    return (
        <S.PostContainer>
            <S.PostHeader>
                <S.PostImage src={image} />
            </S.PostHeader>
            <p>⠀</p>
            <S.PostBody>
                <S.PostTitle>{title}</S.PostTitle>
                <S.PostMetadata>por
                    <S.MetadataLink>{author}</S.MetadataLink>,
                    <S.MetadataLink>{date}</S.MetadataLink>
                </S.PostMetadata>
                <S.Content>
                    <ReactMarkdown
                        components={components}
                        skipHtml={true}
                    >
                        {postContent}
                    </ReactMarkdown>
                </S.Content>
            </S.PostBody>
        </S.PostContainer>
    )
}
