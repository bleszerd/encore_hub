import { ChangeEvent, useEffect, useState } from 'react'
import { useAuthorData } from '../../context/AuthorData'
import PostSection from '../PostContainer'
import API from '../../services/API'

import * as S from './styles'

import { MouseEvent } from 'react'
import { useRouter } from 'next/router'

export default function CreatePost() {
    const { authorData, authorController } = useAuthorData()
    const [tags, setTags] = useState([''])
    const [rawTag, setRawTag] = useState('')
    const [postStr, setPostStr] = useState('')
    const [postImage, setPostImage] = useState('')
    const [postTitle, setPostTitle] = useState('')
    const {push} = useRouter()

    useEffect(()=>{
        setPostStr(localStorage.getItem('@post-backup') || '')
    }, [])

    function handleAndParseTags(e: ChangeEvent<HTMLInputElement>) {
        const rawTags = e.target.value
        setRawTag(rawTags)

        if (rawTags.indexOf(";") != -1) {
            setTags([...tags, rawTags.slice(0, rawTags.length - 1)])
            setRawTag('')
        }
    }

    async function handleSubmitPost(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
        e.preventDefault()
        const jwtStored = localStorage.getItem("@jwt")

        if(!jwtStored){
            return
        }

        const postRequestBody = {
            title: postTitle,
            tags,
            slug: postTitle.replaceAll(" ", "_").replaceAll("?", "_").replaceAll(".", "_"),
            image: postImage,
            author: authorData.username,
            date: new Date().toLocaleString("pt-BR"),
            content: postStr
        }

        const response = await API.post(`/posts/create`, postRequestBody, {
            headers: {
                authorization: jwtStored
            }
        })

        if(response.data.result){
            alert("Post criado!")
            return
        }

        alert("Falha ao criar o post! Tente novamente após o login!")
        push(`/admin`)
    }

    function handlePostText(e: ChangeEvent<HTMLTextAreaElement>){
        setPostStr(e.target.value)
        localStorage.setItem("@post-backup", e.target.value)
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

            <S.PostTextInput placeholder="Publicação com markdown" defaultValue={postStr} onChange={e => handlePostText(e)} />

            <S.PostPreview>
                <PostSection
                    author={authorData.username || "Autor? Não sabemos de nada! (ps: isto é um erro...)"}
                    content={postStr}
                    date={new Date().toLocaleDateString("pt-BR")}
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
                <S.PublishButton onClick={e => handleSubmitPost(e)}>Enviar</S.PublishButton>
            </S.PublishChannelContainer>

        </S.CreatePostContainer>
    )
}