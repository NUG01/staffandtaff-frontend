"use client"

import { useRef, useState } from "react";

export default function RecruiterFlow({styles, nextButton, className, data, galleryPictures}){
    const logo = useRef()
    const city = useRef()

    const [wordCount, setWords] = useState(0)

    const [logoPreview, setLogo] = useState('/default.png')
    const [logoPreviewName, setLogoName] = useState('Aucune image.')
    const [galleryImages, setGalleryImage] = useState([])

    function clearLogo(){
        setLogo('/default.png')
        setLogoName('Aucune image.')
    }

    function removeImage(mainItem, mainIndex){
        setGalleryImage(items => items.filter((item, index) => index != mainIndex))
        data.establishmentGallery.splice(mainIndex, 1)
    }

    function previewLogo(e){
        if(e.target.files.length != 0){
            setLogoName(e.target.files[0].name)
            setLogo(URL.createObjectURL(e.target.files[0]))
            data.establishmentLogo = {file: e.target.files[0], preview: URL.createObjectURL(e.target.files[0])}
        }
    }

    function setWordCount(e){
        if(e.target.value.length > 1000){
            e.target.value = e.target.value.substring(0, 1000);
        }
        setWords(e.target.value.length)
    }

    function uploadGalleryImage(e){
        if(e.target.files.length != 0){

            if(data.establishmentGallery.length > 10 || galleryImages.length + e.target.files.length > 10){
                alert('Can no upload more than 10 images')
                return
            }

            for(var i = 0; i < e.target.files.length; i++){
                galleryPictures.push({preview: URL.createObjectURL(e.target.files[i]), name: e.target.files[i].name})
                data.establishmentGallery.push(e.target.files[i])
            }
            
            setGalleryImage([...galleryImages, ...galleryPictures])
        }
    }

    function setCountry(e){
        data.establishmentCountry = e.target.value
        city.current.className = 'required-record'
    }

    return(
        <form className={`${styles.form} ${className}`}>
            <div className={styles.intro}>
                Présentez l'établissement pour lequel vous cherchez du personnel.
                <br />
                Augmentez la crédibilité de votre offre d'emploi en ajoutant des informations détaillées concernant votre établissement.
                <p>Veuillez noter que les champs marqués de (<span>*</span>) sont obligatoires.</p>
            </div>

            <section className={styles.section}>
                <h4>Quel est le nom de votre établissement ?<span> *</span></h4>
                <div className={styles.inputParent}>
                    <input type="text" placeholder="Nom de l'établissement" onInput={(e)=> data.establishmentName = e.target.value} className='required-record' onChange={(e)=>e.target.classList.remove('inputError')}/>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Qui est le propriétaire de votre établissement ?</h4>
                <div className={styles.inputParent}>
                    <input type="text" placeholder="Nom de l'entreprise" onInput={(e)=> data.establishmentOwner = e.target.value}/>
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
                        <input type="file" id="logo-upload" onInput={(e)=> previewLogo(e)} ref={logo} accept="image/png, image/jpeg"/>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Votre établissement est-il un hôtel ou un restaurant ?<span> *</span></h4>
                <div className={styles.inputParent}>
                    <select onInput={(e)=> data.establishmentType = e.target.value} className='required-record' onChange={(e)=>e.target.classList.remove('inputError')}>
                        <option value="" disabled selected>Disabled</option>
                        <option value="Type">Sous-catégorie de l'établissement 1</option>
                        <option value="Type">Sous-catégorie de l'établissement 2</option>
                        <option value="Type">Sous-catégorie de l'établissement 3</option>
                    </select>
                </div>
            </section>

            <section className={`${styles.section} ${styles.locationSelect}`}>
                <h4>Où se trouve votre établissement ? <span> *</span></h4>
                <div className={styles.inputParent}>
                    <select onInput={(e)=> setCountry(e)} className='required-record' onChange={(e)=>e.target.classList.remove('inputError')}>
                        <option value="" disabled selected>Disabled</option>
                        <option value="Pays">Pays 2</option>
                        <option value="Pays">Pays 3</option>
                    </select>
                    <select className={`required-record ${styles.disabledInput}`} onInput={(e)=> data.establishmentCity = e.target.value} ref={city} onChange={(e)=>e.target.classList.remove('inputError')}>
                        <option value="" disabled selected>Disabled</option>
                        <option value="Ville">Ville 2</option>
                        <option value="Ville">Ville 3</option>
                    </select>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Qui est le propriétaire de votre établissement ?</h4>
                <div className={styles.inputParent}>
                    <input type="number" placeholder="Nombre d'employés" onInput={(e)=> data.establishmentEmployeeNumber = e.target.value}/>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Donnez plus d'informations concernant votre établissement</h4>
                <div className={styles.textareaParent}>
                    <textarea placeholder="Description de l'établissement" onChange={(e)=>setWordCount(e)}></textarea>
                    <div className={styles.wordCount}>{wordCount} / 1000</div>
                </div>
            </section>
            

            <section className={`${styles.section} ${styles.socialInputs}`}>
                <h4>Aidez les chercheurs d'emplois à vous trouver sur les médias sociaux</h4>
                <div className={styles.inputParent}>

                    <div>
                        <i className="fa-solid fa-earth-americas"></i>
                        <input type="text" placeholder="Site web" onInput={(e)=> data.establishmentSocials.website = e.target.value}/>
                    </div>

                    <div>
                        <i className="fa-brands fa-instagram"></i>
                        <input type="text" placeholder="Instagram" onInput={(e)=> data.establishmentSocials.instagram = e.target.value}/>
                    </div>

                    <div>
                        <i className="fa-brands fa-linkedin"></i>
                        <input type="text" placeholder="Linkedin" onInput={(e)=> data.establishmentSocials.linkedin = e.target.value}/>
                    </div>

                    <div>
                        <i className="fa-brands fa-facebook"></i>
                        <input type="text" placeholder="Facebook" onInput={(e)=> data.establishmentSocials.facebook = e.target.value}/>
                    </div>

                    <div>
                        <i className="fa-brands fa-twitter"></i>
                        <input type="text" placeholder="Twitter" onInput={(e)=> data.establishmentSocials.twitter = e.target.value}/>
                    </div>

                    <div>
                        <i className="fa-brands fa-pinterest"></i>
                        <input type="text" placeholder="Pinterest" onInput={(e)=> data.establishmentSocials.pinterest = e.target.value}/>
                    </div>

                    <div>
                        <i className="fa-brands fa-youtube"></i>
                        <input type="text" placeholder="Youtube" onInput={(e)=> data.establishmentSocials.youtube = e.target.value}/>
                    </div>

                    <div>
                        <i className="fa-brands fa-tiktok"></i>
                        <input type="text" placeholder="TikTok" onInput={(e)=> data.establishmentSocials.tiktok = e.target.value}/>
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