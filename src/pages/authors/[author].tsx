import AppWrapper from "../../components/AppWrapper";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AuthorContent from "../../components/AuthorContent";
import API from "../../services/API";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { AuthorProps } from "../../typescript/types";

export default function Author({ authorData }: AuthorProps) {
    return (
        <AppWrapper>
            <Header />
            <AuthorContent authorData={authorData} />
            <Footer />
        </AppWrapper>
    )
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const authorToFetch = params?.author

    if (authorToFetch && authorToFetch != "background.jpg") {
        const authorData = await API.get(`/authors/${authorToFetch}`)

        return {
            props: {
                authorData: authorData.data.result
            },
            revalidate: 1800 //30 min
        }

    }


    return {
        props: {
            authorData: null
        }
    }
}

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
}