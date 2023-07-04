import React from 'react'
import Rooms from '../Rooms/Rooms'
import Dining from '../Footer/Dining'
import Meetings from '../Meetings/Meetings'
import Gym from '../Gym/Gym'
import Contact from '../Contact/Contact'

function Home() {
  return (
    <div>
        <div className='homepage'>  
            <div class='home'>
                <header>
                  <div class='tab'>
                    
                  </div>
                </header>
            </div>
        </div>
        <Rooms /> 
        <Dining />
        <Meetings />
        <Gym />
        <Contact />


         
    </div>
  )
}

export default Home