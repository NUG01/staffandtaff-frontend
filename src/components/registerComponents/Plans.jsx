import styles from '@/styles/register/plans.module.css'

const Plans = ({className, setShowStripe, setShowPlans, inheritedStyles, logCurrentJob}) => {
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
            price_code: 'price_1Mk5DOGAxhWdhlP53UxnOElf',
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
            price_code: 'price_1Mk5DOGAxhWdhlP53UxnOElf',
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
            price_code: 'price_1Mk5DOGAxhWdhlP53UxnOElf',
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
            price_code: 'price_1Mk5DOGAxhWdhlP53UxnOElf',
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
            price_code: 'price_1Mk5DOGAxhWdhlP53UxnOElf',
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
            price_code: 'price_1Mk5DOGAxhWdhlP53UxnOElf',
        },
    ]

  return (
    <div className={`${styles.main} ${className}`}>
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
                                            {privladge.included ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>} 
                                            {privladge.desc}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <button className={styles.button} onClick={()=>{setShowStripe(true); setShowPlans(false); scrollTo(0, 0);}}>subscribe</button>
                    </div>
                )
            })
        }

        <div className={`${inheritedStyles.goBack} ${styles.plansGoBack}`}>
            <span onClick={()=> {setShowPlans(false); setShowStripe(false); scrollTo(0,0) }}>
                <i className="fa-solid fa-chevron-left"></i> précédent
            </span>
        </div>
    </div>
  )
}

export default Plans