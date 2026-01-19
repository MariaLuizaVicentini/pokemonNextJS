import Link from "next/link"
import Head  from "next/head"

export default function Products() {
    return (
    <>
        <Head>
            <title>Página de Produtos</title>
        </Head>
        <h1>Página de produtos</h1>
        <Link href="/" legacyBehavior>
            <a>Voltar</a>
        </Link>
    </>

    )
}

