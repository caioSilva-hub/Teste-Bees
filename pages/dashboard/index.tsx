import React from 'react'

import Header from '../../src/components/header'
import styles from '../../styles/dashboard.module.css'
import Card from '../../src/components/card'
import Head from 'next/head'
import { UseData } from '../../src/context/breweriesContext'
import { breweriesProps } from '../../src/types/beesModel'

export default function index() {
  const { listBreweries } = UseData();

  return (
    <>
      <Head>
        <title>dashboard</title>
        <link rel="icon" type="image/png" href="./bee.png" />
      </Head>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          {listBreweries?.map((breweries: breweriesProps) => {
            return (
              <Card data={breweries} key={breweries?.id}/>
            )
          })}
        </div>
      </div>
    </>
  )
}
