import React, {useEffect} from 'react';
import './footer.css';
import video2 from '../../Assets/video2.mp4';
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    //create a react hook to add a scroll animation
    useEffect(() =>{
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted 
                type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text"  placeholder='Enter Email Address'/>
                        <button data-aos="fade-up" className='btn flex' type='submit'>
                            SEND <FiSend className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'>
                               <MdOutlineTravelExplore className="icon"/>   Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Ullam inventore eos
                            fuga hic cum voluptatem minima, tempore
                            non odio provident nobis ipsam at,
                            doloremque sed cupiditate ipsum in,
                            atque soluta?
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className="icon"/>
                            <AiFillYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                            <FaTripadvisor className="icon"/>
                        </div>
                    </div>

                    {/* Group One */}
                    <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks grid">
                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>
                        </div>
                    </div>

                    {/* Group Two */}
                    <div data-aos="fade-up" data-aos-duration="4000" className="footerLinks grid">
                        <div className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Rent Cars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Hotels
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                TripAdvisor
                            </li>
                        </div>
                    </div>

                    {/* Group Three */}
                    <div data-aos="fade-up" data-aos-duration="5000" className="footerLinks grid">
                        <div className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                UK
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                USA
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Indonesia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Europe
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Australia
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS RESERVER - TRAVEL AGENCY 2023</small>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
