"use client"

import { useRef, useState } from "react";
import axios from '@/lib/axios'
import Axios from 'axios';

export default function RecruiterFlow({styles, nextButton, className, data, galleryPictures, setNewData}){
    const logo = useRef()
    
    const [searching, setSearching] = useState(false)

    const cityInp  = useRef()    
    const cityMainInp = useRef()
    const countrySelect = useRef()

    const [wordCount, setWords] = useState(0)

    const [logoPreview, setLogo] = useState('/default.png')
    const [logoPreviewName, setLogoName] = useState('Aucune image.')
    const [galleryImages, setGalleryImage] = useState([])

    const [country, setCurrCountry] = useState("")

    const [cities, setCities] = useState()
    const [citySelected, setCitySelected] = useState()

    function clearLogo(){
        setLogo('/default.png')
        setLogoName('Aucune image.')
    }

    function removeImage(mainItem, mainIndex){
        setGalleryImage(items => items.filter((item, index) => index != mainIndex))
        data.gallery.splice(mainIndex, 1)
    }

    function previewLogo(e){
        if(e.target.files.length != 0){
            setLogoName(e.target.files[0].name)
            setLogo(URL.createObjectURL(e.target.files[0]))
            setNewData('logo', e.target.files[0])
            setNewData('preview', URL.createObjectURL(e.target.files[0]))
        }
    }

    function setWordCount(e){
        if(e.target.value.length > 1000){
            e.target.value = e.target.value.substring(0, 1000);
        }
        setWords(e.target.value.length)
        setNewData('description', e.target.value)
    }

    function uploadGalleryImage(e){
        if(e.target.files.length != 0){

            if(data.gallery.length > 10 || galleryImages.length + e.target.files.length > 10){
                alert('Can no upload more than 10 images')
                return
            }

            for(var i = 0; i < e.target.files.length; i++){
                galleryPictures.push({preview: URL.createObjectURL(e.target.files[i]), name: e.target.files[i].name})
                setNewData('gallery', e.target.files[i], true)
            }
            
            setGalleryImage([...galleryPictures])
        }
    }
    
    const lastRequest = useRef(null)

    function setCityFunc(item, city_name){
        console.log(item)
        setCitySelected(true)
        setCities([])
        cityInp.current.value = item.id
        cityMainInp.current.value = city_name
        
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

    function setCountry(e){
        setCurrCountry(e.target.value)
        data.country = e.target.value
        setCitySelected(undefined)
        cityInp.current.value = ''
        cityMainInp.current.value = ''

    }

    return(
        <form className={`${styles.form} ${className}`} encType="multipart/form-data">
            <div className={styles.intro}>
                Présentez l'établissement pour lequel vous cherchez du personnel.
                <br />
                Augmentez la crédibilité de votre offre d'emploi en ajoutant des informations détaillées concernant votre établissement.
                <p>Veuillez noter que les champs marqués de (<span>*</span>) sont obligatoires.</p>
            </div>

            <section className={styles.section}>
                <h4>Quel est le nom de votre établissement ?<span> *</span></h4>
                <div className={styles.inputParent}>
                    <input type="text" placeholder="Nom de l'établissement" onInput={(e)=> setNewData('establishment_name', e.target.value)} className='required-record' onChange={(e)=>e.target.classList.remove('input-error')}/>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Qui est le propriétaire de votre établissement ?</h4>
                <div className={styles.inputParent}>
                    <input type="text" placeholder="Nom de l'entreprise" onInput={(e)=> setNewData('company_name', e.target.value)} onChange={(e)=>e.target.classList.remove('input-error')} className="required-record"/>
                </div>
            </section>

            <section className={`${styles.section} ${styles.hasImageUpload}`}>
                <h4>Téléchargez le logo de votre établissement</h4>
                <h5>Veuillez télécharger une image au format carré en PNG ou JPEG. Taille maximale de 100 MBs.</h5>
                <div className={styles.logoUpload}>
                    <img src={logoPreview} alt="" />
                    <div className={styles.imageInfo}>
                        <p>{logoPreviewName}</p>
                        {logoPreview != '/default.png' && (
                            <span className={styles.deleteImage} onClick={()=> clearLogo()}></span>
                        )}
                        <label htmlFor="logo-upload">Télécharger un logo</label>
                        <input type="file" id="logo-upload" onInput={(e)=> previewLogo(e)} ref={logo} accept="image/png, image/jpeg" onChange={(e)=>e.target.parentNode.classList.remove('inputParentError')}/>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Votre établissement est-il un hôtel ou un restaurant ?<span> *</span></h4>
                <div className={styles.inputParent}>
                    <select onInput={(e)=> setNewData('industry', e.target.value)} className='required-record' onChange={(e)=>e.target.classList.remove('input-error')} defaultValue={""}>
                        <option value="" disabled>Sous-catégorie de l'établissement</option>
                        <option value="0">Restaurant</option>
                        <option value="1">Hotel</option>
                    </select>
                </div>
            </section>

            <section className={`${styles.section} ${styles.locationSelect}`}>
                <h4>Où se trouve votre établissement ? <span> *</span></h4>
                <div className={styles.inputParent}>
                    <select ref={countrySelect}  onInput={(e)=> setCountry(e)} className='required-record' onChange={(e)=>e.target.classList.remove('input-error')} defaultValue={""}>
                        <option value="" disabled>Pays</option>
                        <option value="CH">Suisse</option>
                        <option value="FR">France</option>
                    </select>

                    <div className={`${styles.cityListHolder} ${styles.filterInputParent}`}>
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

                    <div className={`${styles.inputParent} ${styles.inputParentFull}`}>
                        <input type="text" placeholder="Adresse" onInput={(e)=> setNewData('address', e.target.value)} onChange={(e)=>e.target.classList.remove('input-error')} className="required-record"/>
                    </div>

                </div>
            </section>

            <section className={styles.section}>
                <h4>Qui est le propriétaire de votre établissement ?</h4>
                <div className={styles.inputParent}>
                    <input type="number" className="required-record" placeholder="Nombre d'employés" onInput={(e)=> setNewData('number_of_employees', e.target.value)} onChange={(e)=>e.target.classList.remove('input-error')}/>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Donnez plus d'informations concernant votre établissement</h4>
                <div className={styles.textareaParent}>
                    <textarea placeholder="Description de l'établissement" className="required-record" onInput={(e)=>setWordCount(e)}   onChange={(e)=>{e.target.parentNode.classList.remove('input-error'); e.target.classList.remove('input-error')}}></textarea>
                    <div className={styles.wordCount}>{wordCount} / 1000</div>
                </div>
            </section>
            

            <section className={`${styles.section} ${styles.socialInputs}`}>
                <h4>Aidez les chercheurs d'emplois à vous trouver sur les médias sociaux</h4>
                <div className={styles.inputParent}>

                    <div>
                        <i className="fa-solid fa-earth-americas"></i>
                        <input type="text" placeholder="Site web" onInput={(e)=> setNewData('website', e.target.value)}/>
                    </div>

                    <div>
                        <i className="fa-brands fa-instagram"></i>
                        <input type="text" placeholder="Instagram" onInput={(e)=> setNewData('instagram', e.target.value)}/>
                    </div>

                    <div>
                        <i className="fa-brands fa-linkedin"></i>
                        <input type="text" placeholder="Linkedin" onInput={(e)=> setNewData('linkedin', e.target.value)}/>
                    </div>

                    <div>
                        <i className="fa-brands fa-facebook"></i>
                        <input type="text" placeholder="Facebook" onInput={(e)=> setNewData('facebook', e.target.value)}/>
                    </div>

                    <div>
                        <i className="fa-brands fa-twitter"></i>
                        <input type="text" placeholder="Twitter" onInput={(e)=> setNewData('twitter', e.target.value)}/>
                    </div>

                    <div>
                        <i className="fa-brands fa-pinterest"></i>
                        <input type="text" placeholder="Pinterest" onInput={(e)=> setNewData('pinterest', e.target.value)}/>
                    </div>

                    <div>
                        <i className="fa-brands fa-youtube"></i>
                        <input type="text" placeholder="Youtube" onInput={(e)=> setNewData('youtube', e.target.value)}/>
                    </div>

                    <div>
                        <i className="fa-brands fa-tiktok"></i>
                        <input type="text" placeholder="TikTok" onInput={(e)=> setNewData('tiktok', e.target.value)}/>
                    </div>

                </div>
            </section>

            <section className={`${styles.section} ${styles.galleryParentHolder}`}>
                <h4>Téléchargez des photos de votre établissement pour le présenter aux chercheurs d'emplois</h4>
                <h5>Veuillez télécharger une image au format carré en PNG ou JPEG. Taille maximale de 100 MBs.</h5>
                <div className={`${styles.inputParent} ${styles.galleryParent}`}>
                    {
                        galleryImages.map((item, index) =>{
                            return(
                                <div key={index} className={`${styles.gallery} ${item.name === '' ? styles.hide : ''}`}>
                                    <img src={item.preview} alt="" />
                                    <div className={styles.imageName}>{item.name}</div>
                                    {item.name != '' && (
                                        <span className={styles.deleteImage} onClick={()=> removeImage(item, index)}></span>
                                    )}
                                </div>
                            )
                        })
                    }
                </div>
                    <label htmlFor="gallery-upload" className={galleryImages.length === 10 ? styles.disabledLabel : ''}>Télécharger un logo</label>
                    <input type="file" id="gallery-upload" onInput={(e)=> uploadGalleryImage(e)} multiple accept="image/png, image/jpeg"/>
            </section>
            {nextButton}
        </form>
    )
}