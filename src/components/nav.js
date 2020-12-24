import React from 'react'
import {Link} from "react-router-dom"

function Nav() {
    return (
        <div>
          <button><Link to='/'>home</Link></button>  
          <button><Link to='/Page1'>page1</Link></button>  
          <button><Link to='/Page2'>page2</Link></button>  
        </div>
    )
}

export default Nav