// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Vinay P</h1>
                <p>Blockchain Developer</p>
                <p>&</p>
                <p>Web Developer</p>
            </div>
        </section>
    );
}

export default Header;