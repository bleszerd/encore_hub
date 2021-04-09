import { ReactEventHandler, useEffect, useState } from 'react'
import * as S from './styles'


export default function CreatePost() {
    const [tags, setTags] = useState([{ label: '', id: 1 }])
    const [tagCount, setTagCount] = useState(1)
    const [tagStr, setTagStr] = useState('')

    useEffect(() => {
        setTagCount(tagCount + 1)
    }, [tags])

    function handleAndParseTags(e: any) {
        const unisplitedString: string = e.target.value

        setTagStr(unisplitedString)

        if (unisplitedString.indexOf(";") != -1) {
            setTags([...tags, {
                label: unisplitedString.slice(0, unisplitedString.length - 1),
                id: tagCount
            }])
            setTagStr('')
        }
    }

    return (
        <S.CreatePostContainer>
            <S.TitleInput placeholder="Título da publicação" />
            <S.TagSection>
                {
                    tags.map(tag => (
                        <S.TagLabel key="tag" placeholder="TAG" value={tag.label || tagStr} onChange={e => handleAndParseTags(e)} />
                    ))
                }
            </S.TagSection>
        </S.CreatePostContainer>
    )
}