import React from 'react'
import { HomePageVideos } from '../../Types';
import { Link } from 'react-router-dom';

const Card = ({data}:{data:HomePageVideos}) => {
    const isData = data ? true : false ;
  return (
    <div className='w-64 h-full flex gap-3 flex-col'>
        <div className="relative">
            <span className='absolute bottom-3 right-3 text-sm bg-dark-900 px-2 py-0.5 z-10'>
                {data.videoDuration}
            </span>
            <Link to={`/watch/${data.videoId}`}>
                <img src={data.videoThumbnail} alt={data.videoTitle}  className='h-44 w72' />
            </Link> 
        </div>
            <div className="flex gap-2">
                <div className="min-w-fit">
                    <a href="#">
                        <img src={data.channelInfo.image} alt={data.channelInfo.name} className='h-9 w-9 rounded-full' />
                    </a>
                </div>
                <div>
                    <h3>
                        <a href="#" className='line-clamp-2'>
                            {data.videoTitle}
                        </a>
                    </h3>
                    <div className="text-sm text-dark-400">
                        <div>
                            <a href="#" className='hover:text-white'>
                                {data.channelInfo.name}
                            </a>
                        </div>
                        <div>
                            <span className="after:contents-['•'] after:mx-1">
                                {data.videoViews} Visualizaciones
                            </span>
                            <span>{data.videoAge}</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Card