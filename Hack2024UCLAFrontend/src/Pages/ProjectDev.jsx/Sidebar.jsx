import React from 'react'
import {Link} from 'react-scroll'

function Sidebar() {
  return (
    <>
        <div className='sidebar'>
          <ul>
            <li>
              <Link
               activeClass="sidebar--active-content"
               spy={true}
               smooth={true}
               offset={-80}
               duration={500}
               to="webSection"
               className="sidebar--content"
              
              >
                Website
              </Link>
            </li>
            <li>
              <Link
               activeClass="sidebar--active-content"
               spy={true}
               smooth={true}
               offset={-80}
               duration={500}
               to="circuitSection"
               className="sidebar--content"
              
              >
                  Pico&&
                  <br/>
                  circuit
              </Link>
            </li>
          </ul>
        </div>
        
    </>
    
  )
}

export default Sidebar
