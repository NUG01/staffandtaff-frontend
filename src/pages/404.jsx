import Link from "next/link"

const NotFoundPage = () => (


    <div style={{position: 'relative', display: 'flex', justifyContent: 'center', minHeight: '100vh', alignItems: 'center'}}>
        <div style={{textTransform: 'uppercase', textAlign: 'center'}}>
            <Link href="/jobs">Return to homepage</Link>
        </div>
    </div>
)

export default NotFoundPage
