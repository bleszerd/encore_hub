export function generateSlug(title: string){
    return title.replaceAll(/([^a-zA-Z]+)/g, "_")
}

export function generatePostDate(){
    return new Date().toLocaleString("pt-BR")
}