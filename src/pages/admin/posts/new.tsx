import AppWrapper from "../../../components/AppWrapper";
import Header from "../../../components/Header";
import CreatePost from "../../../components/CreatePost";

export default function NewPost(){
    return (
        <AppWrapper>
            <Header />
            <CreatePost />
        </AppWrapper>
    )
}