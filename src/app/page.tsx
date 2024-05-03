import Header from "./Components/Header/page";
import Footer from "./Components/Footer/page";



export default function Home() {
    return(
        <main className="principal">
            <Header/>
            <h1 className="chamada1">The top and exclusive Sneakers in the world!</h1>
            <h2 className="chamada2">NOW IN PROGRESS!</h2>
            <div className="chamada3">Hey sneakerheads! Are you ready to step up your shoe game? Check out our exclusive NBA Sneakers page, where you can get the latest kicks inspired by your favorite players! From Jordans to custom designs, we've got you covered. Visit us now and discover the ultimate sneaker experience!</div>
            <img src="sneaker-backgrounds.png" alt="" />
            <div></div>
            <Footer/>
        </main>
    );
};