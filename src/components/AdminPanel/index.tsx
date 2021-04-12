import { useRouter } from 'next/router'

import * as S from './styles'

export default function AdminPanel() {
    const { push } = useRouter()

    return (
        <S.AdminPanelContainer>
            <S.Welcome>
                <S.AuthorWelcome>Bem-vindo novamente <b>Vinicius</b>!</S.AuthorWelcome>
                <S.Today>{new Date().toLocaleDateString('pt-BR')}</S.Today>
            </S.Welcome>
            <S.InstantActions>
                <S.InstantActionButton onClick={() => push(`/admin/posts/new`)}>Nova Publicação</S.InstantActionButton>
                <S.InstantActionButton>Editar Publicação</S.InstantActionButton>
                <S.InstantActionButton>Excluir Publicação</S.InstantActionButton>
            </S.InstantActions>
            <S.ProfileInfo>
                <S.ProfileImageUsername>
                    <S.ProfileImage src="https://avatars.githubusercontent.com/u/77847606?s=400&v=4" />
                    <S.AuthorName value="Vinícius Resende" />
                </S.ProfileImageUsername>
            </S.ProfileInfo>
        </S.AdminPanelContainer>
    )
}