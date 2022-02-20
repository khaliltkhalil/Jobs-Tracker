
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Outlet, Link } from "react-router-dom";

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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ducimus optio, fuga eveniet ut molestiae deleniti recusandae numquam totam natus iste nemo itaque similique officiis placeat? Magnam a iure porro.
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
