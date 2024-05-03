import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";
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