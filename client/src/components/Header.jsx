import { Avatar, Button, Dropdown, Navbar, NavbarToggle, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/theme/themeSlice'
import { signoutSuccess } from '../redux/user/userSlice'

export default function Header() {
    const path = useLocation().pathname; 
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const { theme } = useSelector((state) => state.theme);
    const handleSignout = async () => {
      try {
        const res = await fetch('/api/user/signout', {
          method: 'POST',
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
        } else {
          dispatch(signoutSuccess());
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    
  return (
    <Navbar className='border-b-2'>
        <Navbar.Brand href="/">
        <img src="https://varuna-biodiversite.org/wp-content/themes/varuna_theme/img/logo.svg" className="mr-40 h-32 sm:h-32" alt="Varuna Logo" />
        </Navbar.Brand>
        <form >
            <TextInput 
                type='text'
                placeholder='Search...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch />
        </Button>
        <div className='flex gap-2 md:order-2'>
        <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
            </Button>
            {currentUser ? (
                <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt='user' img={currentUser.profilePicture} rounded />
                }
              >
                <Dropdown.Header>
                  <span className='block text-sm'>@{currentUser.username}</span>
                  <span className='block text-sm font-medium truncate'>{currentUser.email} </span>
                </Dropdown.Header>
                <Link to={'/dashboard?tab=profile'}>
                  <Dropdown.Item>Profil</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignout}>Se deconnecter</Dropdown.Item>
              </Dropdown>
            ) : (
                <Link to='/sign-in'>
                    <Button gradientDuoTone='tealToLime' outline>
                        Sign In
                    </Button>
                </Link>
                
            )}
            <NavbarToggle />
        </div>
        <Navbar.Collapse>
                <Navbar.Link active={path === "/"} as={'div'}>
                    <Link to='/'>
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/about"} as={'div'}>
                    <Link to='/about'>
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/project"} as={'div'}>
                    <Link to='/project'>
                        Project
                    </Link>
                </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}
