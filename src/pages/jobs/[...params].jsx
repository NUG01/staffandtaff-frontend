import Header from '../header';
import Footer from '../footer';
import Head from "next/head";
import styles from '../../styles/jobs/singleJob.module.css'
import { useEffect, useRef, useState} from 'react';

export default function Job({isLogged, user, logout, data}) {

    let [longer, setLonger] = useState(false)
    let [loadText, setText] = useState('See more')
    let [expanded, setExpand] = useState(false)

    const obj = data

    const descriptionBlock = useRef()

    function expandText(){
        setExpand(!expanded)
        setLonger(true)

        !expanded ? setText('See less') : setText('See more')
    }

    useEffect(()=>{
        setLonger(descriptionBlock.current.clientWidth < descriptionBlock.current.scrollWidth || descriptionBlock.current.clientHeight < descriptionBlock.current.scrollHeight)
    }, [])

    return (
        <>
            <Head>
                <title>{obj.title}</title>
            </Head>

            <Header isLogged={isLogged} user={user} logout={logout} active="singleJob"/>

            <div className={styles.mainWrapper}>
                <div className={styles.top}>
                    <div className={styles.socials}>
                        <a href="linkedin.com" target="_blank">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="twitter.com" target="_blank">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="facebook.com" target="_blank">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="instagram.com" target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>

                    <div className={styles.company}>
                        <div className={styles.companyTop}>
                            <img src="/single-job-profile.png" alt="" className={styles.companyProfile} />

                            <div className={styles.companyNameReview}>
                                <h1>Sushi House</h1>
                                <div className="stars-c">
                                    <div className="stars">
                                        <img src="/star.png" alt="" />
                                        <img src="/star.png" alt="" />
                                        <img src="/star.png" alt="" />
                                        <img src="/star.png" alt="" />
                                        <img src="/star.png" alt="" />
                                    </div>
                                    9 recommendations
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.companyBottom} ${longer ? styles.longText : ''} ${expanded ? styles.expand : ''}`} ref={descriptionBlock}>
                            {obj.body}
                        </div>
                        {longer ? (
                            <div className={`${styles.seeMore} ${!longer ? styles.hide : ''}`} onClick={()=> expandText()}>{loadText}
                            </div>
                        ):(
                            ''
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export async function getServerSideProps(context){
    if(context.query.params){
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${Number(context.query.params[0])}`)
        const jobsData = await response.json()
        return{
            props: {
                data: jobsData
            }
        }
    }
}