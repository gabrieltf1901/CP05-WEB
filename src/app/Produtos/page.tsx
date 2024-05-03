import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";
import "./styles.css"

const Produtos = () => {
    return (
        <main className="produtos">
            <Header/>
            <h1 className="sneakers-title">SNEAKERS</h1>
            <Cards/>
            <Footer/>
        </main>
    );
};

export default Produtos;