import React from 'react'
import { 
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineSmartDisplay,
    MdOutlineWatchLater,
    MdThumbUpOffAlt,
    MdSettings,
    MdOutlinedFlag,
    MdOutlineHelpOutline,
    MdOutlineFeedback,
    MdOutlineSportsVolleyball,
 } from "react-icons/md";

 import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
 import { FaRegCompass } from "react-icons/fa";
 import { GiFilmStrip } from "react-icons/gi";



const Sidebar = () => {
    const mainLinks = [
        {
          icon: <MdHomeFilled className="text-xl" />,
          name: "Inicio",
        },
        {
          icon: <FaRegCompass className="text-xl" />,
          name: "Explora",
        },
        {
          icon: <MdOutlineSlowMotionVideo className="text-xl" />,
          name: "Shorts",
        },
        {
          icon: <MdSubscriptions className="text-xl" />,
          name: "Subscriciones",
        },
      ];
    
      const secondaryLinks = [
        {
          icon: <MdOutlineVideoLibrary className="text-xl" />,
          name: "Biblioteca",
        },
        {
          icon: <MdHistory className="text-xl" />,
          name: "Historial",
        },
        {
          icon: <MdOutlineSmartDisplay className="text-xl" />,
          name: "Mis Vídeos",
        },
        {
          icon: <MdOutlineWatchLater className="text-xl" />,
          name: "Ver más tarde",
        },
        {
          icon: <MdThumbUpOffAlt className="text-xl" />,
          name: "Videos que me gustan",
        },
      ];
    
      const subscriptionLinks = [
        {
          icon: <TbMusic className="text-xl" />,
          name: "Musica",
        },
        {
          icon: <MdOutlineSportsVolleyball className="text-xl" />,
          name: "Deportes",
        },
        {
          icon: <TbDeviceGamepad2 className="text-xl" />,
          name: "Videojuegos",
        },
        {
          icon: <GiFilmStrip className="text-xl" />,
          name: "Peliculas",
        },
      ];
    
      const helpLinks = [
        {
          icon: <MdSettings className="text-xl" />,
          name: "Configuración",
        },
        {
          icon: <MdOutlinedFlag className="text-xl" />,
          name: "Historial de denuncias",
        },
        {
          icon: <MdOutlineHelpOutline className="text-xl" />,
          name: "Ayuda",
        },
        {
          icon: <MdOutlineFeedback className="text-xl" />,
          name: "Enviar sugerencias",
        },
      ];
    
      const textLinks = [
        [
          "Información",
          "Prensa",
          "Copyright",
          "Contactar",
          "Creadores",
          "Advertise",
          "Desarrolladores",
        ],
        [
          "Terminos",
          "Privacidad",
          "Politica y seguridad",
          "Cómo funciona YouTube",
          "Probar funciones nuevas",
        ],
      ];
    
  return (
    <div className='w-2/12 bg-dark-bg  pr-5 overflow-auto pb-8 sidebar'>
        <ul className="flex flex-col border-b-2 border-gray-700">
            {
              mainLinks.map(({icon,name})=>{
                return(
                    <li key={name}
                    className={` pl-6 py-3 hover:bg-dark-600 ${name === 'Inicio' ? "bg-slate-600" : ''}`}
                    >
                        <a href="#" className='flex items-center gap-5 '>
                            {icon}
                            <span className='text-sm tracking-wider'>{name}</span>
                        </a>
                    </li>
                )
              })  
            }
        </ul>

        <ul className="flex flex-col border-b-2 border-gray-700">
            {
              secondaryLinks.map(({icon,name})=>{
                return(
                    <li key={name}
                    className={` pl-6 py-3 hover:bg-dark-600 `}
                    >
                        <a href="#" className='flex items-center gap-5 '>
                            {icon}
                            <span className='text-sm tracking-wider'>{name}</span>
                        </a>
                    </li>
                )
              })  
            }
        </ul>

        <ul className="flex flex-col border-b-2 border-gray-700">
            {
              subscriptionLinks.map(({icon,name})=>{
                return(
                    <li key={name}
                    className={` pl-6 py-3 hover:bg-dark-600 `}
                    >
                        <a href="#" className='flex items-center gap-5 '>
                            {icon}
                            <span className='text-sm tracking-wider'>{name}</span>
                        </a>
                    </li>
                )
              })  
            }
        </ul>

        <ul className="flex flex-col border-b-2 border-gray-700">
            {
              helpLinks.map(({icon,name})=>{
                return(
                    <li key={name}
                    className={` pl-6 py-3 hover:bg-dark-600 `}
                    >
                        <a href="#" className='flex items-center gap-5 '>
                            {icon}
                            <span className='text-sm tracking-wider'>{name}</span>
                        </a>
                    </li>
                )
              })  
            }
        </ul>
        <ul className='flex gap-2 flex-wrap text-sm p-4 text-dark-400'>
            {textLinks[0].map((name)=>{
                return <li key={name}>{name}</li>
            })}
        </ul>
        <ul className='flex gap-2 flex-wrap text-sm p-4 text-dark-400'>
            {textLinks[1].map((name)=>{
                return <li key={name}>{name}</li>
            })}
        </ul>
        <span className='px-4 text-dark-400'>&copy; 2022 Google</span>
        <br />
        <p className="px-4 pt-3 text-sm text-dark-400">
            este clon es solo para fines educativos.
        </p>

    </div>
  )
}

export default Sidebar