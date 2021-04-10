import { IPageNavigationProps, IPageNavigationItem } from '../../typescript/database'
import { useRouter } from 'next/router'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { BsCaretLeftFill, BsCaretRightFill, BsCaretRight, BsCaretLeft } from 'react-icons/bs'

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

    if(actPage == 0 ){
        return <S.PageNavigationContainer></S.PageNavigationContainer>
    }

    return (
        <S.PageNavigationContainer>
            <S.NextBackAllTruestContainer>
                <S.NavigationButton onClick={() => handlePage('?page=1')}>
                    <S.PageIcon>
                        <BsCaretLeftFill />
                    </S.PageIcon>
                </S.NavigationButton>
                {
                    (actPage > 1) && (
                        <S.NavigationButton onClick={() => handlePage(`?page=${actPage - 1}`)}>
                            <S.PageIcon>
                                <BsCaretLeft />
                            </S.PageIcon>
                        </S.NavigationButton>
                    )
                }
            </S.NextBackAllTruestContainer>
            {
                pagesArray.map(pgb => {
                    return (
                        <S.NavigationButton onClick={() => handlePage(pgb.url)} active={pgb.active}>
                            <S.PageLabel active={pgb.active}>{pgb.label}</S.PageLabel>
                        </S.NavigationButton>
                    )
                })
            }
            <S.NextBackAllTruestContainer>
                {
                    (actPage < totalPages) && (
                        <S.NavigationButton onClick={() => handlePage(`?page=${actPage + 1}`)}>
                            <S.PageIcon>
                                <BsCaretRight />
                            </S.PageIcon>
                        </S.NavigationButton>
                    )
                }

                <S.NavigationButton onClick={() => handlePage(`?page=${totalPages}`)}>
                    <S.PageIcon>
                        <BsCaretRightFill />
                    </S.PageIcon>
                </S.NavigationButton>
            </S.NextBackAllTruestContainer>
        </S.PageNavigationContainer>
    )
}