import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NavBar from '../components/Navbar/NavBar';
import Sidebar from '../components/SideBar/Sidebar';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import Spinner from '../components/Spinner/Spinner';
import { HomePageVideos } from '../Types';
import Card from '../components/Card/Card';
import { clearVideos } from '../store';

const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state)=> state.youtubeApp.videos);

  useEffect(() =>{
    return () =>{
      dispatch(clearVideos());
    }
  }, [dispatch]);

  useEffect(()=>{
    return()=>{
      dispatch(getHomePageVideos(false));
      console.log(videos)
      
    }

  },[dispatch])

  console.log('data get successfully')  
  return (
    <div className='max-h-screen overflow-hidden'>
        <div className='Viewport-Height-NB' >
            <NavBar/>
        </div>
        <div className='flex Viewport-Heigh-SB'> 
            <Sidebar/>
            {videos.length ? (
            <InfiniteScroll dataLength={videos.length}
            next={()=> dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={650}
            >
              <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
                {videos.map((item:HomePageVideos)=>{
                  return <Card data={item} key={item.videoId}/>
                })}
              </div>
            </InfiniteScroll> ) : (<Spinner />)}
           
        </div>
    </div>
  )
}

export default Home