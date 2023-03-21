import styles from '../../styles/homepage/homepage.module.css'
import { useRouter } from 'next/router';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import Filter from './Filter';

export default function Banner({callBack}) {
    const router = useRouter()
    const [expanded, setExpanded] = useState(false)

    const [searchValue, setValue] = useState('')

    function formSubmit(e){
        e.preventDefault()

        router.push({
            pathname: `/jobs`,
            query: { search: searchValue },
        })
    }

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.backgroundGrad}>
            </div>
            <div className={styles.searchPlace}>
                <img src="/logo.png" alt="" className={styles.bannerLogo} />
                <p>Texte énumérant tous les avantages de la plateforme et invitant l'utilisateur à s'inscrire en ligne.</p>
                <form onSubmit={formSubmit} className={styles.searchContainer}>
                    <div className={styles.filterHolder}>
                        <input type="text" placeholder="Trouver un emploi près de chez soi" onChange={event => setValue(event.target.value)}/>
                        <Filter expanded={expanded}/>
                    </div>
                    <FaSearch className={styles.searchButton}/>
                    <div className={styles.filterButton} onClick={()=> setExpanded(!expanded)}>
                        <img src="/filter.png" alt="" />
                    </div>
                    <button>
                        <span>RECHERCHE</span>
                        <FaSearch className={styles.mobileSearchButton}/>
                    </button>
                </form>
            </div>
        </div>
    );
}
