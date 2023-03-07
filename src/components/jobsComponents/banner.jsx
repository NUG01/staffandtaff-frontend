import styles from '../../styles/homepage/homepage.module.css'
import { FaSearch } from "react-icons/fa";

export default function Banner() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.backgroundGrad}>
            </div>
            <div className={styles.searchPlace}>
                <img src="/logo.png" alt="" className={styles.bannerLogo} />
                <form className={styles.searchContainer}>
                    <input type="text" placeholder="Search" />
                    <FaSearch className={styles.searchButton}/>
                    <div className={styles.filter}>
                        <img src="/filter.png" alt="" />
                    </div>
                    <button>SEARCH</button>
                </form>
            </div>
        </div>
    );
}
