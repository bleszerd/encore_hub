import ContentCard from '../ContentCard'

import * as S from './styles'

import { IContentProps } from '../../typescript/database'

export default function Content({ contentData }: IContentProps) {
    return (
        <S.ContentConatainer>
            {
                contentData.map(ctt => (
                    <ContentCard
                        key={ctt._id}
                        contentCard={ctt}
                    />
                ))
            }
        </S.ContentConatainer>
    )
}