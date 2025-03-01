import logo from '../../src/assets/logo.png';
import userdefaultPic from '../../src/assets/user.png';
import DebateIcon from '../../src/assets/debateIcon.png';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../Provider/ThemeProvider';
const Navbar = () => {

  const {theme, toggleTheme} = useContext(ThemeContext)

  const navLinks = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/events'>Events</NavLink>
      </li>
      <li>
        <NavLink to='/members'>Executive Members</NavLink>
      </li>
    </>
  );
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm font-semibold text-lg dropdown-content bg-base-100 rounded-box z-50 mt-3 w-36 p-4 shadow-xl'
          >
            {navLinks}
          </ul>
        </div>
        <a className='flex items-center btn btn-ghost text-2xl font-bold'>
          <img src={logo} alt='ReeFood Logo' className='w-8 h-8 hidden' />
          <span className='text-violet-500'>PUDS</span>
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 gap-2 font-semibold text-lg'>{navLinks}</ul>
      </div>
      <div className='navbar-end'>
        {/* {user ? (
            <div className="flex mr-2">
              <div className="w-10 rounded-full md:tooltip md:tooltip-left" data-tip={user.displayName}>
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL? user.photoURL : {userdefaultPic}} className="rounded-full mr-1" />
              </div>
              <button onClick={handleSignOut} className="btn btn-primary">
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          )}   */}

        {/* Theme  */}

        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" className="theme-controller" checked={theme === "dark"} onChange={toggleTheme}/>

          {/* {theme === "dark" ? 
          } */}

          {/* sun icon */}
          <svg
            className="swap-off h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        <div className='w-10 rounded-full md:tooltip md:tooltip-left'></div>
        <div className="tooltip tooltip-left" data-tip="Room 601">
        <img
          alt='Tailwind CSS Navbar component'
          src={DebateIcon}
          className='rounded-full mr-1 w-8 h-8 mr-'
        />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
