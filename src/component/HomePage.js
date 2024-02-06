import React, { useEffect, useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import './style.css';
import Sidebar from './Toogle';



const HomePage = () => {


    const [isSlide, SetisSlisde] = useState(false);

    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        const TxtType = function (el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function () {
            const i = this.loopNum % this.toRotate.length;
            const fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

            const that = this;
            let delta = 200 - Math.random() * 100;

            if (this.isDeleting) {
                delta /= 2;
            }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(function () {
                that.tick();
            }, delta);
        };

        const elements = document.getElementsByClassName('typewrite');
        for (let i = 0; i < elements.length; i++) {
            const toRotate = elements[i].getAttribute('data-type');
            const period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }

        const css = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
        document.body.appendChild(css);
    }, []);



    const nav = useNavigate();


    const hamberug = () => {

        nav('/nav');

    }


    const handleReadMoreClick = () => {
        setIsOpen(!isOpen);
    }

    const handelSlideClick = () => {
        SetisSlisde(!isSlide);
    }



    return (


        <section className='sec'>
            <Sidebar />
            <div className='back'>

                <div className="move">



                    <img alt="Man" className="profile-image" />

                    <div className='Details'>
                        <h1 className="name">Shrikant</h1>
                        <h1 className="surname">Yadav</h1>
                        {/* src={img} */}

                        <h2 className="line">|</h2>

                        <h1 className="type">
                            <a
                                href=""
                                className="typewrite"
                                data-period="2000"
                                data-type='[ "java full stack Dev","product designer.", "visual designer.", "interaction designer", "film photographer","java" ]'
                            >
                                <span className="wrap"></span>
                            </a>
                        </h1>
                    </div>


                    <div className="about-me">
                        {/* <button className="readmore" onClick={handleReadMoreClick}>Read more</button> */}
                        {isOpen ? null : <button className="readmore" onClick={handleReadMoreClick}>Read more</button>}
                    </div>


                    {/* jsx for readmore open and close 1 declared the const true and false  */}


                    {
                        isOpen && (
                            <div className='box' >
                                <div className="dev" class="card-header" >
                                    Hey Im A Devloper Developing My Skills
                                </div>
                                <div className='row'>
                                    {/* <p  style={{backgroundImage:`url(${frame})`}}></p> */}
                                    <p class="aboutme col-sm">I am an accomplished Full Stack Developer
                                        with a year of experience in crafting dynamic web experiences using Java and React</p>
                                    <p class="skillsets col-sm"> spring Boot .React .jsTypescriptPhotoshop.,jxihsbdrounoe,dbskijenrjen.</p>

                                </div>

                                <div className='container-fluid'>
                                    <button className='closereadmore' onClick={handleReadMoreClick}> X</button>
                                </div>
                            </div>

                        )
                    }


                        {/* //slide page from right */}

                    {
                        isSlide && (
                            <div className='page'>
                                <p className="year">2022</p>
                                <h1 className="font_4hjqte5kp">
                                    Metaverse at Google
                                </h1>


                                <span className="Descrpition">
                                    I worked with a number of designers and researchers on the small Immersive Studio to explore potential entrypoints for Google inside the Metaverse. I built numerous prototypes that were presented to leadership in Q4 of 2022.

                                </span>

                            </div>
                        )
                    }
                  

                </div>



            </div>
        </section>
    );
};

export default HomePage;
