import { Box, Text, Image, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../../components/Header'
import styles from '../../styles/Home.module.css'

export const index: NextPage = () => {
  console.log("Bello");


  return (
    <div className={styles.container}>
      <Head>
        <title>Create God App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header times='yatta'></Header>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default index