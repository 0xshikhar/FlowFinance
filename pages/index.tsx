import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/src/styles/Home.module.css'
import * as fcl from "@onflow/fcl";
import { config } from "@onflow/fcl";
import Wallet from '../components/wallet';

const inter = Inter({ subsets: ['latin'] })

config({
  "accessNode.api": "https://rest-testnet.onflow.org", // Mainnet: "https://rest-mainnet.onflow.org"
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn", // Mainnet: "https://fcl-discovery.onflow.org/authn"
});

export default function Home() {
  return (
    <>
      <div className='flex h-screen'>
        <main className={styles.main}>
          <h1>Flow Finance </h1>
          <Wallet/>
        </main>
      </div>
    </>
  )
}
