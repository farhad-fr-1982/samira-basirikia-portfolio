import Image from 'next/image';
import React from 'react'

const Projects = () => {
    return (
        <div className="pt-16 pb-16 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
                نمونه‌ای از آخرین <br />
                <span className="text-cyan-300">پروژه‌ها</span>
            </h1>
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {/* پروژه اول */}
                <div className="overflow-hidden rounded-lg border border-white/10 hover:border-cyan-200/50 transition-all duration-300 flex flex-col h-full">
                    <div className="relative w-full h-80 overflow-hidden">
                        <Image
                            src='/images/pr3.png'
                            alt="پروژه یک"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-4 flex-1">
                        <h1 className="text-xl sm:text-2xl font-semibold text-white">
                            داشبورد مالی مدرن
                        </h1>
                        <p className="pt-2 font-medium text-white/80">اپلیکیشن، پنل ادمین اختصاصی</p>
                    </div>
                </div>

                {/* پروژه دوم */}
                <div className="overflow-hidden rounded-lg border border-white/10 hover:border-cyan-200/50 transition-all duration-300 flex flex-col h-full">
                    <div className="relative w-full h-80 overflow-hidden">
                        <Image
                            src='/images/pr2.png'
                            alt="پروژه دو"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-4 flex-1">
                        <h1 className="text-xl sm:text-2xl font-semibold text-white">
                            اپلیکیشن مدیریت پروژه
                        </h1>
                        <p className="pt-2 font-medium text-white/80">برنامه‌نویسی، توسعه وب</p>
                    </div>
                </div>

                {/* پروژه سوم */}
                <div className="overflow-hidden rounded-lg border border-white/10 hover:border-cyan-200/50 transition-all duration-300 flex flex-col h-full">
                    <div className="relative w-full h-80 overflow-hidden">
                        <Image
                            src='/images/pr1.png'
                            alt="پروژه سه"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-4 flex-1">
                        <h1 className="text-xl sm:text-2xl font-semibold text-white">
                            وب‌سایت فروشگاهی
                        </h1>
                        <p className="pt-2 font-medium text-white/80">طراحی، توسعه</p>
                    </div>
                </div>

                {/* پروژه چهارم */}
                <div className="overflow-hidden rounded-lg border border-white/10 hover:border-cyan-200/50 transition-all duration-300 flex flex-col h-full">
                    <div className="relative w-full h-80 overflow-hidden">
                        <Image
                            src='/images/p3.jpg'
                            alt="پروژه چهار"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-4 flex-1">
                        <h1 className="text-xl sm:text-2xl font-semibold text-white">
                            پنل مدیریت محتوا
                        </h1>
                        <p className="pt-2 font-medium text-white/80">سیستم مدیریت، پنل ادمین</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects