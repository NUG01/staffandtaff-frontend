import styles from '../../styles/homepage/homepage.module.css'
import Link from 'next/link'

export default function Banner() {
    return (
        <div className={styles.generalInformation}>
            <div className={styles.counts}>
                <div className={styles.count}>
                    <div className={styles.number}>
                        <img src="/horn.png" alt="" />
                        <p>23,000</p>
                    </div>
                    <p>Job Offers Published</p>
                </div>
                <div className={styles.count}>
                    <div className={styles.number}>
                        <img src="/cv.png" alt="" />
                        <p>55,000</p>
                    </div>
                    <p>CVs Applied</p>
                </div>
                <div className={styles.count}>
                    <div className={styles.number}>
                        <img src="/sign.png" alt="" />
                        <p>23,000</p>
                    </div>
                    <p>Recruitments Happened</p>
                </div>
            </div>
            <div className={styles.explanation}>
                <h1>Become a Recruiter on Staff&Taff</h1>
                <div className={styles.explanationCards}>
                    <div className={styles.explanationCard}>
                        <img src="/exp-1.png" alt="" />
                        <h1 className={styles.expalnationHeading}>
                            Introduce Your Business
                        </h1>
                        <div className="explanation-tex">
                            Register your business on Staff&Taff and get rated high.
                        </div>
                    </div>
                    <div className={styles.explanationCard}>
                        <img src="/exp-2.png" alt="" />
                        <h1 className={styles.expalnationHeading}>
                            Find the best match
                        </h1>
                        <div className="explanation-tex">
                            Search the talents by detailed criteria to find the highly matching team member.
                        </div>
                    </div>
                    <div className={styles.explanationCard}>
                        <img src="/exp-3.png" alt="" />
                        <h1 className={styles.expalnationHeading}>
                            Successful Team
                        </h1>
                        <div className="explanation-tex">
                            Gather up a dream team with highly rated and recommended members.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.registerNow}>
                <div className={styles.txt}>
                    <img src="/starship.png" alt="" />
                    Still don’t have a recruiter account?
                </div>
                <Link className={styles.button} href="">Register Now</Link>
            </div>
        </div>
    );
}
