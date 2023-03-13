import Header from '@/pages/header';
import Footer from '@/pages/footer';

const AppLayout = ({ head, child, active, isLogged, user, logout}) => {
    return (
        <>
            {head}

            <Header isLogged={isLogged} user={user} logout={logout} active={active}/>
            
            {child}

            <Footer />
        </>
    )
}

export default AppLayout
