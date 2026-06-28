import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    return (
        <div className='pt-16 pb-16 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]'>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white text-center px-4">
                دوره‌های آموزشی گذرانده شده
            </h1>

            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12'>
                <ServiceCard
                    icon="/images/s1.png"
                    name="ICDL"
                    description="مهارت‌های پایه کامپیوتر با مدرک بین‌المللی ICDL - با سابقه تدریس در جهاد دانشگاهی"
                />
                <ServiceCard
                    icon="/images/s2.png"
                    name="Network+"
                    description="مدیریت و راه‌اندازی شبکه‌های کامپیوتری"
                />
                <ServiceCard
                    icon="/images/s3.png"
                    name="Windows Server 2003"
                    description="راه‌اندازی و مدیریت سرور ویندوز"
                />
                <ServiceCard
                    icon="/images/s4.png"
                    name="Photoshop CS5"
                    description="طراحی و ویرایش حرفه‌ای تصاویر با Adobe Photoshop CS5"
                />
                <ServiceCard
                    icon="/images/s3.png"
                    name="CorelDRAW X5"
                    description="طراحی گرافیکی و وکتور با CorelDRAW X5"
                />
            </div>
        </div>
    )
}

export default Services