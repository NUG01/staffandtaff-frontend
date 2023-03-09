import styles from '../../styles/homepage/homepage.module.css'
import { useRouter } from 'next/router';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';

export default function Banner({callBack}) {
    const router = useRouter()

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
                <form onSubmit={formSubmit} className={styles.searchContainer}>
                    <input type="text" placeholder="Search" onChange={event => setValue(event.target.value)}/>
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
