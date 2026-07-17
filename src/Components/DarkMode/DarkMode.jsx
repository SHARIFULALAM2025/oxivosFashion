"use client"
import React from 'react';
import { useTheme } from '../provider/ThemeProvider';
import { CiLight } from 'react-icons/ci'
import { IoMdMoon } from 'react-icons/io'

const DarkMode = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div>
            <button onClick={toggleTheme} className='px-2 py-1.5 rounded-lg border hover:border-primary hover:cursor-pointer text-foreground '>
                {theme==="light"?<IoMdMoon/>:<CiLight/>}

            </button>

        </div>
    );
};

export default DarkMode;