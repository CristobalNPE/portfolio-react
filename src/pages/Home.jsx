import "../styles/Home.css"
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Home = () => {
    return (

        <div className="home">
            <div className="welcome-msg">
                <h3 className="subtitle">¡Bienvenido! Mi nombre es</h3>
                <h1 className="main-title">Cristóbal<br/> Pulgar Estay</h1>
                <h3 className="subtitle">- Desarrollador Web - </h3>
            </div>
            <ul className="contact-shortcuts">
                <li className="contact-icon">
                    <a className="contact-link" href="mailto:cristobal.npe@gmail.com"><MailIcon fontSize="large"/></a>
                </li>
                <li className="contact-icon">
                    <a className="contact-link" href="#"><GitHubIcon fontSize="large"/></a></li>
                <li className="contact-icon">
                    <a className="contact-link" href="#"><LinkedInIcon fontSize="large"/></a>
                </li>
                <li className="contact-icon">
                    <a className="contact-link" href="#"><LocationOnIcon fontSize="large"/></a>
                </li>
            </ul>
        </div>
    );
};

export default Home;
