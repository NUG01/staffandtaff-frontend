import styles from '@/styles/tips/tips.module.css'
import Link from 'next/link';

const TipsList = ({data , isHeader}) => {

  let tipKeys = Object.keys(data)
  let tipValues = Object.values(data)

  return (
    <>
      <div className={styles.tipsContainer}>
        {isHeader && <h1 className={styles.mainHeader}>Conseils de la part de Staff&Taff</h1>}
        {
          tipKeys.map((item, mainIndex) => {
              return(
                  <div key={mainIndex} className={styles.tipsParent}>
                      {!isHeader && <h1>{item}</h1>}
                      <div className={styles.tipsRow}>
                          {tipValues[mainIndex].map((item, index) =>{
                              return(
                                  <Link href={`/tips/${item.id}`} key={index} className={styles.tip}>
                                      <img src="/tip-template-img.png" alt="" />
                                      <div className={styles.tipContent}>
                                          <h1 className={styles.header}>
                                              {item.heading}
                                          </h1>
                                          <p>{item.date}</p>
                                          <div className={styles.content}>
                                              {item.content.substring(0, 150)}
                                              { item.content.length > 150 ? <span className="viewMore">... <p>Voir plus</p></span> : ''}
                                          </div>
                                      </div>
                                  </Link>
                              )
                          })}
                      </div>
                  </div>
              )
          })
        }
      </div>
    </>
  )
}

export default TipsList