import NavBar from "@/components/NavBar";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>      
      <NavBar></NavBar>
      <h1>Hello Word Next.js</h1>
    </div>
  )
}