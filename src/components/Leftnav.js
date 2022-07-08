import React, { useEffect, useState } from 'react'

const Leftnav = () => {
  
  
  return (
    <div className='leftNav'>
        
        <div className='leftNavContainer'>
        <h3>Skills:</h3>
        <p>html</p>
        <div className='progress'>
        <div className='progress-done'>
        <h5>100%</h5>
        </div>
      </div>

      <p>Css</p>
        <div className='progress'>
        <div className='progress-done2'>
        <h5>90%</h5>
        </div>
      </div>

      <p>Javascript</p>
        <div className='progress'>
        <div className='progress-done3'>
        <h5>85%</h5>
        </div>
      </div>
      <p>React.js</p>
        <div className='progress'>
        <div className='progress-done4'>
        <h5>90%</h5>
        </div>
      </div>
      <p>React native</p>
        <div className='progress'>
        <div className='progress-done5'>
        <h5>87%</h5>
        </div>
      </div>
      <p>Firebase</p>
        <div className='progress'>
        <div className='progress-done6'>
        <h5>80%</h5>
        </div>
      </div>
      <p>Node.js</p>
        <div className='progress'>
        <div className='progress-done7'>
        <h5>59%</h5>
        </div>
      </div>
        </div>
        
    </div>
  )
}

export default Leftnav