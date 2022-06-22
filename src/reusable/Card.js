import React from 'react'
import styles from '../css/DetailCategory.module.css';

const Card = ({img,title}) => {
  return (
    <div className={styles.cardBody}>
        <img className={styles.cardImg} src={img} alt={title} />
        <p>
            <strong className={styles.cardText}>{title}</strong>
        </p>
    </div>
  )
}

export default Card