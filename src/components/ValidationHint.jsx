import styles from '@/styles/about/about.module.css'

const ValidationHint = ({text}) => {
  return (
        <div onMouseOver={(e) => e.target.style.display = "none"}
        onMouseOut={(e) => setTimeout(()=>e.target.style.display = "block" , 2000)}
        className={styles.errorMessage}>{text}<span></span></div>
  )
}

export default ValidationHint