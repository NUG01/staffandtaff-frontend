import Header from '@/pages/header';
import Footer from '@/pages/footer';

const AppLayout = ({ head, child, active }) => {
    return (
        <>
            {head}

            <Header active={active}/>
            
            {child}

            <Footer />
        </>
    )
}

export default AppLayout
