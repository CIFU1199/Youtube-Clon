import NavBar from '../components/Navbar/NavBar';
import Sidebar from '../components/SideBar/Sidebar';

const Home = () => {
  return (
    <div className='max-h-screen overflow-hidden'>
        <div className='Viewport-Height-NB' >
            <NavBar/>
        </div>
        <div className='flex Viewport-Heigh-SB'> 
            <Sidebar/>
        </div>
    </div>
  )
}

export default Home