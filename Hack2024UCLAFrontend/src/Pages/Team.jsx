
import data from "../data/team.json";
import { Link } from "react-scroll";

export default function Team(){
    return (
    <>
        <div className="team-container">
           <img src='/images/Anna.jpg' alt='Anna' />
           
           <Link className="meet--team"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="teamsSection"
           >
            <h>Meet Our Teams</h>
           </Link>
           <p>Disney Adults</p>
        </div>
            <section id="teamsSection" className="teams--section" >
            <div className="teams--section--container">
                {data?.teams?.map((item, index) => (
                    <div key={index} className="teams--section--card">
                        <img src={item.src} alt="team"/>
                        {/* <div className="teams--section--img">
                            <img src={item.src} alt="team" />
                        </div> */}
                        <div className="teams--section--card--content">
                            <h3 className="teams--section--title">{item.name}</h3>
                            <p className="teams--section--major">{item.major}</p>
                           
                        </div>
                    </div>
                ))}
            </div>
            </section>

        
    
    </>
    )
}