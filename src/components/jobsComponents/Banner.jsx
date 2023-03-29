import styles from '../../styles/homepage/homepage.module.css'
import { useRouter } from 'next/router';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import Filter from './Filter';

export default function Banner({callBack}) {
    const router = useRouter()
    const [expanded, setExpanded] = useState(false)
    const [chosen, setChosenCity] = useState(null)

    let filterData = {
        establishment_name: '',
        lng: '',
        lat: ''
    }
    let urlKeys = []
    let urlValues = []

    let filterUrl = 'search='

    function formSubmit(e){
        e.preventDefault()
        
        let inputs = document.getElementById('filter').querySelectorAll('input')
        let selects = document.getElementById('filter').querySelectorAll('select')

        filterData.establishment_name = document.getElementById('search').value
        urlKeys.push('establishment_name')
        urlValues.push(document.getElementById('search').value)
        filterUrl += `&establishment_name=${document.getElementById('search').value}`

        for(var i=0; i < inputs.length; i++){
            if(i != 0) {

                if(inputs[i].id === 'start_date' || inputs[i].id === 'end_date'){
                    let date = inputs[i].value.split('/')
                    var newDate = new Date( date[2], date[1] - 1, date[0]);
                    filterData[inputs[i].id] = newDate.getTime()
                    urlKeys.push(inputs[i].id)
                    urlValues.push(newDate.getTime())
                    filterUrl += `&${inputs[i].id}=${newDate.getTime()}`

                }else{

                    filterData[inputs[i].id] = inputs[i].value
                    urlKeys.push(inputs[i].id)
                    urlValues.push(inputs[i].value)
                    filterUrl += `&${inputs[i].id}=${inputs[i].value}`
                }

            }
        }
        
        for(var i=0; i < selects.length; i++){
            if(selects[i].id === 'currency' && selects[i].value.length === 0){
                
                filterData[selects[i].id] = 'CH'
                urlKeys.push(selects[i].id)
                urlValues.push('CH')
                filterUrl += `&${selects[i].id}=${'CH'}`

            }else{
                
                filterData[selects[i].id] = selects[i].value
                urlKeys.push(selects[i].id)
                urlValues.push(selects[i].value)
                filterUrl += `&${selects[i].id}=${selects[i].value}`

            }


        }

        if(chosen != null){
            filterData.lng = chosen.longitude
            filterData.lat = chosen.latitude
            
            filterUrl += `&lng=${chosen.longitude}`
            filterUrl += `&lat=${chosen.latitude}`
        }   

        location.search = filterUrl
    }

    function checkExpandedFilter(){
        if(document.querySelector(styles.showCityList)) console.log('asd')
        setExpanded(!expanded)
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
                        <input type="text" placeholder="Trouver un emploi près de chez soi" id="search"/>
                    </div>
                    <FaSearch className={styles.searchButton}/>
                    <div className={styles.filterButton} onClick={()=> checkExpandedFilter()}>
                        <img src="/filter.png" alt="" />
                    </div>
                    <button>
                        <span>RECHERCHE</span>
                        <FaSearch className={styles.mobileSearchButton}/>
                    </button>
                    <Filter expanded={expanded} setChosenCity={setChosenCity}/>
                </form>
            </div>
        </div>
    );
}
