import Head from "next/head";
import Header from "@/pages/header";
import Link from "next/link";

export default function StripeSuccess({isLogged, user, styles, companyData, jobData}) {
	return (
        <>
        <Head>
            <title>Success Payment</title>
        </Head>

        <Header isLogged={isLogged} user={user} active="login"/>

        <div className={`${styles.mainWrapper} ${styles.successWrapper}`}>
            <div className={styles.inboxCheck}>
                <img src="/success-star.png" alt="" />
                <div className={styles.side}>
                    Congratulations! You have successfully published your first job post on Staff&Taff!
                </div>
            </div>
            <div className={styles.adArea}>
                <div className={styles.jobHolder}>
                    <div className={styles.addToFavourites}></div>
                        <div>
                            <div className={styles.jobTop}>
                                <div className={styles.jobsDesc}>
                                    <div className={styles.name}>{companyData.name}</div>
                                    <div className={styles.company}>{companyData.company_name}</div>
                                </div>
                            </div>
                            <div className={styles.jobDetails}>
                                <div className={styles.jobCountry}>
                                    <img src={companyData.country === 'CH' ? '/ch.svg' : '/fr.svg'} alt="" />
                                    {companyData.country === 'CH' ? ' Suisse' : ' France'}
                                </div>
                                <div className={styles.location}>
                                    <img src="/on-site.svg" alt="" />
                                    On-site
                                </div>
                                <div className={styles.currency}>
                                    <img src="/coupon.svg" alt="" />
                                    {jobData.salary}
                                </div>
                                <div className={styles.period}>
                                    <img src="/clock.svg" alt="" />
                                    Full time
                                </div>
                            </div>
                       </div>
                    </div>
                    <Link href="/jobs">
                        View My Job Post
                    </Link>
            </div>
        </div>
        </>
	);

}