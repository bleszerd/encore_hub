import { ChangeEvent, useState } from 'react'
import PostSection from '../PostContainer'

import * as S from './styles'

export default function CreatePost() {
    const [tags, setTags] = useState([''])
    const [rawTag, setRawTag] = useState('')
    const [postStr, setPostStr] = useState('')
    const [postImage, setPostImage] = useState('')
    const [postTitle, setPostTitle] = useState('')

    function handleAndParseTags(e: ChangeEvent<HTMLInputElement>) {
        const rawTags = e.target.value
        setRawTag(rawTags)
        
        if (rawTags.indexOf(";") != -1) {
            setTags([...tags, rawTags.slice(0, rawTags.length - 1)])
            setRawTag('')
        }
    }

    return (
        <S.CreatePostContainer>
            <S.TitleImageContainer>
                <S.TitleInput placeholder="Título da publicação" onChange={e => setPostTitle(e.target.value)} />
                <S.TitleInput placeholder="Url da imagem" onChange={e => setPostImage(e.target.value)} />
            </S.TitleImageContainer>
            <S.TagSection>
                {
                    tags.map(tag => (
                        <S.TagLabel key="tag" placeholder="TAG" value={tag || rawTag} onChange={e => handleAndParseTags(e)} />
                    ))
                }
            </S.TagSection>

            <S.PostTextInput placeholder="Publicação com markdown" onChange={e => setPostStr(e.target.value)} />

            <S.PostPreview>
                <PostSection
                    author="Vinícius Resende"
                    content={postStr}
                    date={new Date().toUTCString()}
                    image={postImage}
                    title={postTitle}
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