import { useEffect } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Sidebar from '../components/SideBar/Sidebar';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';

const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state)=> state.youtubeApp.videos);

  useEffect(()=>{
    return()=>{
      dispatch(getHomePageVideos(false));
      console.log(videos)
      
    }

  },[dispatch])

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