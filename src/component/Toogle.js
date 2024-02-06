import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <nav className={`sidebar ${isSidebarOpen ? 'close' : ''}`}>
      <header>
        <div className="image-text">
          <span className="image">
            {/*<img src="logo.png" alt="">*/}
          </span>

          <div className="text logo-text">
            <span className="name">Shrikant</span>
            <span className="profession">Capgemini</span>
          </div>
        </div>

        <i className='bx bx-chevron-right toggle' onClick={toggleSidebar}></i>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <li className="search-box">
            <i className='bx bx-search icon'></i>
            <input type="text" placeholder="Search..." onClick={() => setSidebarOpen(false)} />
          </li>

          <ul className="menu-links">
            {/* Add your menu links here */}
          </ul>
        </div>

        <div className="bottom-content">
        <li>
            <a href='/'>
              <i className='bx bx-log-out icon'></i>
              <span className="text nav-text">
                 HOME 
               </span>
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/shrikantyadav5">
              <i className='bx bx-log-out icon'></i>
              <span className="text nav-text">
                 BEHANCE   
               </span>
            </a>
          </li>

          <li>
          <Link to="/work">
              <i className='bx bx-log-out icon'></i>
              <span className="text nav-text">
              WORK
               </span>
            </Link>
          </li>

          <li>
          <a href="https://www.behance.net/shrikantyadav5">
              <i className='bx bx-log-out icon'></i>
              <span className="text nav-text">
              RESUME
               </span>
            </a>
          </li>

          <li>
          <a href="https://www.behance.net/shrikantyadav5">
              <i className='bx bx-log-out icon'></i>
              <span className="text nav-text">
              ABOUT
               </span>
            </a>
          </li>
        <li>
          
              <Link to='/photo'>
              <i className='bx bx-log-out icon'></i>
              <span className="text nav-text">
              PHOTOGRAPHY
               </span>
              </Link>
            
          </li>

      




{/* 
            dark mode key */}
          <li className="mode" onClick={toggleDarkMode}>
            <div className="sun-moon">
              <i className={`bx bx-moon icon ${isDarkMode ? 'moon' : ''}`}></i>
              <i className={`bx bx-sun icon ${isDarkMode ? '' : 'sun'}`}></i>
            </div>
            <span className="mode-text text">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>

            <div className="toggle-switch">
              <span className={`switch ${isDarkMode ? 'dark' : ''}`}></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
