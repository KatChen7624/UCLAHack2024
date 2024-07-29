import io from 'socket.io-client';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-scroll'
import IframeComponent from './IframeComponent';

const socket = io('http://localhost:8000'); 

export default function ControlCenter(){
    
    const [data, setData] = useState({"temp":10,"humidity":10}); 
    const [ultradata,setUltradata]= useState(10);

    useEffect(() => {
        // Listen for updates on the 'example_topic'
        socket.on('temp&&humidity', (data) => {
          setData(JSON.parse(data)); // Update the state with the received data
        });
    
        // Clean up the effect by removing the event listener when the component unmounts
        return () => {
          socket.off('temp&&humidity');
        };
      }, []);

    useEffect(() => {
      socket.on('ultrasonic', (data) => {
        setUltradata(data); // Update the state with the received data
      });
  
      return () => {
        socket.off('ultrasonic');
      };
    }, []);





      const exampleSend = (message) => {
        // Send a message through the socket to the 'example_topic'
        socket.emit('example_topic', message);
      };


      //arrow handle start

      const roverUp=()=>{
        socket.emit('send-direction','forward');
      }
      const roverDown=()=>{
        socket.emit('send-direction','backward');
      }
      const roverLeft=()=>{
        socket.emit('send-direction','left');
      }
      const roverRight=()=>{
        socket.emit('send-direction','right');
      }
      const roverStop=()=>{
        socket.emit('send-direction','stop');
      }
      //arrow handle end

      //arm handle start
      const armMotionV = (msg) => {
        return () => {
            socket.emit('send-arm-value', msg);
        };
      };
      
      const armMotionOC = (msg) => {
          return () => {
              socket.emit('send-pinch-value', msg);
          };
      };

     
      //arm handle end



    return(
        <>
            <div className="control--container">
                <video src="/videos/comm.mp4" autoPlay loop muted></video>
            
              <div className="control--main--container">
                <div className="data-display-box">
                  <div><h>Live Data On Mars:</h></div>
                  <br/>
                  <p>Temperatur: {data.temp}</p>
                  <p>Humidity: {data.humidity}</p>
                </div>
                <div className="control--robotics--container">
        
                  <p style={{color:'#e4a3c5',fontSize:'50px',fontFamily: "monospace"}}>Control Options</p>
                  <Link 
                  className="rover"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Rover"
                   >
                    <div>
                      <i style={{color:'#ffffff', fontSize: '30px',marginRight:'50px'}} class="fa-solid fa-car"></i>
                      <span style={{color:'#849dab',fontSize:'30px',fontFamily:'fantasy'}}>
                        Rover
                      </span>
                    </div>
                    
                    <div>
                      <i style={{color:'#ffffff', fontSize: '30px',marginRight:'50px'}} class="fa-solid fa-dharmachakra"></i>
                      <span style={{color:'#849dab',fontSize:'30px',fontFamily:'fantasy'}}>
                        Arm
                      </span>
                    </div>
                    
                  </Link>


                   
                  
                </div>
              </div>
            </div>
            <div className="interaction--container">
              <div id="Rover">    
                <div className="arrow--container">
                  <div className='rover--firstrow'>
                    <a onClick={roverUp} className="arrow">⬆️</a>
                  </div>
                  <div>
                    <a onClick={roverLeft} className="arrow">⬅️</a>
                    <a onClick={roverStop} className="circle">🔵</a>
                    <a onClick={roverRight} className="arrow">➡️</a>
                  </div>
                  <div className='rover--thirdrow'>
                    <a onClick={roverDown} className="arrow">⬇️</a>
                  </div>
                </div>

                
              </div>
                <div className="arrow2--container">
                    <div className="arrow2--col">
                    <a  onClick={armMotionV('armup')} className="arm--arrow">⮝</a>
                    <a  onClick={armMotionV('armdown')} className="arm--arrow">⮟</a>
                    </div>
                    <div className="arrow2--col">
                      <a  onClick={armMotionOC('handopen')} className="arm--arrow">🖐🏻</a>
                      <a  onClick={armMotionOC('handclose')} className="arm--arrow">✊🏻</a>
                    
                    </div>

                </div>

                <div className='live--update--container'>
                  <div className="live--video--container">
                   <IframeComponent/>
                  </div>
                  
                  <p>Back distance: {ultradata}</p>
                </div>
            </div>

          
            {/* 
            <div>
                
                <button onClick={() => exampleSend('Hello, Server!')}>Send Message</button>
               
            </div> */}
        </>

    )
}


{/* <div className="arrow--container">
                <div className='rover--firstrow'>
                  <a  className="arm--arrow">⮝</a>
                </div>
                <div>
                  <a  className="arm--arrow">⯇</a>
                  <a className="circle">🟢</a>
                  <a  className="arm--arrow">⯈</a>
                </div>
                <div className='rover--thirdrow'>
                  <a  className="arm--arrow">⮟</a>
                </div>
              </div> */}