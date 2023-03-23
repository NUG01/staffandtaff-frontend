import styles from '../../styles/homepage/homepage.module.css'
import { useState, useRef } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

export default function Filter({expanded, filterData}){
    
    const cityInp  = useRef()    
    const cityMainInp = useRef()

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    
    const [country, setCurrCountry] = useState("")

    const [cities, setCities] = useState(['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'])
    const [citySelected, setCitySelected] = useState()

    function setCityFunc(item){
        setCitySelected(true)
        cityInp.current.value = item
        cityMainInp.current.value = item
        
        document.querySelector('.shown-city-inp').classList.remove('input-error')
    }

    async function setCountry(e){
        setCurrCountry(e.target.value)
        

        // await csrf()

        // axios
        //     .post('/api/v1/login', props)
        //     .then(() => {
        //     })
    }

    function clearInputs(){

    }

    return(
        <div className={`${styles.filter} ${expanded ? styles.expandedFilter : ''}`} id="filter">

            <div className={styles.filterRow}>
                <div className={`${styles.filterInputParent}`}>         
                    <label htmlFor="">Pays</label>
                    <select id="country" onInput={(e)=> setCountry(e)} className='required-record' onChange={(e)=>e.target.classList.remove('input-error')} defaultValue={""}>
                        <option value="">Sélectionner</option>
                        <option value="0">Suisse</option>
                        <option value="1">France</option>
                    </select>
                </div>

                <div className={`${styles.cityListHolder} ${styles.filterInputParent}`}>
                    <label htmlFor="">Ville</label>
                    <input ref={cityMainInp} className={`shown-city-inp required-record ${country.length === 0 ? styles.disabledInput : ''}`} type="text" onInput={(e)=>{
                        cityInp.current.value = ''
                        setCitySelected(false)
                    }}/>
                    <input id="city" type="hidden" ref={cityInp} className='required-record hidden-city-inp'/>
                    <div className={`${styles.cityList} ${!citySelected && citySelected != undefined ? styles.showCityList : ''}`}>
                        {
                            cities.map((item, index) =>{
                                return(
                                    <div key={index} onClick={(e)=> setCityFunc(item)}>{item}</div>
                                )
                            })
                        }
                    </div>
                </div>
                
                <div className={`${styles.filterInputParent}`}>         
                    <label htmlFor="">Rayon</label>
                    <input id="distance" type="text" placeholder='0 km'/>
                </div>
            </div>
            
            <div className={styles.filterRow}>
                <div className={`${styles.filterInputParent}`}>         
                    <label htmlFor="">Catégorie</label>
                    <select id="category" onInput={(e)=> setCountry(e)} className='required-record' onChange={(e)=>e.target.classList.remove('input-error')} defaultValue={""}>
                        <option value="">Sélectionner</option>
                        <option value="0">Suisse</option>
                        <option value="1">France</option>
                    </select>
                </div>

                <div className={`${styles.filterInputParent}`}>         
                    <label htmlFor="">Type de contrat</label>
                    <select id="contract_type" onInput={(e)=> setCountry(e)} className='required-record' onChange={(e)=>e.target.classList.remove('input-error')} defaultValue={""}>
                        <option value="">Sélectionner</option>
                         <option value="0">Suisse</option>
                        <option value="1">France</option>
                    </select>
                </div>
            </div>

            
            <div className={styles.filterRow}>
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

            <div className={styles.filterRow}>

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
                        <option value="">Sélectionner</option>
                    </select>
                </div>

                <div className={`${styles.filterInputParent}`}>         
                    <label htmlFor="">Type de rémunération</label>
                    <select className='required-record' onChange={(e)=>e.target.classList.remove('input-error')} defaultValue={""} id="period">
                        <option value="">Sélectionner</option>
                    </select>
                </div>

            </div>

            <span onClick={()=> clearInputs()} className={styles.clearButton}>EFFACER</span>

        </div>  
    )
}