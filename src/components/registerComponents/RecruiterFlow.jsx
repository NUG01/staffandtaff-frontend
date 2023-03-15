"use client"

import { useRef, useState } from "react";

export default function RecruiterFlow({styles, nextButton}){
    const logo = useRef()

    const [wordCount, setWords] = useState(0)

    const [logoPreview, setLogo] = useState('/default.png')
    const [logoPreviewName, setLogoName] = useState('Aucune image.')
    const [galleryImages, setGalleryImage] = useState([])
        
    var blobToBase64 = function (blob, callback) {
        var reader = new FileReader();
        reader.onload = function () {
            var dataUrl = reader.result;
            var base64 = dataUrl.split(',')[1];
            callback(base64);
        };
        reader.readAsDataURL(blob);
    };

    function clearLogo(){
        setLogo('/default.png')
        setLogoName('Aucune image.')
    }

    function removeImage(mainItem, mainIndex){
        setGalleryImage(items => items.filter((item, index) => index != mainIndex))
    }

    function previewLogo(e){
        if(e.target.files.length != 0){
            setLogoName(e.target.files[0].name)
            setLogo(URL.createObjectURL(e.target.files[0]))
    
            blobToBase64(e.target.files[0], res => {
                console.log(res);
            });
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
            blobToBase64(e.target.files[0], res => {
                setGalleryImage([...galleryImages,  {preview: URL.createObjectURL(e.target.files[0]), base: res, name: e.target.files[0].name}])
            });
        }

    }

    return(
        <form className={styles.form}>
            <div className={styles.intro}>
                Présentez l'établissement pour lequel vous cherchez du personnel.
                <br />
                Augmentez la crédibilité de votre offre d'emploi en ajoutant des informations détaillées concernant votre établissement.
                <p>Veuillez noter que les champs marqués de (<span>*</span>) sont obligatoires.</p>
            </div>

            <section className={styles.section}>
                <h4>Quel est le nom de votre établissement ?<span> *</span></h4>
                <div className={styles.inputParent}>
                    <input type="text" required placeholder="Nom de l'établissement"/>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Qui est le propriétaire de votre établissement ?</h4>
                <div className={styles.inputParent}>
                    <input type="text" placeholder="Nom de l'entreprise"/>
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
                        <input type="file" id="logo-upload" onInput={(e)=> previewLogo(e)} ref={logo}/>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Votre établissement est-il un hôtel ou un restaurant ?</h4>
                <div className={styles.inputParent}>
                    <select>
                        <option value="">Sous-catégorie de l'établissement</option>
                    </select>
                </div>
            </section>

            <section className={`${styles.section} ${styles.locationSelect}`}>
                <h4>Où se trouve votre établissement ? <span> *</span></h4>
                <div className={styles.inputParent}>
                    <select>
                        <option value="">Pays</option>
                    </select>
                    <select className={styles.disabledInput}>
                        <option value="">Ville</option>
                    </select>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Qui est le propriétaire de votre établissement ?</h4>
                <div className={styles.inputParent}>
                    <input type="number" placeholder="Nombre d'employés"/>
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
                        <input type="text" placeholder="Site web"/>
                    </div>

                    <div>
                        <i className="fa-brands fa-instagram"></i>
                        <input type="text" placeholder="Instagram"/>
                    </div>

                    <div>
                        <i className="fa-brands fa-linkedin"></i>
                        <input type="text" placeholder="Linkedin"/>
                    </div>

                    <div>
                        <i className="fa-brands fa-facebook"></i>
                        <input type="text" placeholder="Facebook"/>
                    </div>

                    <div>
                        <i className="fa-brands fa-twitter"></i>
                        <input type="text" placeholder="Twitter"/>
                    </div>

                    <div>
                        <i className="fa-brands fa-pinterest"></i>
                        <input type="text" placeholder="Pinterest"/>
                    </div>

                    <div>
                        <i className="fa-brands fa-youtube"></i>
                        <input type="text" placeholder="Youtube"/>
                    </div>

                    <div>
                        <i className="fa-brands fa-tiktok"></i>
                        <input type="text" placeholder="TikTok"/>
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
                    <input type="file" id="gallery-upload" onInput={(e)=> uploadGalleryImage(e)}/>
            </section>
            {nextButton}
        </form>
    )
}