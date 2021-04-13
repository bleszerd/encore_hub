import { useRouter } from "next/router"
import { useEffect } from "react"

export default function About() {
    const { back } = useRouter()

    useEffect(() => {
        alert("EM BREVE!")
        back()
    }, [])

    return (
        <>
        </>
    )
}