import { useEffect, useState } from 'react'
import * as S from './styles'
import { parseToMarkdown } from '../../utils/markdown'
import PostSection from '../PostContainer'

export default function CreatePost() {
    const [tags, setTags] = useState([{ label: '' }])
    const [tagStr, setTagStr] = useState('')
    const [postStr, setPostStr] = useState('')
    const [img, setImg] = useState('')
    const [title, setTitle] = useState('')


    function handleAndParseTags(e: any) {
        const unisplitedString: string = e.target.value

        setTagStr(unisplitedString)

        if (unisplitedString.indexOf(";") != -1) {
            setTags([...tags, {
                label: unisplitedString.slice(0, unisplitedString.length - 1),
            }])
            setTagStr('')
        }
    }

    return (
        <S.CreatePostContainer>
            <S.TitleImageContainer>
                <S.TitleInput placeholder="Título da publicação" onChange={e => setTitle(e.target.value)} />
                <S.TitleInput placeholder="Url da imagem" onChange={e => setImg(e.target.value)} />
            </S.TitleImageContainer>
            <S.TagSection>
                {
                    tags.map(tag => (
                        <S.TagLabel key="tag" placeholder="TAG" value={tag.label || tagStr} onChange={e => handleAndParseTags(e)} />
                    ))
                }
            </S.TagSection>

            <S.PostTextInput placeholder="Publicação com markdown" onChange={e => setPostStr(e.target.value)} />

            <S.PostPreview>
                <PostSection
                    author="Vinícius Resende"
                    content={postStr}
                    date={new Date().toUTCString()}
                    image={img}
                    title={title}
                />
            </S.PostPreview>

            <S.PublishChannelContainer>
                <S.ChannelSelector>
                    <S.PublishChannelOption value="" hidden>Selecionar canal</S.PublishChannelOption>
                    <S.PublishChannelOption value="producao">Produção</S.PublishChannelOption>
                    <S.PublishChannelOption value="desenvolvimento">Desenvolvimento</S.PublishChannelOption>
                </S.ChannelSelector>
                <S.PublishButton>Enviar</S.PublishButton>
            </S.PublishChannelContainer>

        </S.CreatePostContainer>
    )
}