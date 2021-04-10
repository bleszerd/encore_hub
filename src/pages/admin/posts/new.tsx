import AppWrapper from "../../../components/AppWrapper";
import Header from "../../../components/Header";
import CreatePost from "../../../components/CreatePost";
import Footer from "../../../components/Footer";

export default function NewPost(){
    return (
        <AppWrapper>
            <Header />
            <CreatePost />
            <Footer />
        </AppWrapper>
    )
}