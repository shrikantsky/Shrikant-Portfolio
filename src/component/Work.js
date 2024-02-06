
import logo from './Images/check.jpg';
import './work.css';
import img from './Images/mobile-screen.png'

import Sidebar from './Toogle';
import { useState } from 'react';


function Work() {

  const [currentScreen, SetCurrentScreen] = useState(1);

  const handlePreviousScreen = () => {
    SetCurrentScreen(currentScreen - 1)

  }

  const handleNextScreen = () => {
    SetCurrentScreen(currentScreen + 1)

  }




  return (<div>
    <section >
      <Sidebar />

          <div className='mobile-screen-content'>
            <div className='mobile-screen'>
              <img className='img-png' src={img} />
             
                <div id="carouselExampleCaptions" class="carousel slide">
                 
                  <div class="carousel-inner">
                    <div class="carousel-item active homeScreen-one">
                      {/* <img src={img} class="d-block w-100" alt="..." /> */}
                      <div class="c-1 d-none d-md-block">
                        
                       
                      </div>
                    </div>
                    <div class="carousel-item homeScreen-two" >
                      {/* <img src={img} class="d-block w-100" alt="..." /> */}
                      {/*   <div class="carousel-caption d-none d-md-block"> carousel-caption if im going to add in class then caption come on image */}
                      <div class="c-2 d-none d-md-block ">
                        
                      </div>
                    </div>
                    <div class="carousel-item  homeScreen-three">
                      {/* <img src={img} class="d-block w-100" alt="..." /> */}
                      <div class="c-3 d-none d-md-block">
                        {/* <h5>optimize</h5>
                        <p>welcomes you.</p> */}
                      </div>
                    </div>
                    <div class="carousel-item  homeScreen-four">
                      {/* <img src={img} class="d-block w-100" alt="..." /> */}
                      <div class="c-3 d-none d-md-block">
                        {/* <h5>optimize</h5>
                        <p>welcomes you.</p> */}
                      </div>
                    </div>
                    <div class="carousel-item  homeScreen-five">
                      {/* <img src={img} class="d-block w-100" alt="..." /> */}
                      <div class="c-3 d-none d-md-block">
                        {/* <h5>optimize</h5>
                        <p>welcomes you.</p> */}
                      </div>
                    </div>
                    <div class="carousel-item  homeScreen-six">
                      {/* <img src={img} class="d-block w-100" alt="..." /> */}
                      <div class="c-3 d-none d-md-block">
                        <h1>Hello</h1>
                     <h2 className="para-lastscreen">
                      
                      Explore the Future: -
                      Dive into an interactive preview of our
                      UI/UX design! 

                    <blockquote/>

                     Experience the seamless
                    flow, vibrant visuals, and user-friendly
                    interface


                    Click <a href="https://www.figma.com/proto/Ex294RrCyMl62gR5l82JFe/photo?type=design&node-id=271-73&t=NkcfV20bVVgWVoRZ-1&scaling=scale-down&page-id=271%3A11&starting-point-node-id=271%3A73&show-proto-sidebar=1">here</a>

                     </h2>

   
                   
                      </div>
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">
                      <button className='ui button'>
                      <i class="bi bi-caret-left"></i>
                      </button>
                    </span>
                  </button>
                  <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden "><i class="bi bi-caret-right"></i></span>
                  </button>
                </div>
              
            </div>

            <div>
              <img className="the-story" src={logo} alt="React Logo" />
            </div>

          </div>



    </section>



  </div>)
}

export default Work;


