import { Link } from "react-router-dom";
import './Project.css'
import Sidebar from './Toogle';

function Photography() {
    return (<div>
        <Sidebar/>
        <section>
        <p className="year">2023</p>
        <h1 className="font_4hjqte5kp">
            Optimize The new standard.
        </h1>



        <div className="desc">
            <p className="Descrpition">
                Design and development of an app tailored for
                photographers to showcase their photography skills .
                I worked with a number of designers and researchers on the small Immersive
                to explore potential entrypoints for an aesthetic and visually
                captivating manner.

            </p>
        </div>

        <div className="small-box">
            <Link to='/work'>Click to Optimize</Link>
                
        </div>

        </section>


        









    </div>)
}

export default Photography;
