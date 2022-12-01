import React from 'react'
import { HomePageVideos } from '../../Types';
import { Link } from 'react-router-dom';

const SearchCard = ({data}:{data:HomePageVideos}) => {
    const isData = data ? true : false ;
  return (
    <div className="flex gap-3">
        <div className="relative">
            <span className='absolute bottom-3 right-3 text-sm bg-dark-900 px-2 py-0.5 z-10'>
                {data.videoDuration}
            </span>
            <Link to={`/watch/${data.videoId}`}>
                <img src={data.videoThumbnail} alt={data.videoTitle}  className='h-52 w-96' />
            </Link> 
        </div>
        <div className="flex gap-1 flex-col">
            <h3 className='max-w-2xl'>
                <a href="#" className='line-clamp-2'>
                    {data.videoTitle}
                </a>
            </h3>
            <div className="text-xs text-dark-400">
                <div>
                    <div>
                        <span className="after:contents-['•'] after:mx-1">
                            {data.videoViews} Visualizaciones
                        </span>
                        <span>{data.videoAge}</span>
                    </div>
                </div>
            </div>
            <div className="min-w-fit my-2">
                <a href="#" className='flex items-center gap-2 text-xs text-dark-400'>
                    <img src={data.channelInfo.image} alt={data.channelInfo.name}  className="h-9 w-9 rounded-full"/>
                    <span>{data.channelInfo.name}</span>
                </a>
            </div>
            <div className="max-w-2xl line-clamp-2 text-sm text-dark-400">
                <p>{data.videoDescription}</p>
            </div>
        </div>

    </div>
  )
}

export default SearchCard