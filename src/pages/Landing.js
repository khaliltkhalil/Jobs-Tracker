
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
        <nav>
           <Logo/>
        </nav>
        <div className="container page">
            <div className="info">
                <h1>job aplications <span>tracking</span> app</h1>
                <p>
                Keep track of all your jobs application
                </p>
                <Link to="/register" className='btn btn-hero'>Login/Register</Link>
            </div>
            <div>
                <img src={main} alt='job hunt' className='img main-img'></img>
            </div>

        </div>
        
    </Wrapper>


  );
};



export default Landing;
