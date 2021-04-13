import AllAuthors from "../../components/AllAuthors";
import AppWrapper from "../../components/AppWrapper";
import Header from "../../components/Header";
import API from '../../services/API'

import { IAuthor } from "../../typescript/database";

export default function Authors(authors: IAuthor[]){
    return (
        <AppWrapper>
            <Header />
            <AllAuthors authorsData={authors}/>
        </AppWrapper>
    )
}

export async function getStaticProps(){
    const response = await API.get(`/authors`)
    const authors = await response.data.result

    return {
        props: {
            authors: authors
        }
    }
}