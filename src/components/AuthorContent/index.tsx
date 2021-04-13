import * as S from './styles'
import { parseToMarkdown } from '../../utils/markdown'

import { AuthorProps } from '../../typescript/types'
import { useEffect, useState } from 'react'
import AuthorFooter from '../AuthorFooter'

export default function AuthorContent({ authorData }: AuthorProps) {
    const [parsedMarkdown, setParsedMarkdown] = useState('')

    useEffect(() => {
        const mdString = authorData.fullText

        if (mdString) {
            const parsedMD = parseToMarkdown(mdString)
            setParsedMarkdown(parsedMD)
        }

    }, [authorData.fullText])

    return (
        <>
            <S.AuthorContentContainer>
                {!!authorData &&
                    <>
                        <S.AuthorContentImage src={authorData.photo || ""} />
                        <S.AuthorContentBody>
                            <S.AuthorName>{authorData.fullName}</S.AuthorName>
                            <S.AuthorDescription dangerouslySetInnerHTML={{
                                __html: parsedMarkdown
                            }} />
                        </S.AuthorContentBody>
                    </>}
            </S.AuthorContentContainer>
            <AuthorFooter authorData={authorData}/>
        </>
    )
}