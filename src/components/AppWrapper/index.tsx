import { AppWrapperProps } from '../../typescript/types'
import * as S from './styles'

export default function AppWrapper({ children }: AppWrapperProps) {
    return (
        <S.AppWrapperContainer>
            {children}
        </S.AppWrapperContainer>
    )
}