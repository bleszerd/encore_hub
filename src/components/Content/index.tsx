import ContentCard from '../ContentCard'

import * as S from './styles'

import { IContentProps } from '../../typescript/database'

export default function Content({contentData}: IContentProps) {
    return (
        <S.ContentConatainer>
            {
                contentData.map(ctt => (
                    <ContentCard
                        author={ctt.author}
                        date={ctt.date}
                        image={ctt.image}
                        title={ctt.title}
                        slug={ctt.slug}
                    />
                ))
            }
        </S.ContentConatainer>
    )
}