import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ data = ['1', '2', '3', '4'] }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
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
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Dog Fact &rarr;</h2>
            <p>{data[0]}</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Dog Fact &rarr;</h2>
            <p>{data[1]}</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Dog Fact &rarr;</h2>
            <p> {data[2]}</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Dog Fact &rarr;</h2>
            <p>{data[3]}</p>
          </a>
        </div>
      </main>
    </div>
  )
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    'https://wonderful-mushroom-0f8671c10.azurestaticapps.net/api/get'
  )
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { data },
  }
}
