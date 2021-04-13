import { useRouter } from 'next/router'
import Cookie from 'js-cookie'
import { useAuthorData } from '../../context/AuthorData'

import * as S from './styles'
import { useEffect } from 'react'

export default function AdminPanel() {
    const { authorData } = useAuthorData()
    const { push } = useRouter()

    useEffect(() => {
        if(!authorData.username){
            push(`/admin`)
        }
        // transfere this logic to authorData context
    }, [authorData])

    function handleLogout() {
        localStorage.removeItem("@jwt")
        Cookie.remove("@authorizedAuthor")
        push(`/admin`)
    }

    return (
        <S.AdminPanelContainer>
            <S.Welcome>
                <S.AuthorWelcome>Bem-vindo novamente <b>{authorData.fullName?.split(" ")[0]}</b>!</S.AuthorWelcome>
                <S.Today>{new Date().toLocaleDateString('pt-BR')}</S.Today>
            </S.Welcome>
            <S.InstantContainer>
                <S.InstantActions>
                    <S.InstantActionButton onClick={() => push(`/admin/posts/new`)}>Nova Publicação</S.InstantActionButton>
                    <S.InstantActionButton>Editar Publicação</S.InstantActionButton>
                    <S.InstantActionButton>Excluir Publicação</S.InstantActionButton>
                </S.InstantActions>
                <S.LogoutLabel onClick={handleLogout}>Sair</S.LogoutLabel>
            </S.InstantContainer>
            <S.ProfileInfo>
                <S.ProfileImageUsername>
                    <S.ProfileImage src={authorData.photo} />
                    <S.AuthorName value={authorData.fullName} />
                </S.ProfileImageUsername>
            </S.ProfileInfo>
        </S.AdminPanelContainer>
    )
}