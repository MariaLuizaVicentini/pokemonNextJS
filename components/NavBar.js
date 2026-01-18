import Link from "next/link"

export default function NavBar() {
    return (
        <ul>
            <li>
                <Link href="/" legacyBehavior>
                    <a>Home</a>
                </Link>
            </li>

            <li>
                <Link href="/products" legacyBehavior>
                    <a>Produtos</a>
                </Link>
            </li>

            <li>
                <Link href="/about" legacyBehavior>
                    <a>Sobre nós</a>
                </Link>
            </li>
        </ul>
    )
}