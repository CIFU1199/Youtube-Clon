import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NavBar from '../components/Navbar/NavBar';
import Sidebar from '../components/SideBar/Sidebar';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import Spinner from '../components/Spinner/Spinner';
import { HomePageVideos } from '../Types';
import { clearVideos } from '../store';
import { useNavigate } from 'react-router-dom';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';
import SearchCard from '../components/Card/SearchCard';


const Search = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state)=> state.youtubeApp.videos);
  const searchTerm = useAppSelector((state)=> state.youtubeApp.searchTerm);

 /*  useEffect(() =>{
    return () =>{
      dispatch(clearVideos());
    }
  }, [dispatch]); */

  useEffect(()=>{
    return()=>{
      dispatch(clearVideos());
      if(searchTerm==='') navigate("/");
      else{
        dispatch(getSearchPageVideos(false))
      }
      
    }

  },[dispatch, navigate ,searchTerm])

  console.log('data get successfully')  
  return (
    <div className='max-h-screen overflow-hidden'>
        <div className='Viewport-Height-NB' >
            <NavBar/>
        </div>
        <div className='flex Viewport-Heigh-SB'> 
            <Sidebar/>
            {videos.length ? (
              <div className='py-8 pl-8 flex flex-col gap-5 w-full'>
                <InfiniteScroll dataLength={videos.length}
                next={()=> dispatch(getSearchPageVideos(true))}
                hasMore={videos.length < 500}
                loader={<Spinner />}
                height={600}
                >
                    {videos.map((item:HomePageVideos)=>{
                      return(
                        <div className="my-5">
                          <SearchCard data={item} key={item.videoId}/>
                        </div>
                      )
                    })}
                </InfiniteScroll>
              </div> 
            ) : (<Spinner />)}
           
        </div>
    </div>
  )
}

export default Search