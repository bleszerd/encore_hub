import { ChangeEvent, useEffect, useState } from 'react'
import { useAuthorData } from '../../context/AuthorData'
import PostSection from '../PostContainer'
import API from '../../services/API'
import {handleAuthLogout, retrieveData} from '../../utils/auth'
import {generateSlug, generatePostDate} from '../../utils/posts'

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
    const [channel, setChannel] = useState<"select" | "development" | "production">("select")

    const { push } = useRouter()

    useEffect(()=>{
        console.log(authorData);
    }, [authorData])

    /* Fetch local backup data */
    useEffect(() => {  
        const localBackup = localStorage.getItem('@post-backup')

        if (localBackup) {
            const localParsedBackup = JSON.parse(localBackup)

            const { postTitle, postImage, tags, postStr, channel } = localParsedBackup

            setPostTitle(postTitle)
            setPostImage(postImage)
            setTags(tags)
            setPostStr(postStr)
            setChannel(channel)
        }
    }, [])

    function sendError(type: "generic" | "session"){
        const errors = {
            generic: () => {
                alert("Sua sessão expirou, por favor faça login novamente.")
                handleAuthLogout()
                push(`/admin`)
            },
            session: () => {
                alert("Ocorreu um erro, verifique se todos os campos foram preenchidos ou tente novamente mais tarde.")
            }
        }

        errors[type]
    }

    async function handleSubmitPost(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
        e.preventDefault()

        const {localJwt} = retrieveData()

        if (!localJwt) {
            sendError("session")
        }

        const postRequestBody = {
            title: postTitle,
            tags: tags,
            slug: generateSlug(postTitle),
            image: postImage,
            author: authorData.username,
            date: generatePostDate(),
            content: postStr
        }

        const response = await API.post(`/posts/create`, postRequestBody, {
            headers: {
                authorization: localJwt
            }
        })

        if (response.data.result) {
            alert("Post criado!")
            return
        }

        sendError("session")
    }

    /* Update methods */
    function handleAndParseTags(e: ChangeEvent<HTMLInputElement>) {
        const rawTags = e.target.value
        setRawTag(rawTags)

        if (rawTags.indexOf(";") != -1) {
            const newTags = [...tags, rawTags.slice(0, rawTags.length - 1)]
            setTags(newTags)
            setRawTag('')
        }
    }

    function handlePostText(e: ChangeEvent<HTMLTextAreaElement>) {
        setPostStr(e.target.value)
        updateLocalBackup()
    }

    function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
        setPostTitle(e.target.value)
        updateLocalBackup()
    }

    function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
        setPostImage(e.target.value)
        updateLocalBackup()
    }

    function handleChannel(e: ChangeEvent<HTMLSelectElement>) {
        const channelSelected = e.target.value

        if (channelSelected != "development" && channelSelected != "production" && channelSelected != "select") {
            return
        }

        setChannel(channelSelected)
        updateLocalBackup()
    }

    function updateLocalBackup() {
        const stringfiedData = JSON.stringify({
            postTitle,
            postImage,
            tags,
            postStr,
            channel
        })

        localStorage.setItem("@post-backup", stringfiedData)
    }

    return (
        <S.CreatePostContainer>
            <S.TitleImageContainer>
                <S.TitleInput placeholder="Título da publicação" defaultValue={postTitle} onChange={e => handleTitleChange(e)} />
                <S.TitleInput placeholder="Url da imagem" defaultValue={postImage} onChange={e => handleImageChange(e)} />
            </S.TitleImageContainer>
            <S.TagSection>
                {
                    tags.map(tag => (
                        <S.TagLabel key="tag" placeholder="TAG" value={tag || rawTag} defaultValue={tags} onChange={e => handleAndParseTags(e)} />
                    ))
                }
            </S.TagSection>
            <p>⠀</p>

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
                <S.ChannelSelector onChange={e => handleChannel(e)}>
                    <S.PublishChannelOption value="select" hidden>Selecionar canal</S.PublishChannelOption>
                    <S.PublishChannelOption value="production">Desenvolvimento</S.PublishChannelOption>
                    <S.PublishChannelOption value="development">Produção</S.PublishChannelOption>
                </S.ChannelSelector>
                <S.PublishButton onClick={e => handleSubmitPost(e)}>Enviar</S.PublishButton>
            </S.PublishChannelContainer>

        </S.CreatePostContainer>
    )
}