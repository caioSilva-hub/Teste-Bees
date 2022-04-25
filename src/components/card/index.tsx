import React, { useState } from 'react'

import Style from './card.module.css'
import { cardProps } from '../../types/beesModel'
import Tag from '../tags'

const Card = ({ data }: cardProps) => {
  const [display, setDisplay] = useState<boolean>(true)

  return (
    <>
      {display &&
        <div className={Style.container}>
          <img src="./delete.png" alt="delete" className={Style.deleteImg} onClick={() => setDisplay(false)} />
          <p className={Style.tittle}>{data.name}</p>
          <div className={Style.adress}>
            <p>{data.city}</p>
            <p>{`${data.state} - ${data.country}`}</p>
          </div>
          <div className={Style.Tag}>
            <Tag image={'type'} text={data.brewery_type ? data.brewery_type : ' - '} />
            <Tag image={'cepTag'} text={data.postal_code?data.postal_code:' - '} />
            <Tag image={'phoneTag'} text={data.phone ? data.phone : ' - '} />
            <Tag image={'addMoreTag'} text={'add more'} />
          </div>
        </div>
      }
    </>
  )
}
export default Card