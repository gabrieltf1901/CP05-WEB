import ".//styles.css"

const Header = () => {
    return (
        <>
            <header>
                <img className="logonba" src="logo-nba.png" alt="NBA" />
                <p className="GameToday">GAMES TODAY<br />Nuggets VS Celtics | Lakers VS Warriors | Clippers VS Kings | Heat VS Magic | Knicks VS Nets | Mavericks VS Suns | Pacers VS Bucks</p>
            </header>
        </>
    );
};

export default Header;