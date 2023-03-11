import Header from '@/pages/header';
import Footer from '@/pages/footer';

const AppLayout = ({ head, child, active, isLogged, user}) => {
    return (
        <>
            {head}

            <Header isLogged={isLogged} user={user} active={active}/>
            
            {child}

            <Footer />
        </>
    )
}

export default AppLayout
