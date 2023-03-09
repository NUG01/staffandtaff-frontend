export default function jobText({styles, expanded, txt, elRef}){
    

    return (
        <div className={`${styles.companyBottom} ${expanded ? styles.expand : ''}`} ref={elRef}>
            {txt}
        </div>
    )
}