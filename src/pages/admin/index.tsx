import { useEffect, useState } from "react";
import API from '../../services/API'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { useAuthorData } from '../../context/AuthorData'

import AppWrapper from "../../components/AppWrapper";
import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";


export default function Login() {
    const { push } = useRouter()
    const { authorData, authorController } = useAuthorData()

    useEffect(() => {
        const hasJwt = localStorage.getItem("@jwt")
        const hasCookie = Cookie.getJSON("@authorizedAuthor")

        if (hasJwt && hasCookie) {
            const authorFromCookie = Cookie.getJSON("@authorizedAuthor")
            authorController.cleanUpdateData(authorFromCookie)

            push(`/admin/panel`)
        } else {
            localStorage.removeItem("@jwt")
            Cookie.remove("@authorizedAuthor")
        }
    }, [])

    async function fetchUserData(authorUsername: string) {
        const authorResponse = await API.get(`/authors/${authorUsername}`)

        const { bio, birthday, fullName, fullText, photo, social, username } = authorResponse.data.result || null

        const authorToCookie = {
            fullName,
            username,
            photo,
            bio,
            birthday,
            social,
            fullText
        }

        Cookie.set("@authorizedAuthor", JSON.stringify(authorToCookie), {
            expires: 7200, //2h
            sameSite: 'strict'
        })

        push(`/admin/panel`)
    }

    return (
        <AppWrapper>
            <Header />
            <LoginForm fetchUserData={fetchUserData} />
        </AppWrapper>
    )
}