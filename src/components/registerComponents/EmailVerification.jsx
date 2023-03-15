export default function EmailVerification({styles, setStep, className}){
    return(
        <div className={`${styles.verificationMain}  ${className}`}>
            <div className={`${styles.inboxCheck}`}>
                <div className={styles.heading}>
                    <img src="/attention-envelope-icon.png" alt="" />
                </div>
                <div className={styles.bottom}>
                    <h1>Please check your inbox</h1>
                    Not your email address? <span>Use a Different Email Address</span>
                </div>
            </div>

            <div className={styles.resendEmail}>
                <p>
                    Didn’t receive the verification email? Please, check the spam folder 
                    <br />
                    or click the “Resend” button
                </p>

                <p className={styles.sendAgain} onClick={()=> setStep(2)}>
                    RESEND EMAIL
                </p>
            </div>

            <div className={styles.consideration}>  
                <img src="/attention.png" alt="" />
                <p>
                    <span>Please consider: </span>
                    If you found the verification email in a spam folder, please mark it as “Not Spam” to be able to receive the applicant notifications in the future.
                </p>
            </div>
        </div>
    )
}