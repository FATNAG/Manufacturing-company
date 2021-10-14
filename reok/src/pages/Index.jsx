import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Showcase from "components/index/Showcase";
import 'assets/css/index.css';

const Index = () => {
    return (
        <div className='Index'>
            <Navbar title={'Home'}/>
            <Showcase/>
            <Footer />
        </div>
    )
}
export default Index;