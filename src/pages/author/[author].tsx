import AppWrapper from "../../components/AppWrapper";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AuthorContent from "../../components/AuthorContent";

export default function Author(){
    return (
        <AppWrapper>
            <Header />
            <AuthorContent />
            <Footer />
        </AppWrapper>
    )
}