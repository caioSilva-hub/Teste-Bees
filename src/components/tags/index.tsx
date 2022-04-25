import React, { useState } from 'react'
import Styles from './tag.module.css'

const TagImage = (tag: string) => {
    switch (tag) {
        case 'type':
            return './type_tag.png'
            break;
        case 'cepTag':
            return './cep_tag.png'
            break;
        case 'phoneTag':
            return './phone_tag.png'
            break;
        case 'addMoreTag':
            return './add_more_tag.png'
    }

}
interface TagProps {
    image: string
    text: string
}
const Tag = ({ image, text }: TagProps) => {
    const [openInput, setOpenInput] = useState(false)
    const [textAddMore, setTextAddMore] = useState('add more')

    const SubmitText = (event: string) => {
        document.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                setTextAddMore(event)
                setOpenInput(false)
            }
        })

    }

    return (
        <div className={Styles.container}>
            <img src={TagImage(image)} />
            {text != 'add more' ? (
                <p>{text}</p>
            ) : (
                <p onClick={() => setOpenInput(true)} className={Styles.openInput}>{textAddMore}</p>
            )}
            {openInput &&
                <input type='text' id="send" onChange={(e) => SubmitText(e.target.value)} />
            }
        </div>
    )
}
export default Tag
