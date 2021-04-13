import { useRouter } from 'next/router'
import { useAuthorData } from '../../../context/AuthorData'
import { useEffect } from "react";

import AppWrapper from "../../../components/AppWrapper";
import Header from "../../../components/Header";
import CreatePost from "../../../components/CreatePost";
import Footer from "../../../components/Footer";

export default function NewPost(){
    const { push } = useRouter()
    const { authorData, authorController } = useAuthorData()

    useEffect(() => {
        if(!authorData.username){
            push(`/admin`)
        }
    }, [authorData])

    return (
        <AppWrapper>
            <Header />
            <CreatePost />
            <Footer />
        </AppWrapper>
    )
}