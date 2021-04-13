import { useRouter } from 'next/router'
import { useAuthorData } from '../../context/AuthorData'
import {handleAuthLogout, retrieveData} from '../../utils/auth'

import * as S from './styles'
import { useEffect } from 'react'

export default function AdminPanel() {
    const { authorData, authorController } = useAuthorData()
    const { push } = useRouter()

    useEffect(() => {
        const {localAuthorData} = retrieveData()

        if(!localAuthorData){
            push(`/admin`)
        }

        authorController.cleanUpdateData(localAuthorData)
    }, [])

    function handleLogout() {
        handleAuthLogout()
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