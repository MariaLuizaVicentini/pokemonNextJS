import Link from "next/link"
import Head from "next/head"

export default function About() {
    return (
        <>
            <Head>
                <title>Página de About</title>
            </Head>
            <h1>Página de About</h1>
            <Link href="/" legacyBehavior>
                <a> Voltar</a>
            </Link>
        </>

    )
}