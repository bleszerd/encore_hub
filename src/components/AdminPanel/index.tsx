import * as S from './styles'
import { useRouter } from 'next/router'

export default function AdminPanel() {
    const { push } = useRouter()

    return (
        <S.AdminPanelContainer>
            <S.Welcome>
                <S.AuthorWelcome>Bem-vindo novamente <b>Vinícius</b>!</S.AuthorWelcome>
                <S.Today>03/04/2021</S.Today>
            </S.Welcome>
            <S.InstantActions>
                <S.InstantActionButton onClick={() => push(`/admin/posts/new`)}>Nova Publicação</S.InstantActionButton>
                <S.InstantActionButton>Editar Publicação</S.InstantActionButton>
                <S.InstantActionButton>Excluir Publicação</S.InstantActionButton>
            </S.InstantActions>
            <S.ProfileInfo>
                <S.ProfileImageUsername>
                    <S.ProfileImage src="https://avatars.githubusercontent.com/u/77847606?v=4" />
                    <S.AuthorName value="Vinícius 'Bleszerd' Resende" readOnly />
                </S.ProfileImageUsername>
                <S.ProfileData>
                    <S.InfoLabel>Posts total: <b>20</b></S.InfoLabel>
                    <S.InfoLabel>Likes totais: <b>360</b></S.InfoLabel>
                    <S.InfoLabel>Visitas ao perfil: <b>20</b></S.InfoLabel>
                </S.ProfileData>
            </S.ProfileInfo>
        </S.AdminPanelContainer>
    )
}