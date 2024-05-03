import CardProduct from "../CardProdutos";
import "./styles.css"

const Cards = () => {
    return (
        <section className="cards">
            <CardProduct
            title="Nike Zoom Freak 4 - Giannis"
            img="giannis-sneaker.png"
            link="https://www.lojanba.com/?campaign=google-branding&gad_source=1&gclid=CjwKCAjw88yxBhBWEiwA7cm6pQSjmsGFQO0W-4sfm6Z_eGKZzSvS0AuEa5XIemf8W50QhmYBzgrLFxoC_XMQAvD_BwE"
            />
            <CardProduct
            title="Nike JA 1"
            img="ja-sneaker.png"
            link="https://www.lojanba.com/?campaign=google-branding&gad_source=1&gclid=CjwKCAjw88yxBhBWEiwA7cm6pQSjmsGFQO0W-4sfm6Z_eGKZzSvS0AuEa5XIemf8W50QhmYBzgrLFxoC_XMQAvD_BwE"
            />
            <CardProduct
            title="Adidas Damian Lillard Sneaker"
            img="dame-sneaker.png"
            link="https://www.lojanba.com/?campaign=google-branding&gad_source=1&gclid=CjwKCAjw88yxBhBWEiwA7cm6pQSjmsGFQO0W-4sfm6Z_eGKZzSvS0AuEa5XIemf8W50QhmYBzgrLFxoC_XMQAvD_BwE"
            />
            
        </section>
    );
};

export default Cards;