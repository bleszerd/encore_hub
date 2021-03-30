import { useEffect, useState } from 'react'
import * as S from './styles'

const pages = {
    count: 3,
}

export default function PageNavigation() {
    const [page, setPage] = useState([] as number[])

    useEffect(() => {
        const allPages = []
        for (let p = 1; p < pages.count + 1; p++) {
            allPages.push(p)
        }

        setPage(allPages)
    }, [])

    return (
        <S.PageNavigationContainer>
            {page.length > 0 && page.map(pg => (
                <S.NavigationButton>
                    <S.PageLabel>{pg}</S.PageLabel>
                </S.NavigationButton>
            ))}
        </S.PageNavigationContainer>
    )
}