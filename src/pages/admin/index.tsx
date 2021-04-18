import { useEffect, useState } from "react";
import API from '../../services/API'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { useAuthorData } from '../../context/AuthorData'
import { retrieveData, handleAuthLogout } from '../../utils/auth'

import AppWrapper from "../../components/AppWrapper";
import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";


export default function Login() {
    const { push } = useRouter()
    const { authorData, authorController } = useAuthorData()

    useEffect(() => {
        const { localAuthorData, localJwt } = retrieveData()

        if (!!localAuthorData && !!localJwt) {
            push(`/admin/panel`)
            return
        }

        handleAuthLogout()
    }, [])

    return (
        <AppWrapper>
            <Header />
            <LoginForm />
        </AppWrapper>
    )
}