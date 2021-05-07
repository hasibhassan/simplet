import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [data, setData] = useState([])

  async function fetcher() {
    await fetch(
      'https://wonderful-mushroom-0f8671c10.azurestaticapps.net/api/get'
    )
      .then((res) => res.json())
      .then((res) => setData(JSON.stringify(res)))
  }

  useEffect(() => {
    fetcher()
  }, [])

  if (!data) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (data === []) {
    return (
      <div>
        <h1>Data is not loading :(</h1>
      </div>
    )
  } else {
    return (
      <div>
        {[data].map((arr, i) => {
          return (
            <div>
              <ul key={i}>
                <li>{arr}</li>
              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}
