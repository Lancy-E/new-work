import React from 'react'
import'./spotify.css'
import sp from '../assets/spo.png'
const Spotify = () => {
  return (
   
   
            
             <div class="na" > 
            <div class="cont">
                <div class="logo">
                    <img src={sp}width="80"height="80"/>
                </div>
                
            
             <div class="premium"><h2>premium</h2></div>
             <div class="help"><h3>help</h3></div>
             <div class="download"><h3>download</h3></div>
             <div class="signup"><h3>signup</h3></div>
                <div class="login"><h3>login</h3></div>
                 
            </div>
        
        
        
        
        
        
        
              <div class="sentence">
        
                
                  <h1><p>Music for everyone. </p></h1> <p><h7> Millions of songs.no credit card needed</h7></p>
                
        <div>
            <input type="submit"  class="button" id="btn" value="get spotify free"/>
        </div>
                
        
           
           </div>
        
        
        
            
        </div>
       
  )
}

export default Spotify