import styles from '../../styles/homepage/homepage.module.css'
import { useState, useRef } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

export default function Filter({expanded}){
    
    const cityInp = useRef()
    const cityMainInp = useRef()

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

    return(
        <div className={`${styles.filter} ${expanded ? styles.expandedFilter : ''}`}>

            <div className={styles.filterRow}>
                <div className={`${styles.filterInputParent}`}>         
                    <label htmlFor="">Pays</label>
                    <select onInput={(e)=> setCountry(e)} className='required-record' onChange={(e)=>e.target.classList.remove('input-error')}>
                        <option value="" disabled selected>Sélectionner</option>
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
                    <input type="hidden" ref={cityInp} className='required-record hidden-city-inp'/>
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
                    <input type="text" placeholder='0 km'/>
                </div>
            </div>
            
            <div className={styles.filterRow}>
                <div className={`${styles.filterInputParent}`}>         
                    <label htmlFor="">Catégorie</label>
                    <select onInput={(e)=> setCountry(e)} className='required-record' onChange={(e)=>e.target.classList.remove('input-error')}>
                        <option value="" disabled selected>Sélectionner</option>
                        <option value="0">Suisse</option>
                        <option value="1">France</option>
                    </select>
                </div>

                <div className={`${styles.filterInputParent}`}>         
                    <label htmlFor="">Type de contrat</label>
                    <select onInput={(e)=> setCountry(e)} className='required-record' onChange={(e)=>e.target.classList.remove('input-error')}>
                        <option value="" disabled selected>Sélectionner</option>
                         <option value="0">Suisse</option>
                        <option value="1">France</option>
                    </select>
                </div>
            </div>

            
            <div className={styles.filterRow}>
                <div className={`${styles.datePickerHolder} ${styles.filterInputParent}`}>
                    <label htmlFor="">Date de début</label>
                    <DatePicker 
                        // selected={startDate}
                        onKeyDown={(e) => {
                        e.preventDefault();
                        }}
                        // onChange={date => setStartDate(date)}
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
                        // selected={startDate}
                        onKeyDown={(e) => {
                        e.preventDefault();
                        }}
                        // onChange={date => setStartDate(date)}
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
                    <input type="number" placeholder="1500"/>
                </div>

                <div className={`${styles.filterInputParent}`}>         
                    <label htmlFor="">Max</label>
                    <input type="number" placeholder="20000"/>
                </div>
                
                <div className={`${styles.filterInputParent}`}>         
                    <label htmlFor="">Devise</label>
                    <select className='required-record' onChange={(e)=>e.target.classList.remove('input-error')}>
                        <option value="" disabled selected>Sélectionner</option>
                    </select>
                </div>

                <div className={`${styles.filterInputParent}`}>         
                    <label htmlFor="">Type de rémunération</label>
                    <select className='required-record' onChange={(e)=>e.target.classList.remove('input-error')}>
                        <option value="" disabled selected>Sélectionner</option>
                    </select>
                </div>

            </div>

        </div>  
    )
}