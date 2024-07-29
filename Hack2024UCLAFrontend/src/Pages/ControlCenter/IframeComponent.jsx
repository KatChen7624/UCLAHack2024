import React, {useState, useEffect} from 'react'

function IframeComponent() {
    // const [src, setSrc] = useState('http://10.0.0.73/');

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //     setSrc(`http://10.0.0.73/?timestamp=${new Date().getTime()}`);
    //     }, 60000); // Update every 60 seconds, adjust as needed

    //     return () => clearInterval(intervalId);
    // }, []);

    return (
        <div >
            <img
            height="240px" 
            width="400px" 
            src="http://10.0.0.73:81/stream"
            title="Example"
            />
            
        </div>
    );
}

export default IframeComponent
