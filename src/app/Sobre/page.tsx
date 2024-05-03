import Header from "../Components/Header/page"
import Footer from "../Components/Footer/page"
import "./styles.css"

const Sobre = () => {
    return(
        <section className="aboutus">
            <Header/>
            <h1 className="sobre">ABOUT US</h1>
            <div className="quem-somos">Welcome to our sneaker store, where we bring the thrill of NBA basketball and the vibrant culture of sneakers to Brazil! Our mission is to provide you with the most authentic and exciting sneaker experience, inspired by the world-class athletes and iconic moments of the NBA.

From the legendary Michael Jordan to the electrifying LeBron James, we celebrate the greatest basketball players of all time with our exclusive collection of NBA sneakers. Our store features a wide range of basketball shoes, from classic styles to the latest releases, all designed to help you elevate your game and express your unique style.

At our store, we believe that sneakers are more than just footwear - they are a symbol of self-expression, creativity, and passion. That's why we carefully curate our collection to feature the most innovative and eye-catching designs from the world's top sneaker brands. Whether you're a seasoned sneakerhead or just starting your collection, you'll find something to love in our store.

But we're not just about sneakers - we're also passionate about basketball and the NBA. Our store is a gathering place for basketball fans and sneaker enthusiasts alike, where you can connect with other fans, share your love of the game, and discover new and exciting products. We host regular events, including sneaker releases, meet-and-greets with NBA players, and watch parties for big games, so you can be a part of the action.

At our store, we're more than just a retailer - we're a community of sneaker lovers and basketball fans, united by our passion for the game and the culture that surrounds it. We're proud to bring the excitement of the NBA and the world of sneakers to Brazil, and we can't wait to share our love of the game with you.

So come visit us today and discover why we're the premier destination for NBA sneakers and basketball culture in Brazil. Whether you're looking for a new pair of kicks, a place to watch the game, or just a community of like-minded fans, we've got you covered. See you soon!</div>
            <img className="img2" src="sneaker-backgrounds2.png" alt="2" />
            <Footer/>
        </section>
    );
};

export default Sobre;