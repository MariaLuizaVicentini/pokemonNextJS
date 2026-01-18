import Link from "next/link"
import NavBar from "@/components/NavBar"

export default function Products() {
    return (
    <>
        <NavBar></NavBar>
        <h1>Página de produtos</h1>
        <Link href="/" legacyBehavior>
            <a>Voltar</a>
        </Link>
    </>

    )
}

