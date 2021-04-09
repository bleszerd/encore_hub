import AppWrapper from "../../components/AppWrapper";
import AdminPanel from "../../components/AdminPanel";
import Header from "../../components/Header";

export default function Panel(){
    return (
        <AppWrapper>
            <Header />
            <AdminPanel />
        </AppWrapper>
    )
}