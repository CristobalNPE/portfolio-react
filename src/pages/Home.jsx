import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <div className="landing">
                <div className="welcome-msg">
                    <h3>¡Bienvenido! Mi nombre es</h3>
                    <h1>Cristóbal Pulgar Estay</h1>
                    <h3>- Desarrollador Web - </h3>

                    <ul className="contact-shortcuts">
                        <li><a href="#">Email</a></li>
                        <li><a href="#">Github</a></li>
                        <li><a href="#">Linkedin</a></li>
                        <li><a href="#">Location</a></li>
                    </ul>
                </div>
                <Navbar/>
            </div>
            <div className="skills">

            </div>
            <div className="projects">

            </div>
        </div>
    );
};

export default Home;
