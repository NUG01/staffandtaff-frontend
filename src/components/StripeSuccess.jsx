import Head from "next/head";
import Header from "@/pages/header";
import Footer from "@/pages/footer";

export default function StripeSuccess({isLogged, user, logout, styles}) {
	return (
        <>
        <Head>
            <title>Success Payment</title>
        </Head>

        <Header isLogged={isLogged} user={user} active="login"/>

            <div className={styles.mainWrapper}>
                <div className={styles.inboxCheck}>
                    <img src="/success-star.png" alt="" />
                    <div className={styles.side}>
                        Congratulations! You have successfully published your first job post on Staff&Taff!
                    </div>
                </div>
            <div className={styles.adArea}></div>
            </div>
        </>
	);

}