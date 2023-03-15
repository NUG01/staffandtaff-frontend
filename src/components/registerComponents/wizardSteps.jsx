export default function wizard({styles, step, maxSteps, type}){

    if(maxSteps === 3){
        return(
            <div className={styles.wizardMain}>
                <h1>Devenez Recruteur sur Staff&Taff</h1>
                <p>Les informations saisies maintenant peuvent être modifiées après la connexion.</p>

                <div className={styles.wizard}>
                    <div className={step === 1 ? styles.currentStep : styles.completedStep} txt="Create an Account">
                        <div>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                    
                    <div className={`${step === 2 ? styles.currentStep : ''}${step === 3 ? styles.completedStep : ''}`} txt="Establishment">
                        <div>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                    
                    <div className={step === 3 ? styles.currentStep : ''} txt="Job Post">
                        <div>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className={styles.wizardMain}>
                <h1>Devenez Recruteur sur Staff&Taff</h1>
                <p>Les informations saisies maintenant peuvent être modifiées après la connexion.</p>

                <div className={`${styles.wizard} ${type === 'seeker' ? styles.seeker : ''}`}>
                    <div className={step === 1 ? styles.currentStep : styles.completedStep} txt="Create an Account">
                        <div>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                    
                    <div className={`${step === 2 ? styles.currentStep : ''}${step === 3 ? styles.completedStep : ''}`} txt="Personal Information">
                        <div>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                    
                    <div className={`${step === 3 ? styles.currentStep : ''}${step === 4 ? styles.completedStep : ''}`} txt="Work Experience">
                        <div>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                    
                    <div className={`${step === 4 ? styles.currentStep : ''}${step === 5 ? styles.completedStep : ''}`} txt="Education">
                        <div>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                    
                    <div className={step === 5 ? styles.currentStep : ''} txt="Cover Letter">
                        <div>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}