import React, {useEffect} from 'react'
import './main.css'

//import icons
import {HiOutlineLocationMarker,HiOutlineClipboardCheck} from 'react-icons/hi'
//import images from assets
import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'
//Array data
const Data = [
    {
        id:1,
        imgSrc: img,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '£1200',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the AudioWorkletNode. This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id:2,
        imgSrc: img2,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '£1800',
        description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
    },
    {
        id:3,
        imgSrc: img3,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '£4500',
        description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is `lavishing` and `beauty`. It is always interesting to be in this place.'
    },
    {
        id:4,
        imgSrc: img4,
        destTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '£925',
        description: 'According to the World Tourism Ranking, 45 million people visit Turkyie each year, and from that about 2 million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id:5,
        imgSrc: img5,
        destTitle: 'Guanajuato',
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
        fees: '£2100',
        description: 'A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available worldwide.'
    },
    {
        id:6,
        imgSrc: img6,
        destTitle: 'Cinque Terre',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: '£840',
        description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get there. Heppy exploring, great food!'
    },
    {
        id:7,
        imgSrc: img7,
        destTitle: 'Angkor Wat',
        location: 'Cambodia',
        grade: 'CULTURAL RELAX',
        fees: '£790',
        description: 'Angkor Wat represents the entire range of Khmer art from the 9th - 15th centuries. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id:8,
        imgSrc: img8,
        destTitle: 'Taj Mahaal',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '£1750',
        description: 'An immense mausoleum of white marble, built-in for Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz. The monument is best known for its architecture.'
    },
    {
        id:9,
        imgSrc: img9,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '£500',
        description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is well known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.'
    }
]
const Main = () => {

    //create a react hook to add a scroll animation
    useEffect(() =>{
        Aos.init({duration: 2000})
    }, [])

    return (
       <section className="main container section">
            
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
            {
                Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                    return(
                        <div key={id} 
                        data-aos="fade-up" 
                        className="singleDestionation">
                            {
                                //returns a single id from the map array

                                <>
                                    <div className="imageDiv">
                                        <img src={imgSrc} alt={destTitle} />
                                    </div>

                                    <div className="cardInfo">
                                        <h4 className="destTitle">{destTitle}</h4>
                                        <span className="continent flex">
                                            <HiOutlineLocationMarker className='icon'/>
                                            <span className="name">{location}</span>
                                        </span>

                                        <div className="fees flex">
                                            <div className="grade">
                                                <span>{grade}<small> +1</small></span>
                                            </div>

                                            <div className="price">
                                                <h5>{fees}</h5>
                                            </div>
                                        </div>

                                        <div className="desc">
                                            <p>{description}</p>
                                        </div>

                                        <button className='btn flex'>
                                            DETAILS <HiOutlineClipboardCheck className="icon"/>
                                        </button>
                                    </div>
                                </>
                            }
                        </div>
                    )
                })
            }
            </div>
       </section>
    )
}

export default Main