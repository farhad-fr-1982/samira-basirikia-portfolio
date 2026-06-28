import React from 'react'
import { BiPhone, BiEnvelope, BiMap } from 'react-icons/bi'
import { FaTelegram, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="text-right">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 leading-tight">
              برای هماهنگی و بررسی امکان
              <br />
              همکاری، با من تماس بگیرید
            </h1>

            <p className="text-gray-400 mt-6 text-base sm:text-lg">
              آماده‌ام تا در مورد فرصت‌های همکاری گفتگو کنیم
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-end group">
                <p className="text-xl font-bold text-gray-400 ml-3 transition-colors duration-300 group-hover:text-cyan-300" dir="ltr">09123348012</p>
                <BiPhone className="w-9 h-9 text-cyan-300 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="flex items-center justify-end group">
                <p className="text-xl font-bold text-gray-400 ml-3 transition-colors duration-300 group-hover:text-cyan-300" dir="ltr">09125128064</p>
                <BiPhone className="w-9 h-9 text-cyan-300 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="flex items-center justify-end group">
                <p className="text-xl font-bold text-gray-400 ml-3 transition-colors duration-300 group-hover:text-cyan-300" dir="ltr">samira.bk1360@gmail.com</p>
                <BiEnvelope className="w-9 h-9 text-cyan-300 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="flex items-center justify-end group">
                <p className="text-xl font-bold text-gray-400 ml-3 transition-colors duration-300 group-hover:text-cyan-300">تهران، استاد معین</p>
                <BiMap className="w-9 h-9 text-cyan-300 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>

            <div className="flex items-center mt-10 justify-end gap-3">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="تلگرام"
                className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-blue-500">
                <FaTelegram className="text-white w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="اینستاگرام"
                className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-pink-500">
                <FaInstagram className="text-white w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="لینکدین"
                className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-blue-700">
                <FaLinkedin className="text-white w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-cyan-500/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.5!2d51.3694!3d35.7219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00b0b0b0b0b0%3A0x0!2sTehran!5e0!3m2!1sfa!2sir!4v1719234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="نقشه تهران - استاد معین"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact