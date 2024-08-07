
import './style.scss';
import eagleyardnewlogo from "../assets/eagleyardnewlogo.svg";
import imagefinal from "../assets/imagefinal.svg";
import groupone from "../assets/groupone.svg";
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='app'>

            <div className="notfound-container">

                <img src={eagleyardnewlogo} alt="egaleyardnewlogo" className='eagleyard_new_logo' />
                <div className="card">

                    <h1 className='textfornotfound'>
                        Hey <span className='spanfornotfound'>!</span>
                    </h1>
                    <h1 className='subtextfornotfound'>What are you doing here?!</h1>
                    <img src={imagefinal} alt="notfoundimage" className='notfoundimage_icon' />
                    <div className=''>
                        <Link to="/">
                            <button className='gohomebutton rectangle'><img src={groupone} className='iconicon' />Go Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
