import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

interface Props {
    closeNav: () => void;
    showNav: boolean;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

    return (
        <div>
            {/* overlay */}
            <div 
                onClick={closeNav}
                className={`fixed inset-0 ${navOpen} transform transition-all duration-500 z-[100002] bg-black/70 w-full h-screen`}
            ></div>
            
            {/* navlinks */}
            <div className={`text-white fixed ${navOpen} justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-[#0c0c48] space-y-6 z-[100050] right-0 shadow-2xl`}>
                {NavLinks.map((link) => (
                    <Link 
                        key={link.id} 
                        href={link.url}
                        onClick={closeNav}
                    >
                        <p className='text-white w-fit text-xl mr-12 border-b-[1.5px] pb-1 border-white/30 hover:border-cyan-300 transition-colors duration-300 sm:text-[30px]'>
                            {link.label}
                        </p>
                    </Link>
                ))}
                
                {/* دکمه بستن */}
                <CgClose 
                    onClick={closeNav} 
                    className='absolute top-[0.7rem] left-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer hover:text-cyan-300 transition-colors duration-300' 
                />
            </div>
        </div>
    );
};

export default MobileNav;