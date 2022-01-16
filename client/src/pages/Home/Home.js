import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";
import Featured from "../../components/Featured/Featured";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Featured />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;
