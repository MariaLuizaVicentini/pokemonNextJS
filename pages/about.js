import NavBar from "@/components/NavBar"
import Link from "next/link"

export default function About() {
    return (
        <>
            <NavBar></NavBar>
            <h1>Página de About</h1>
            <Link href="/" legacyBehavior>
                <a> Voltar</a>
            </Link>
        </>

    )
}