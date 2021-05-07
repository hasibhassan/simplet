import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [data, setData] = useState([
    { fact: 'loading' },
    { fact: 'loading' },
    { fact: 'loading' },
    { fact: 'loading' },
  ])
  const fetcher = async () => {
    await fetch(
      'http://wonderful-mushroom-0f8671c10.azurestaticapps.net/api/get'
    )
      .then((res) => {
        console.log(res)
        res.json()
      })
      .then((res) => setData(res))
  }
  useEffect(() => {
    fetcher()
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Dog Facts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Dog Facts</h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {data.map((factItem, index) => {
            return (
              <a
                href="https://dukengn.github.io/Dog-facts-API/"
                className={styles.card}
                key={index}
              >
                <h2>Dog Fact &rarr;</h2>
                <p className={styles.fact}>{factItem.fact}</p>
              </a>
            )
          })}
        </div>
      </main>
      <div className={styles.footer}>
        <footer>
          <hr className={styles.hr} />
          <a href="https://docs.microsoft.com/en-us/azure/static-web-apps/overview">
            Hosted on Azure Static Web Apps
          </a>
        </footer>
      </div>
    </div>
  )
}
