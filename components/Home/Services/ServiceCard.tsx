import Image from 'next/image'
import React from 'react'

type Props = {
    icon: string
    name: string
    description: string
}

const ServiceCard = ({ icon, name, description }: Props) => {
    return (
        <div className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1">
            {/* آیکون بزرگتر */}
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl flex items-center justify-center group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-colors duration-300">
                <Image
                    src={icon}
                    alt={name}
                    width={50}
                    height={50}
                    className="w-12 h-12"
                />
            </div>

            {/* نام */}
            <h3 className="text-xl font-semibold text-white mt-4 group-hover:text-cyan-200 transition-colors">
                {name}
            </h3>

            {/* توضیحات */}
            <p className="text-gray-400 mt-2 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {description}
            </p>

            {/* خط زیرین */}
            <div className="w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mt-4 group-hover:w-full transition-all duration-300" />
        </div>
    )
}

export default ServiceCard