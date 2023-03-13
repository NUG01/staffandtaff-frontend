import styles from '../../styles/homepage/homepage.module.css'
import Link from 'next/link';

export default function JobList({data}) {

    
    return (
            <div className={styles.mainpageList} id={styles.jobListing}>   
                {
                    data.map((item, index) =>{
                        return (
                            <Link href={`jobs/${item.id}`} key={index} className={styles.jobHolder}>
                                <div className={styles.addToFavourites}></div>
                                <div>
                                    <div className={styles.jobTop}>
                                        <div className={styles.jobsDesc}>
                                            <div className={styles.name}>{item.id}</div>
                                            <div className={styles.company}>Company</div>
                                        </div>
                                    </div>
                                    <div className={styles.jobDetails}>
                                        <div className={styles.jobCountry}>
                                            <img src={index % 2 === 0 ? '/ch.svg' : '/fr.svg'} alt="" />
                                            {index % 2 === 0 ? ' Switzerland' : ' France'}
                                        </div>
                                        <div className={styles.location}>
                                            <img src="/on-site.svg" alt="" />
                                            On-site
                                        </div>
                                        <div className={styles.currency}>
                                            <img src="/coupon.svg" alt="" />
                                            €3200-3500
                                        </div>
                                        <div className={styles.period}>
                                            <img src="/clock.svg" alt="" />
                                            Full time
                                        </div>
                                    </div>
                                    <div className={styles.jobDate}>
                                        7 days ago
                                        <div className={index % 4 === 0 ? styles.expiration : 'd-none'}>
                                            Start / End: <span>12.12.23-17.12.23</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
                </div>
    );
}