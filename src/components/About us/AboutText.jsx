import styles from '@/styles/about/about.module.css'
const AboutText = ({}) => {
  return (
    <div className={styles.box}>
        <h1 className={styles.title}><span>À propos</span>de la Plateforme</h1>
        <p className={styles.desc}>Il est convenu que le client souhaite commercialiser une nouvelle plateforme permettant aux recruteurs et candidats du secteur de la restauration et de l'hôtellerie de s'inscrire et de proposer leurs offres d'emploi en ligne ou de postuler à une offre d'emploi. Ainsi, il sera possible pour les candidats de rechercher sur la plateforme une offre d'emploi précise selon des critères prédéfinis et d'y postuler.<br /><br />
        Un système de notation tant pour les candidats que pour les employeurs sera développé afin d'offrir un service sérieux et de faire gagner du temps et de l'énergie à tous les acteurs du marché. L'administrateur du site devra pouvoir effectuer certaines actions comme supprimer un utilisateur ou une annonce ou résilier un abonnement payant. Cela sera possible grâce au back-office de gestion qui sera développé. Les marchés visés sont la Suisse et la France.<br /><br />
        Il est convenu que le client souhaite commercialiser une nouvelle plateforme permettant aux recruteurs et candidats du secteur de la restauration et de l'hôtellerie de s'inscrire et de proposer leurs offres d'emploi en ligne ou de postuler à une offre d'emploi.
        </p>
    </div>
  )
}

export default AboutText