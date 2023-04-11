import styles from '../../styles/homepage/homepage.module.css'
import { useState, useRef } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import axios from '@/lib/axios';
import Axios from 'axios';

export default function Filter({expanded, setChosenCity}){
    const [searching, setSearching] = useState(false)
    
    const cityInp  = useRef()    
    const cityMainInp = useRef()
    const countrySelect = useRef()

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    
    const [country, setCurrCountry] = useState("")

    const [cities, setCities] = useState()
    const [citySelected, setCitySelected] = useState()

    const lastRequest = useRef(null)

    function setCityFunc(item, city_name){
        setCitySelected(true)
        setCities([])
        cityInp.current.value = item.id
        cityMainInp.current.value = city_name


        setChosenCity(item)
        
        document.querySelector('.shown-city-inp').classList.remove('input-error')
    }

    function searchCities(e){
        setCitySelected(undefined)
        setCities([])

        let city_name = e.target.value  
        let country_code = countrySelect.current.value
                
        if(city_name.length > 2){

            if(lastRequest.current != null) lastRequest.current.cancel()
    
            lastRequest.current = Axios.CancelToken.source()
    
            setSearching(true)

            axios.post('/api/v1/cities', {city_name, country_code}, {
                cancelToken: lastRequest.current.token, 
            }).then(function(res) {
                setCities(res.data.data)
                setCitySelected(false)
                setSearching(false)
            });
        }
    }

    function clearInputs(){
        document.querySelector('#search').value = ''

        let inputs = document.getElementById('filter').querySelectorAll('input')
        let selects = document.getElementById('filter').querySelectorAll('select')

        for(var i=0; i < inputs.length; i++){

            inputs[i].value = ''

        }

        for(var i=0; i < selects.length; i++){

            selects[i].value = ''

        }

        setCurrCountry('')
    }

    function setCountry(e){
        setCurrCountry(e.target.value)

        setCitySelected(undefined)
        cityInp.current.value = ''
        cityMainInp.current.value = ''

    }

    return(
       <>
        <div className={`${styles.filter} ${expanded ? styles.expandedFilter : ''}`} id="filter">

            <div className={styles.filterRow}>
                <div className={`${styles.filterInputParent}`}>         
                    <label htmlFor="">Pays</label>
                    <select ref={countrySelect} id="country" onChange={(e)=> setCountry(e)} className='required-record' defaultValue={""}>
                        <option value="" disabled>Sélectionner</option>
                        <option value="CH">Suisse</option>
                        <option value="FR">France</option>
                    </select>
                </div>

                <div className={`${styles.cityListHolder} ${styles.filterInputParent}`}>
                    <label htmlFor="">Ville</label>
                    <input ref={cityMainInp} className={`shown-city-inp required-record ${styles.cityInputPadding} ${country.length === 0 ? styles.disabledInput : ''}`} type="text" onInput={(e)=>{
                        cityInp.current.value = ''
                        searchCities(e)
                    }}/>
                    <input id="city" type="hidden" ref={cityInp} className='required-record hidden-city-inp'/>
                    <div className={`${styles.cityList} ${!citySelected && citySelected != undefined && cities.length != 0 ? styles.showCityList : ''}`}>
                        {cities != undefined && cities.length != 0  &&
                            (cities.map((item, index) =>{
                                return(
                                    <div key={index} onClick={(e)=> setCityFunc(item, item.city_name)}>{item.city_name}</div>
                                )
                            }))
                        }
                    </div>
                    <img src="/load-spinner.gif" alt="" className={`${styles.loadSpinner} ${!searching ? 'd-none' : ''}`}/>
                </div>
                
                <div className={`${styles.filterInputParent}`}>         
                    <label htmlFor="">Rayon</label>
                    <input type="number" placeholder="0 km" id="distance"/>
                </div>
            </div>

            <div className={styles.filterRow}>
                <div className={`${styles.filterInputParent}`}>         
                    <label htmlFor="">Catégorie</label>
                    <select id="category" className='required-record' onChange={(e)=>e.target.classList.remove('input-error')} defaultValue={""}>
                        <option value="" disabled>Sélectionner</option>
                        <option value="0">Restaurant</option>
                        <option value="1">Hôtel</option>
                    </select>
                </div>

                <div className={`${styles.filterInputParent}`}>         
                    <label htmlFor="">Type de contrat</label>
                    <select id="contract_type" className='required-record' onChange={(e)=>e.target.classList.remove('input-error')} defaultValue={""}>
                        <option value="" disabled>Sélectionner</option>
                        <option value="0">Contrat à durée déterminé</option>
                        <option value="1">Contrat à durée indéterminé</option>
                    </select>
                </div>
            </div>


            <div className={`${styles.filterRow} ${styles.filterDifferRow}`}>
                <div className={`${styles.datePickerHolder} ${styles.filterInputParent}`}>
                    <label htmlFor="">Date de début</label>
                    <DatePicker 
                        selected={startDate}
                        onKeyDown={(e) => {
                        e.preventDefault();
                        }}
                        id="start_date"
                        onChange={date => setStartDate(date)}
                        dateFormat='dd/MM/yyyy'
                        showYearDropdown
                        scrollableMonthYearDropdown
                        placeholderText='jj/mm/aaaa'
                    />
                    <img src="/datepicker.png" alt="" className={styles.datePickerImg}/>
                </div>            

                <div className={`${styles.datePickerHolder} ${styles.filterInputParent}`}>
                    <label htmlFor="">Date de Fin</label>
                    <DatePicker 
                        selected={endDate}
                        onKeyDown={(e) => {
                        e.preventDefault();
                        }}
                        id="end_date"
                        onChange={date => setEndDate(date)}
                        dateFormat='dd/MM/yyyy'
                        showYearDropdown
                        scrollableMonthYearDropdown
                        placeholderText='jj/mm/aaaa'
                    />
                    <img src="/datepicker.png" alt="" className={styles.datePickerImg}/>
                </div>            
            </div>

            <h5>Fourchette salariale</h5>

            <div className={`${styles.filterRow} ${styles.filterDifferRow}`}>

                <div className={`${styles.filterInputParent}`}>         
                    <label htmlFor="">Min</label>
                    <input type="number" placeholder="1500" id="min_range"/>
                </div>

                <div className={`${styles.filterInputParent}`}>         
                    <label htmlFor="">Max</label>
                    <input type="number" placeholder="20000" id="max_range"/>
                </div>
                
                <div className={`${styles.filterInputParent}`}>         
                    <label htmlFor="">Devise</label>
                    <select className='required-record' onChange={(e)=>e.target.classList.remove('input-error')} defaultValue={""} id="currency">
                        <option value="" disabled>Sélectionner</option>
                        <option value="0">EUR</option>
                        <option value="1">CHF</option>
                    </select>
                </div>

                <div className={`${styles.filterInputParent}`}>         
                    <label htmlFor="">Type de rémunération</label>
                    <select className='required-record' onChange={(e)=>e.target.classList.remove('input-error')} defaultValue={""} id="period">
                        <option value="" disabled>Sélectionner</option>
                        <option value="0">Par heure</option>
                        <option value="1">Par mois</option>
                        <option value="2">Par an</option>
                    </select>
                </div>

            </div>

            <span onClick={()=> clearInputs()} className={styles.clearButton}>EFFACER</span>

        </div>  

        {/* <div className={`${styles.earthContainer} ${!searching ? 'd-none' : ''}`}> */}
        {/* <div className={`${styles.earthContainer} ${!searching ? '' : ''}`}> */}
            {/* <div className={styles.magnifierGLass}></div> */}
            {/* <div className={styles.earth}></div> */}
        {/* </div> */}
    </>
    )
}