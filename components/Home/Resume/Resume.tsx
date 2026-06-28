import React from 'react'
import ResumeCard from './ResumeCard'
import { FaAward, FaPaintBrush, FaPen } from 'react-icons/fa'
import { MdMuseum } from 'react-icons/md'

const Resume = () => {
    return (
        <div className='pt-20 pb-16 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]'>
            <div className='w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
                        سابقه <span className="text-cyan-200">هنری</span>
                    </h1>
                    <div className="mt-10 space-y-4">
                        <ResumeCard
                            Icon={FaAward}
                            role="دارای مدرک ممتاز خوشنویسی از انجمن خوشنویسان ایران در زمینه خط نستعلیق و شکسته نستعلیق"
                            date=""
                        />
                        <ResumeCard
                            Icon={FaAward}
                            role="دوره فوق ممتاز خوشنویسی نستعلیق - عضو انجمن خوشنویسان ایران"
                            date=""
                        />
                        <ResumeCard
                            Icon={MdMuseum}
                            role="شرکت در ۴ نمایشگاه گروهی خوشنویسی و نقاشیخط"
                            date=""
                        />
                        <ResumeCard
                            Icon={FaPaintBrush}
                            role="فراگیری هنر تذهیب به مدت ۸ سال و طراحی تذهیب نمایشگاه‌های انفرادی"
                            date=""
                        />
                    </div>
                </div>

                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
                        سوابق <span className="text-cyan-200">تدریس</span>
                    </h1>
                    <div className="mt-10 space-y-4">
                        <ResumeCard
                            Icon={FaPen}
                            role="گذراندن دوره‌های هنر نقاشی خط به شکل کلاسیک و مدرن"
                            date=""
                        />
                        <ResumeCard
                            Icon={MdMuseum}
                            role="برگزاری نمایشگاه انفرادی خوشنویسی و تذهیب - دی ماه ۱۳۹۲"
                            date="دی ۱۳۹۲"
                        />
                        <ResumeCard
                            Icon={MdMuseum}
                            role="برگزاری نمایشگاه انفرادی نقاشی - فرهنگسرای ابن سینا"
                            date="آبان ۱۴۰۱"
                        />
                        <ResumeCard
                            Icon={MdMuseum}
                            role="شرکت در نمایشگاه بانوان هنرمند کلک مستوران - برج آزادی"
                            date="۱۴۰۳"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume