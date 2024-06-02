import React from 'react';
import '../Navbar/Navabar.css'
import gitimage from '../Navbar/github.png';
import linkedin from '../Navbar/linkedin.png'
export const Navbar = () => {
  return (
<>
<div className="nav-container">
    <div className="nav-logo">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnx42LggbLIsqYM6qEdwbYrq-k8icskI2rQQ&s" alt="" />
    </div>
    <div className="links-container">
    <div className="github">
<a href='https://github.com/shuklasmriti'>
<img src={gitimage} alt="" />

</a>
    </div>
    <div className="linkedin">
<a href='https://www.linkedin.com/in/smriti-shukla-372940202/'>

      <img src={linkedin} alt="" />
      </a>
    </div>
    </div>
</div>

</>


)
}
