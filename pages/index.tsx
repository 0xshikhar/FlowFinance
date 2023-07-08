import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/src/styles/Home.module.css'
import InstructionsComponent from "../components/InstructionsComponent";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='flex h-screen'>
        <main className={styles.main}>
          {/* just remove Instrctions Component & write your code */}
          <h1>Hello World</h1>
        </main>
      </div>
    </>
  )
}
