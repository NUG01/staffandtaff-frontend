import { useState } from 'react';
import Link from 'next/link'
import styles from '../../styles/jobs/countryJobs.module.css'

const SingleCountry = ({country}) => {
    const [citiesShown,setCitiesShown] = useState(false);

    return (
            <div className={styles.main} key={country.id}>
                <h2 onClick={() => setCitiesShown(!citiesShown)} className={
                    citiesShown ? styles.headingUp : styles.heading
                }>Jobs In {country.name} <i className="fa-solid fa-chevron-down"></i></h2>
                <ul className={
                    citiesShown ? styles.cityListExpanded : styles.cityList
                }>
                {country.cities.map(city => {
                    return(
                        <li className={styles.cityItem} key={city.id}>
                            <Link href={`/jobs/${city.name}`}>{city.name}</Link>
                        </li> 
                    )
                })}
                </ul>
            </div>
    )
}

export default SingleCountry