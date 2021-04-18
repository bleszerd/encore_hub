import { useState, createContext, useContext, useEffect } from "react";
import { IAuthor } from "../../typescript/database";
import Cookie from 'js-cookie'

import { AuthorDataContext, AuthorDataProps } from "../../typescript/types";
import { retrieveData } from "../../utils/auth";

const AuthorContext = createContext<AuthorDataContext>({} as AuthorDataContext)

export default function AuthorData({ children }: AuthorDataProps) {
    const [authorData, setAuthorData] = useState<IAuthor>({} as IAuthor)

    useEffect(() => {
        const localAuthorData = Cookie.getJSON("@authorizedAuthor")

        if (localAuthorData) {
            cleanUpdateData(localAuthorData)
        }
    }, [])

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