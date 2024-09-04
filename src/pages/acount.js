import { useEffect, useState } from 'react';
import './Acount.css';
const Accont=()=>{

     
      const [location1,setLocation1]=useState({
        latitude: 23.5204443 ,
        longitude: 87.3119227
      })
    
      const [status, sets]=useState('not now')
 
    const [location, setLocation] = useState({
      latitude: null,
      longitude: null,
      error: null,
    });
  
   const tbhcr=()=>{
      if(location.latitude==location1.latitude){
       
        sets('working')
      }
   }
  
   
  


 
  
    
    useEffect(() => {
    
      // Check if Geolocation API is available
      if (navigator.geolocation) {
        // Request the user's current position
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // On success, update the location state
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null,
            });
          },
          (error) => {
            // On error, update the error state
            setLocation({
              latitude: null,
              longitude: null,
              error: error.message,
            });
          }
        );
      } else {
        // Geolocation API is not available
        setLocation({
          latitude: null,
          longitude: null,
          error: 'Geolocation is not supported by this browser.',
        });
      }
    }, []);
     
      
     
      
      
   
    return (<>
    <div className='container'>
        <h4 style={{fontSize:'30px'}}>Current opening sides</h4>
        </div>  
        <div className='container2' >
            <div className='container3'>
                <li>
                    <ul>Name</ul>
                    <ul>Location</ul>
                    <ul>labours</ul>
                    <ul>status</ul>
                    
                </li>
            </div>
            <div className='container4'>
            <li>
                    <ul>hemtabad</ul>
                    <ul>{location.latitude},{location.longitude}</ul>
                    <ul></ul>
                    <ul>running</ul>
                    
                </li>
                <li>
                    <ul>Name</ul>
                    <ul>Location</ul>
                    <ul>labours</ul>
                    <ul>{status}</ul>
                    
                </li>
            </div>
        </div> 
        <div className='add'><h4 style={{textAlign:'center'}}>Add New Side</h4>
         <div className='input'>
          <input type='input' />
          <input type='input' />
          <input type='input' />
          <input type='input' />
          </div>
          <button type='button' onClick={tbhcr} style={{alignContent:'center'}}>Add the entry</button>
        
        </div>
        
    </>)


}
export default Accont;