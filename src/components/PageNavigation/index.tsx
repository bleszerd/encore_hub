import { IPageNavigationProps } from '../../typescript/database'
import { useRouter } from 'next/router'
import * as S from './styles'

export default function PageNavigation(pageData: IPageNavigationProps) {
    const { push } = useRouter()

    const { hasNextPage, hasPrevPage, page: actPage, totalPages, totalDocs, nextPage } = pageData || null

    function handlePage(pageToGo: number) {
        push(`?page=${pageToGo}`)
    }

    return (
        <S.PageNavigationContainer>
            {hasPrevPage && (
                <S.NavigationButton onClick={() => handlePage(actPage - 1)}>
                    <S.PageLabel>{actPage - 1}</S.PageLabel>
                </S.NavigationButton>
            )}
            <S.NavigationButton active onClick={() => handlePage(actPage)}>
                <S.PageLabel active>{actPage}</S.PageLabel>
            </S.NavigationButton>
            {!!nextPage && (
                <S.NavigationButton onClick={() => handlePage(nextPage)}>
                    <S.PageLabel>{nextPage}</S.PageLabel>
                </S.NavigationButton>
            )}
        </S.PageNavigationContainer>
    )
}