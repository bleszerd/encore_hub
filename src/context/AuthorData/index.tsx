import { useState, createContext, useContext } from "react";
import { IAuthor } from "../../typescript/database";

import { AuthorDataContext, AuthorDataProps } from "../../typescript/types";

const AuthorContext = createContext<AuthorDataContext>({} as AuthorDataContext)

export default function AuthorData({ children }: AuthorDataProps) {
    const [authorData, setAuthorData] = useState<IAuthor>({} as IAuthor)

    function cleanUpdateData(newData: IAuthor) {
        setAuthorData(newData)
    }

    return (
        <AuthorContext.Provider
            value={{
                authorData,
                authorController: {
                    cleanUpdateData,

                }
            }}
        >
            {children}
        </AuthorContext.Provider>
    )
}

export function useAuthorData() {
    const context = useContext(AuthorContext)
    const { authorData, authorController } = context
    return { authorData, authorController }
}