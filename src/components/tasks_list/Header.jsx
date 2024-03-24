import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {

    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <header className={`theme-${theme}`}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            {theme === 'light' ? <LightbulbCircleIcon onClick={toggleTheme} /> : <LightbulbIcon onClick={toggleTheme} />}

        </header>
    );
}

export default Header;
