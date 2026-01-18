import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";


export default function Home() {
  return (
       <div className={styles.container}>
        <h1>Hello Word Netx.js</h1>
       </div>
  )
}