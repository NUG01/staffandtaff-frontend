import styles from '../../styles/homepage/homepage.module.css'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux'
import { pushData } from '@/redux/jobsData';

export default function JobList({data}) {
    const jobsData = useSelector(state => state.jobsData.value)

    const dispatch = useDispatch()

    const [loadedData, setLoadedData] = useState(data)

    const [page, setPage] = useState(1)

    useEffect(()=> {
        if(jobsData.length != 0){
            scrollTo(0, localStorage.getItem('jobsScroll'))
            setLoadedData(jobsData)
        }
    }, [])

    async function loadMore(e){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const jobsData = await response.json()

        e.target.style.opacity = '1'; 
        e.target.style.pointerEvents = 'unset'; 

        setLoadedData([...loadedData, ...jobsData])
        setPage(page + 1)

        dispatch(pushData([...loadedData, ...jobsData]))
    }
    
    return (
        <>
            <div className={styles.mainpageList} id={styles.jobListing}>   
                {
                    loadedData.map((item, index) =>{
                        return (
                            <Link onClick={()=>localStorage.setItem("jobsScroll", scrollY)} href={`jobs/${item.id}`} key={Math.random()} className={styles.jobHolder}>
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

            <div className={styles.loadMore} onClick={ (e) => {loadMore(e); e.target.style.opacity = '0.4'; e.target.style.pointerEvents = 'none';}}>
                LOAD MORE
            </div>
        </>
    );
}