import Cookie from 'js-cookie'

export function handleAuthLogout() {
    localStorage.removeItem("@jwt")
    Cookie.remove("@authorizedAuthor")
}

export function retrieveData() {
    const localJwt = localStorage.getItem("@jwt")
    const localAuthorData = Cookie.getJSON("@authorizedAuthor")

    
    if (!localJwt || !localAuthorData) {
        handleAuthLogout()
        return {}
    }

    return {localJwt, localAuthorData}
}