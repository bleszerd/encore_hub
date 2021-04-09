import { IPageNavigationProps, IPageNavigationItem } from '../../typescript/database'
import { useRouter } from 'next/router'
import * as S from './styles'
import { useEffect, useState } from 'react'

export default function PageNavigation(pageData: IPageNavigationProps) {
    const [pagesArray, setPagesArray] = useState<IPageNavigationItem[]>([])
    const { push } = useRouter()

    let { page: actPage, totalPages } = pageData

    useEffect(() => {
        const pagesIterator: IPageNavigationItem[] = []

        if (actPage > totalPages) {
            push(`/`)
        }


        for (let i = actPage - 2; i < actPage + 3; i++) {

            if (i <= 0 || i > totalPages) {
                continue
            }

            if (i == actPage) {
                pagesIterator.push({
                    label: i,
                    url: `?page=${i}`,
                    active: true
                })

                continue
            }

            pagesIterator.push({
                label: i,
                url: `?page=${i}`
            })
        }

        setPagesArray(pagesIterator)
    }, [actPage])

    function handlePage(urlToGo: string) {
        push(urlToGo)
    }

    return (
        <S.PageNavigationContainer>
            <S.NavigationButton onClick={() => handlePage('?page=1')}>
                <S.PageLabel>F</S.PageLabel>
            </S.NavigationButton>
            {
                pagesArray.map(pgb => {
                    return (
                        <S.NavigationButton onClick={() => handlePage(pgb.url)} active={pgb.active}>
                            <S.PageLabel active={pgb.active}>{pgb.label}</S.PageLabel>
                        </S.NavigationButton>
                    )
                })
            }
            <S.NavigationButton onClick={() => handlePage(`?page=${totalPages}`)}>
                <S.PageLabel>L</S.PageLabel>
            </S.NavigationButton>
        </S.PageNavigationContainer>
    )
}