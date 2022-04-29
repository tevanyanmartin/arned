import React from 'react'
import '../css/footer.css'
import {Link} from 'react-router-dom'
import {auth} from '../index'
function Footer() {
  return (

    <div className='footer'>
        <div className='footer-content'>
            <div className='doc-icon'>
                <div className='icon'></div>
                <p>Իմ բժիշկները</p>
            </div>
            <div className='vis-icon'>
                <div className='icon'></div>
                <p>Իմ այցերը</p>
            </div>
            <div className='syr-icon'>
                <div className='icon'></div>
                <p>COVID-19</p>
            </div>
            <div 
            onClick={() => {
                auth.signOut();
                window.location.reload();
              }}
               className='pers-icon'>
                <div className='icon'></div>
                <p>իմ հաշիվը</p>
            </div>
        </div>
    </div>
  )
}

export default Footer