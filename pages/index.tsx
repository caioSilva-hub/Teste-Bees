import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'


const Home: NextPage = () => {
  const router = useRouter()
  const [checked, setChecked] = useState<boolean>(false)
  const [name, setName] = useState<string>('')

  const handleChange = (event: any) => {
    setChecked(event.target.checked);
  };

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push('/dashboard')
  }

  return (
    <div className={styles.main}>
      <form className={styles.form} id="form1">

        <div className={styles.textInfo}>
          <abbr title="Por favor, digite seu nome completo" className={styles.text}><p>Please, enter your full name below</p></abbr>
          <abbr title="Somente caracteres alfabéticos" className={styles.text}><p>Only alphabetical characters are accepted</p></abbr>
        </div>

        <input type="text" placeholder='Full name' className={styles.enterName} required onChange={(e) => setName(e.target.value)} />

        <div className={styles.check}>
          <input type="checkbox" required onChange={handleChange} />
          <abbr title="Você é maior de 18 anos?" className={styles.text}><p>Are you older than 18 years old?</p></abbr>
        </div>

        <button type='submit' disabled={(!checked || name === '')} form="form1" onClick={handleClick}>ENTER</button>
      </form>
      <img src="./bee.png" alt="bee" />
    </div>
  )
}

export default Home
