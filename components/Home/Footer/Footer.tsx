import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa'
import { BiPhone, BiEnvelope, BiMap } from 'react-icons/bi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a1a] border-t border-gray-800/50 py-12">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">درباره من</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              متخصص فناوری اطلاعات و هنرمند خوشنویس، با سابقه کار در حوزه بانکداری و تدریس هنر
            </p>
            <div className="flex items-center justify-end gap-3 mt-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="لینکدین" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="اینستاگرام" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="تلگرام" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300">
                <FaTelegram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">لینک‌های سریع</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-cyan-300 transition-colors duration-300">خانه</Link></li>
              <li><Link href="#skills" className="hover:text-cyan-300 transition-colors duration-300">مهارت‌ها</Link></li>
              <li><Link href="#projects" className="hover:text-cyan-300 transition-colors duration-300">نمونه کارها</Link></li>
              <li><Link href="#contact" className="hover:text-cyan-300 transition-colors duration-300">تماس با من</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">خدمات من</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-cyan-300 transition-colors duration-300">تدریس خوشنویسی نستعلیق</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition-colors duration-300">تدریس نقاشی سبک رئال</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition-colors duration-300">تدریس ICDL</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition-colors duration-300">طراحی تذهیب</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition-colors duration-300">مشاوره فناوری اطلاعات</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">اطلاعات تماس</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center justify-end gap-2">
                <span dir="ltr">09123348012</span>
                <BiPhone className="w-5 h-5 text-cyan-300" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span dir="ltr">samira.bk1360@gmail.com</span>
                <BiEnvelope className="w-5 h-5 text-cyan-300" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span>تهران، استاد معین</span>
                <BiMap className="w-5 h-5 text-cyan-300" />
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800/50 mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} تمامی حقوق محفوظ است.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              طراحی و توسعه توسط <span className="text-cyan-300">Farhad Rezazadeh</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer