"use client";

import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaCode } from 'react-icons/fa';
import { HiBars3BottomLeft } from 'react-icons/hi2';

type Props = {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavBg(true);
            } else {
                setNavBg(false);
            }
        };
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    // تابع دانلود رزومه
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/resume/Farhad_Rezazadeh_Resume.pdf';
        link.download = 'Farhad_Rezazadeh_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={`fixed w-full transition-all duration-300 h-[12vh] z-[10000] ${navBg ? 'bg-[#0c0c48] shadow-md' : 'bg-transparent'}`}>
            <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
                
                {/* LOGO - لینک به صفحه اصلی */}
                <Link href="/" className='flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300'>
                    <h1 className='text-xl md:text-2xl text-white font-bold'>FARHAD</h1>
                    <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
                        <FaCode className='w-5 h-5 text-black' />
                    </div>
                </Link>

                {/* NavLinks - لینک به بخش‌های مختلف */}
                <div className='hidden lg:flex items-center space-x-10'>
                    {NavLinks.map((link) => (
                        <Link 
                            key={link.id} 
                            href={link.url} 
                            className='text-base hover:text-cyan-300 text-white font-medium transition-all duration-200'
                        >
                            <p>{link.label}</p>
                        </Link>
                    ))}
                </div>

                {/* Buttons Section */}
                <div className='flex items-center space-x-4 md:space-x-8'>
                    {/* دکمه دانلود رزومه */}
                    <button 
                        onClick={downloadResume}
                        className='px-4 md:px-8 py-2 md:py-3.5 text-xs md:text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-1 md:space-x-2'
                    >
                        <BiDownload className='w-4 h-4 md:w-5 md:h-5' />
                        <span className='hidden sm:inline'>دانلود رزومه</span>
                    </button>

                    {/* Burger Menu - منوی موبایل */}
                    <HiBars3BottomLeft onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
                </div>
            </div>
        </div>
    );
};

export default Nav;