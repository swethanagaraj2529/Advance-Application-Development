import NavUser from './navuser'; // Import the NavUser component
import homepageimage from '../assets/summa.jpg';
import '../CSS/home.css';
import onlineclass from '../assets/online class.jpg';
import offlineclass from '../assets/offlineclass.jpg';
import Footer from './footer';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function Home() {
  const navigate = useNavigate(); // Initialize the navigate function
  
  const handleJoinOnlineClass = () => {
    navigate('/login'); // Navigate to the '/login' page
  };

  return (
    <div>
      <NavUser/>
     <img src={homepageimage}  className="homeimage" alt="Homepageimage" /> {/* Display the homeimage */}
     <div className="overlay"></div>
     <div>
        <p className='quotes'>Wellness,<br></br> Community &<br></br> Connection</p>
        <p className='quotesdefinition'>Familiarize yourself with our yoga studio</p>
     </div>
     <div className="container">
      <div className="contain">
        <img src={onlineclass} className="onlineclass" alt="onlineclass" />
        <p>"Join Us for Online Yoga Classes<br />From the Comfort of Your Home"</p>
        <button className="join-onlineclass-button" onClick={handleJoinOnlineClass}>Join Us</button>
      </div>
      <div className="contain">
        <img src={offlineclass} className="onlineclass" alt="onlineclass" />
        <p>"Find Peace and Balance<br /> in Our Studio"</p>
        <button className="join-onlineclass-button" onClick={handleJoinOnlineClass}>Join Us</button>
      </div>
    </div>
      
    </div>
  );
}

export default Home;
