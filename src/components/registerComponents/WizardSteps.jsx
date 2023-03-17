export default function Wizard({styles, step, maxSteps, type, showStripe, completedSteps}){
    
    if(step === 2){
        completedSteps[0] = true
    }
    
    if(step === 3){
        completedSteps[1] = true
    }
    
    if(step === 4){
        completedSteps[2] = true
    }
    
    if(step === 5){
        completedSteps[3] = true
    }
    
    if(maxSteps === 3){
        return(
            <div className={`${styles.wizardMain} ${showStripe ? styles.hideSection : ''}`}>
                <h1>Devenez Recruteur sur Staff&Taff</h1>
                <p>Les informations saisies maintenant peuvent être modifiées après la connexion.</p>

                <div className={`${styles.wizard} ${completedSteps[0] ? styles.recruiterWizardStepOne : ''} ${completedSteps[1] ? styles.recruiterWizardStepTwo : ''}`}>
                    <div className={step < 2 ? styles.currentStep : styles.completedStep} txt="Créez un compte">
                        <div>
                            <i className="fa-solid fa-check"></i>
                        </div>
                    </div>
                    
                    <div className={`${step === 2 ? styles.currentStep : ''}${step === 3 ? styles.completedStep : ''}`} txt="Ajoutez votre établissement">
                        <div>
                            <i className="fa-solid fa-check"></i>
                        </div>
                    </div>
                    
                    <div className={step === 3 ? styles.currentStep : ''} txt="Publiez une offre d'emploi">
                        <div>
                            <i className="fa-solid fa-check"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className={styles.wizardMain}>
                <h1>Find Your Workplace on Staff&Taff</h1>
                <p>Les informations saisies maintenant peuvent être modifiées après la connexion.</p>

                <div className={`${styles.wizard} ${type === 'seeker' ? styles.seeker : ''}`}>
                    <div className={step < 2 ? styles.currentStep : styles.completedStep} txt="Create an Account">
                        <div>
                            <i className="fa-solid fa-check"></i>
                        </div>
                    </div>
                    
                    <div className={`${step === 2 ? styles.currentStep : ''}${step === 3 ? styles.completedStep : ''}`} txt="Personal Information">
                        <div>
                            <i className="fa-solid fa-check"></i>
                        </div>
                    </div>
                    
                    <div className={`${step === 3 ? styles.currentStep : ''}${step === 4 ? styles.completedStep : ''}`} txt="Work Experience">
                        <div>
                            <i className="fa-solid fa-check"></i>
                        </div>
                    </div>
                    
                    <div className={`${step === 4 ? styles.currentStep : ''}${step === 5 ? styles.completedStep : ''}`} txt="Education">
                        <div>
                            <i className="fa-solid fa-check"></i>
                        </div>
                    </div>
                    
                    <div className={step === 5 ? styles.currentStep : ''} txt="Cover Letter">
                        <div>
                            <i className="fa-solid fa-check"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}