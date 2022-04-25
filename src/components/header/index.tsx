import React,{useEffect} from 'react'

import Styles from './header.module.css'
import { useName } from '../../context/beesContext'
import changePage from '../../Utils/changePage'

const Header = () => {
    const { name } = useName()

    return (
        <div className={Styles.container}>
            <div className={Styles.back}>
                <img src="./back.png" alt="Go back " className={Styles.imgBack} onClick={changePage('/')} />
                <p>GO BACK</p>
            </div>
            <p>{name}</p>

        </div>
    )
}
export default Header
