'use client'

import Image from 'next/image'
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import Typewriter from 'typewriter-effect'
import dynamic from 'next/dynamic';
import Link from 'next/link'

const ParticlesHero = dynamic(() => import('./ParticleBackground'), {
  ssr: false,
});

const Hero = () => {
    return (
        <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>

            <ParticlesHero />

            <div className='relative z-10 flex flex-col items-center px-4'>
                <div className='w-[250px] h-[250px] rounded-full border-8 border-[#0c0c48aa] overflow-hidden shadow-2xl'>
                    <Image
                        src='/images/sbk.jpg'
                        alt='سمیرا بصیری کیا'
                        width={250}
                        height={250}
                        style={{ objectPosition: '50% 30%' }}
                        className='w-full h-full object-cover'
                        priority
                    />
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl mt-4 text-cyan-200 font-semibold">
                    سمیرا بصیری کیا
                </h2>

                <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mt-2 text-center font-bold tracking-wide min-h-[80px]">
                    <Typewriter options={{
                        strings: [
                            'دارای مدرک ممتاز خوشنویسی از انجمن خوشنویسان ایران',
                            'عضو انجمن خوشنویسان ایران',
                            'مدرس خط نستعلیق و نقاشی سبک رئال',
                            'هنرمند تذهیب با ۸ سال تجربه',
                            'کارشناس فناوری اطلاعات بانک',
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 80,
                        deleteSpeed: 40,
                        wrapperClassName: 'pl-2'
                    }} />
                </div>

                <p className="text-sm sm:text-base md:text-lg mt-4 text-gray-300 max-w-2xl text-center leading-relaxed">
                    سلام! من سمیرا بصیری کیا هستم؛{" "}
                    <span className="text-cyan-200 font-semibold">
                        نقاش سبک رئال، خطاط و مدرس خوشنویسی و نقاشی
                    </span>
                    {" "}با مدرک ممتاز از انجمن خوشنویسان ایران و سابقه برگزاری نمایشگاه‌های انفرادی و گروهی
                </p>

                <Link href="/#projects">
                    <button className='mt-8 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium flex items-center'>
                        <span>نمایش نمونه کارها</span>
                        <BsArrowLeft className='w-5 h-5 mr-2' />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Hero