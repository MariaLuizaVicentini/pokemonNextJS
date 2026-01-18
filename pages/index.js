import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link'
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
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
      
      <h1>Hello Word Next.js</h1>
    </div>
  )
}