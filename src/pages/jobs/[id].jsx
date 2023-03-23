import Header from '@/pages/header';
import Footer from '@/pages/footer';
import Head from "next/head";
import styles from '@/styles/jobs/singleJob.module.css'
import { useEffect, useRef, useState} from 'react';
import { useRouter } from 'next/router';

export default function Job({isLogged, user, logout, data}) {

    const router = useRouter()

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

            <Header isLogged={isLogged} user={user} active="singleJob"/>

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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam eum assumenda odio a! Quidem harum recusandae quia atque omnis. Ducimus facere officiis sunt, ipsa sequi quia commodi, id aperiam minima, earum incidunt iste consectetur ab blanditiis possimus eaque nostrum velit. Sapiente fuga culpa perferendis consequuntur minima laborum nostrum! Ratione, voluptatum?
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
    if(context.query.id){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${Number(context.query.id)}`)
        const jobsData = await response.json()
        return{
            props: {
                data: jobsData
            }
        }
    }
}