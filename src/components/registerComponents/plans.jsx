import styles from '../../styles/register/plans.module.css'

const Plans = ({}) => {
    const data = 
    [
        {
            id: 1,
            name: "Le Forfait 1",
            price: "0.00",
            privladges: [
                {
                    id: 1,
                    included: true,
                    desc: "Description du service 1",
                },
                {
                    id: 2,
                    included: true,
                    desc: "Description du service 2",
                },
                {
                    id: 3,
                    included: false,
                    desc: "Description du service 3",
                },
                {
                    id: 4,
                    included: false,
                    desc: "Description du service 4",
                },
                {
                    id: 5,
                    included: false,
                    desc: "Description du service 5",
                },
            ],
            isPopular: false,
        },
        {
            id: 2,
            name: "Le Forfait 2",
            price: "9.99",
            privladges: [
                {
                    id: 1,
                    included: true,
                    desc: "Description du service 1",
                },
                {
                    id: 2,
                    included: true,
                    desc: "Description du service 2",
                },
                {
                    id: 3,
                    included: false,
                    desc: "Description du service 3",
                },
                {
                    id: 4,
                    included: false,
                    desc: "Description du service 4",
                },
                {
                    id: 5,
                    included: false,
                    desc: "Description du service 5",
                },
            ],
            isPopular: true,
        },
        {
            id: 3,
            name: "Le Forfait 3",
            price: "19.99",
            privladges: [
                {
                    id: 1,
                    included: true,
                    desc: "Description du service 1",
                },
                {
                    id: 2,
                    included: true,
                    desc: "Description du service 2",
                },
                {
                    id: 3,
                    included: false,
                    desc: "Description du service 3",
                },
                {
                    id: 4,
                    included: false,
                    desc: "Description du service 4",
                },
                {
                    id: 5,
                    included: false,
                    desc: "Description du service 5",
                },
            ],
            isPopular: false,
        },
        {
            id: 4,
            name: "Le Forfait 4",
            price: "29.99",
            privladges: [
                {
                    id: 1,
                    included: true,
                    desc: "Description du service 1",
                },
                {
                    id: 2,
                    included: true,
                    desc: "Description du service 2",
                },
                {
                    id: 3,
                    included: false,
                    desc: "Description du service 3",
                },
                {
                    id: 4,
                    included: false,
                    desc: "Description du service 4",
                },
                {
                    id: 5,
                    included: false,
                    desc: "Description du service 5",
                },
            ],
            isPopular: false,
        },
        {
            id: 5,
            name: "Le Forfait 5",
            price: "9.99",
            privladges: [
                {
                    id: 1,
                    included: true,
                    desc: "Description du service 1",
                },
                {
                    id: 2,
                    included: true,
                    desc: "Description du service 2",
                },
                {
                    id: 3,
                    included: false,
                    desc: "Description du service 3",
                },
                {
                    id: 4,
                    included: false,
                    desc: "Description du service 4",
                },
                {
                    id: 5,
                    included: false,
                    desc: "Description du service 5",
                },
            ],
            isPopular: false,
        },
        {
            id: 6,
            name: "Le Forfait 6",
            price: "9.99",
            privladges: [
                {
                    id: 1,
                    included: true,
                    desc: "Description du service 1",
                },
                {
                    id: 2,
                    included: true,
                    desc: "Description du service 2",
                },
                {
                    id: 3,
                    included: false,
                    desc: "Description du service 3",
                },
                {
                    id: 4,
                    included: false,
                    desc: "Description du service 4",
                },
                {
                    id: 5,
                    included: false,
                    desc: "Description du service 5",
                },
            ],
            isPopular: false,
        },
    ]

  return (
    <div className={styles.main}>
        {
            data.map(item => {
                return(
                    <div key={item.id} className={item.isPopular ? styles.cardPopular : styles.card}>
                        <h2 className={styles.heading}>{item.name}</h2>
                        <div className={styles.price}>€{item.price} {item.price != "0.00" && <span>Par Mois</span>}</div>
                        <hr className={styles.hr} />
                        <ul className={styles.list}>
                            {
                                item.privladges.map(privladge => {
                                    return(
                                        <li key={"Description du service" + privladge.id}
                                         className={privladge.included ? styles.listItem : styles.listItemNotIncluded}>
                                            {privladge.included ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-xmark"></i>} 
                                            {privladge.desc}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <button className={styles.button}>subscribe</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Plans