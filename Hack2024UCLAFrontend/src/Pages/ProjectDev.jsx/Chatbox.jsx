import React from 'react'
import Sidebar from './Sidebar'
function Chatbox() {
  return (
    <>
    <div className="chatbox--container">
        {/* chatbox container */}
        <Sidebar/>
        <div id="general">
            <div className="dev--section--picture1--container">
                {/* img1 */}
                <img src="/images/mechanics.jpg" alt="anna"/>
            </div>
            <div className="dev--section--picture2--container">
                {/* img2 */}
                <img src="/images/chatbox.jpg"/>
            </div>
        </div>
        
       

    </div>

    <div className='dev--web--title--container'>
        <h1>Website Section</h1>
    </div>
     <div id="webSection" style={{ height: '100vh', overflow: 'auto' }}>
        <iframe
            src="https://docs.google.com/document/d/1gtvX5dtuveY15gI_K-3lep4ZqNut2jupBJs6-tUvzzo/edit?usp=sharing"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="Google Doc"
        ></iframe>
    </div>

    <div className='dev--web--title--container'>
        <h1>Pico&&Circuit Section</h1>
    </div>
     <div id="circuitSection" style={{ height: '100vh', overflow: 'auto' }}>
        <img
            src="/images/Anna.jpg"
            width="100%"
            alt="not found"
        ></img>
    </div>

    

   


    </>
  )
}

export default Chatbox
