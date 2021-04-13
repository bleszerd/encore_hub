import { GetStaticPropsContext } from 'next'
import AppWrapper from '../../components/AppWrapper'
import AuthorFooter from '../../components/AuthorFooter'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PostSection from '../../components/PostContainer'
import API from '../../services/API'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { IPostProps } from '../../typescript/types'

export default function Post({ postData, authorData }: IPostProps) {
    const { push } = useRouter()

    useEffect(() => {
        if (!postData) {
            push(`/`)
        }
    }, [])

    return (
        <>
            {
                postData && (
                    <AppWrapper>
                        <Header />
                        <PostSection author={postData.author} image={postData.image} title={postData.title} date={postData.date} content={postData.content} />
                        <AuthorFooter  />
                        <Footer />
                    </AppWrapper>
                )
            }
        </>
    )
}

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
    if (!params) {
        return {
            props: {
                postData: null
            }
        }
    }

    const slug = params.slug

    const response = await API.get(`/posts/${slug}`)
    const postData = response.data.result || null;

    const authorResponse = await API.get(`/authors/${postData.author}`)
    const authorData = authorResponse.data.result || null;

    return {
        props: {
            postData,
            authorData
        }
    }
}