import React from 'react'
import { IconType } from 'react-icons'

type Props = {
    role: string,
    Icon: IconType,
    date?: string,
    isEducation?: boolean
}

const ResumeCard = ({ role, Icon, date, isEducation }: Props) => {
    return (
        <div className='group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10'>
            <div className="flex items-center gap-4">
                {/* آیکون */}
                <div className='w-14 h-14 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl flex items-center justify-center group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-colors flex-shrink-0'>
                    <Icon className='w-7 h-7 text-cyan-300 group-hover:text-cyan-200' />
                </div>

                {/* اطلاعات */}
                <div className='flex-1'>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
                        <h3 className='text-white text-lg font-semibold group-hover:text-cyan-200 transition-colors'>
                            {role}
                        </h3>
                        {date && (
                            <span className='inline-block px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-medium whitespace-nowrap'>
                                {date}
                            </span>
                        )}
                    </div>
                    {isEducation && (
                        <p className="text-gray-400 text-sm leading-relaxed mt-1">
                            فارغ التحصیل رشته مهندسی فناوری اطلاعات
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ResumeCard