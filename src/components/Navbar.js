import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

//The navbar is created inside the function and is shown when showHeader() is called, inside every element of the navbar there's a text with a little animation.
//Only the home button works, the other ones are just decorative

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  showHeader();

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='' id="site-header">
        <header className="header">
          <div><Link className="title" to="/">
            <img src="/logo.png" className='logo'></img>
            </Link>
          </div>
        </header>
        <div className='navbar'>
          <a className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} className="fa-cog" />
          </a>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <a className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </a>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

function showHeader(){

    var doc = document.documentElement;
    var w = window;
  
    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;
    
    var checkScroll = function() {
  
      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) { 
        direction = 2;
      }
      else if (curScroll < prevScroll) { 
        direction = 1;
      }
  
      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }
      
      prevScroll = curScroll;
    };
  
    var toggleHeader = function(direction, curScroll) {
      if (direction === 2 && curScroll > 3) { 
        
        document.getElementById("site-header").classList.add("hide");
        prevDirection = direction;
      }
      else if (direction === 1) {
        document.getElementById("site-header").classList.remove("hide");
        prevDirection = direction;
      }
    };
    
    window.addEventListener('scroll', checkScroll);
  
  };