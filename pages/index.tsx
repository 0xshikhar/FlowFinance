import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/src/styles/Home.module.css'
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";
import { config } from "@onflow/fcl";
import Wallet from '../components/wallet';

const inter = Inter({ subsets: ['latin'] })

config({
  "app.detail.title": "Flow Finance",
  "app.detail.icon": "https://shikhar.xyz/wp-content/uploads/2023/07/flowfi-logo.png",
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
