import { useState } from 'react'
import styles from '../../styles/jobs/countryJobs.module.css'
import SingleCountry from './SingleCountry'

const CountryJobs = ({data}) => {
    return (
        <section className={styles.section}>
            {data.map((country, index) => {
                return <SingleCountry key={index} country={country} />
            })}
        </section>
    )
}

export default CountryJobs