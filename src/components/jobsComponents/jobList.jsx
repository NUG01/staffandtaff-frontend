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
            setLoadedData(jobsData)
            setTimeout(() => {
                scrollTo({top: localStorage.getItem('jobsScroll')})
            }, 1);
        }
    }, [])

    async function loadMore(e){
        e.target.style.opacity = '0.4'; 
        e.target.style.pointerEvents = 'none';

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs`)
        const { data } = await response.json()

        console.log(data);

        e.target.style.opacity = '1'; 
        e.target.style.pointerEvents = 'unset'; 

        setLoadedData([...loadedData, ...data])
        setPage(page + 1)

        dispatch(pushData([...loadedData, ...data]))
    }

    function addToFavourites(id){
        alert(id)
    }
    
    return (
        <>
            <div className={styles.mainpageList} id={styles.jobListing}>   
                {
                    loadedData.map((item, index) =>{
                        return (
                            <div key={item.id} className={styles.jobHolder}>
                                <div className={styles.addToFavourites} onClick={()=> addToFavourites(item.id)}></div>
                                <Link onClick={()=>localStorage.setItem("jobsScroll", scrollY)} href={`jobs/${item.id}`} >
                                    <div className={styles.jobTop}>
                                        <div className={styles.jobsDesc}>
                                            <div className={styles.name}>{item.id}</div>
                                            <div className={styles.company}>Company</div>
                                        </div>
                                    </div>
                                    <div className={styles.jobDetails}>
                                        <div className={styles.jobCountry}>
                                            <img src={item.country_code === 'CH' ? '/ch.svg' : '/fr.svg'} alt="" />
                                            {item.country_code === 'CH' ? ' Suisse' : ' France'}
                                        </div>
                                        <div className={styles.location}>
                                            <img src="/on-site.svg" alt="" />
                                            On-site
                                        </div>
                                        <div className={styles.currency}>
                                            <img src="/coupon.svg" alt="" />
                                            {item.salary}
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
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

            <div className={styles.loadMore} onClick={ (e) => {loadMore(e)}}>
                LOAD MORE
            </div>
        </>
    );
}