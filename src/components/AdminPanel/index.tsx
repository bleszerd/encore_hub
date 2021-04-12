import * as S from './styles'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import API from '../../services/API'
import { IAuthor } from '../../typescript/database'

export default function AdminPanel() {
    const [authorData, setAuthorData] = useState<IAuthor>()
    const { push } = useRouter()

    useEffect(() => {
        const auth = sessionStorage.getItem("@auth")

        if (!auth) {
            push(`/admin`)
            return
        }

        const authAsJson = JSON.parse(auth)

        async function fetchAuthorData() {
            const authData = await API.get(`/authors/${authAsJson.username}`)

            setAuthorData(authData.data.result);
        }

        fetchAuthorData()
    }, [])

    return (
        <S.AdminPanelContainer>
            {
                !!authorData && (
                    <>
                        <S.Welcome>
                            {console.log(authorData)}
                            <S.AuthorWelcome>Bem-vindo novamente <b>{authorData.fullName.split(' ')[0]}</b>!</S.AuthorWelcome>
                            <S.Today>{new Date().toLocaleDateString('pt-BR')}</S.Today>
                        </S.Welcome>
                        <S.InstantActions>
                            <S.InstantActionButton onClick={() => push(`/admin/posts/new`)}>Nova Publicação</S.InstantActionButton>
                            <S.InstantActionButton>Editar Publicação</S.InstantActionButton>
                            <S.InstantActionButton>Excluir Publicação</S.InstantActionButton>
                        </S.InstantActions>
                        <S.ProfileInfo>
                            <S.ProfileImageUsername>
                                <S.ProfileImage src={authorData.photo} />
                                <S.AuthorName value={`${authorData.fullName.split(' ')[0]} "${authorData.username}" ${authorData.fullName.slice(authorData.fullName.split(' ')[0].length, authorData.fullName.length)}`} readOnly />
                            </S.ProfileImageUsername>
                            <S.ProfileData>
                                <S.InfoLabel>Posts total: <b>20</b></S.InfoLabel>
                                <S.InfoLabel>Likes totais: <b>360</b></S.InfoLabel>
                                <S.InfoLabel>Visitas ao perfil: <b>20</b></S.InfoLabel>
                            </S.ProfileData>
                        </S.ProfileInfo>
                    </>
                )
            }
        </S.AdminPanelContainer>
    )
}