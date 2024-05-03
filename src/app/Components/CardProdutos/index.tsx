import './styles.css'
import Link from 'next/link';
import { Props } from './interfaces';

const CardProduct = (props : Props) => {
    return (
        <>
            <section className='card-sec'>
                <header className='header-card'>{props.title}</header>
                <img className='img-card' src={props.img} alt={props.title} />
                <footer className='footer-card'>
                    <Link href={props.link}>
                        <button className='button-card'>Buy</button>
                    </Link>
                </footer>
            </section>
        </>
    );
};

export default CardProduct;