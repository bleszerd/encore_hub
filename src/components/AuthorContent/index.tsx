import { useEffect } from 'react'
import { AuthorProps } from '../../typescript/types'
import * as S from './styles'

export default function AuthorContent({ authorData }: AuthorProps) {
    return (
        <S.AuthorContentContainer>
            {!!authorData &&
                <>
                    <S.AuthorContentImage src={authorData.photo || ""} />
                    <S.AuthorContentBody>
                        <S.AuthorName>{authorData.fullName}</S.AuthorName>
                        <S.AuthorDescription dangerouslySetInnerHTML={{
                            __html: authorData.fullText || ""
                        }}/>
                    </S.AuthorContentBody>
                </>}
        </S.AuthorContentContainer>
    )
}