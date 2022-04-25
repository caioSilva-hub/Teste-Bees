import { useState, useEffect } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import Styles from '../styles/Home.module.css'
import { useName } from '../src/context/beesContext'
import changePage from '../src/Utils/changePage'


const Home: NextPage = () => {
  const [checked, setChecked] = useState<boolean>(false)
  const { name, setName } = useName()
  useEffect(() => {
    if (localStorage.getItem('@User') != '') {
      window.location.reload();
    }
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem('@User', name)
    }
  }, [name])

  return (     
      <div className={Styles.main}>
      <Head>
        <title>Home</title>
        <link rel="icon" type="image/png" href="./bee.png" />
      </Head>
        <form className={Styles.form} id="form1">

          <div className={Styles.textInfo}>
            <abbr title="Por favor, digite seu nome completo" className={Styles.text}><p>Please, enter your full name below</p></abbr>
            <abbr title="Somente caracteres alfabéticos" className={Styles.text}><p>Only alphabetical characters are accepted</p></abbr>
          </div>

          <input type="text" placeholder='Full name' className={Styles.enterName} required onChange={(e) => setName(e.target.value)} />

          <div className={Styles.check}>
            <input type="checkbox" required onChange={handleChange} />
            <abbr title="Você é maior de 18 anos?" className={Styles.text}><p>Are you older than 18 years old?</p></abbr>
          </div>

          <button type='submit' disabled={(!checked || name === '')} form="form1" onClick={changePage('/dashboard')} className={!checked || name === '' ? Styles.btn : Styles.btnEnabled}>ENTER</button>
        </form>
        <img src="./bee.png" alt="bee" />
      </div>
  )
}

export default Home
