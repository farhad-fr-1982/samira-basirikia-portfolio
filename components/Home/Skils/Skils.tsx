import React from "react";
import { SiLibreoffice } from "react-icons/si";
import { MdNetworkCheck, MdAccountBalance, MdComputer, MdBrush, MdDns } from "react-icons/md";
import { FaLanguage, FaCamera } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const skills = [
  { name: "ICDL", icon: <SiLibreoffice />, percentage: 95, color: "text-green-400" },
  { name: "Network+", icon: <MdNetworkCheck />, percentage: 80, color: "text-blue-400" },
  { name: "Windows Server", icon: <MdDns />, percentage: 78, color: "text-cyan-400" },
  { name: "Photoshop CS5", icon: <FaCamera />, percentage: 82, color: "text-blue-500" },
  { name: "CorelDRAW X5", icon: <MdBrush />, percentage: 80, color: "text-yellow-400" },
  { name: "IT بانکی", icon: <MdComputer />, percentage: 88, color: "text-purple-400" },
  { name: "حسابداری بانک", icon: <MdAccountBalance />, percentage: 85, color: "text-emerald-400" },
  { name: "زبان انگلیسی", icon: <FaLanguage />, percentage: 80, color: "text-red-400" },
  { name: "ترکی استانبولی", icon: <FaLanguage />, percentage: 75, color: "text-orange-400" },
];

const Skills = () => {
  return (
    <section className="py-16 md:py-20" id="skills">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            مهارت‌های <span className="text-cyan-300">من</span>
          </h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            تکنولوژی‌ها و ابزارهایی که با آنها کار می‌کنم
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {skills.map((skill) => (
            <Tilt
              key={skill.name}
              scale={1.05}
              transitionSpeed={400}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#ffffff"
              className="w-40 h-48"
            >
              <div className="bg-[#14134145] backdrop-blur-sm text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center border border-white/10 hover:border-cyan-300/50 transition-all duration-300">
                <div className={`text-5xl mb-3 ${skill.color}`}>
                  {skill.icon}
                </div>
                <p className="text-2xl font-bold text-white">{skill.percentage}%</p>
                <p className="text-purple-400 mt-1 text-sm font-medium">
                  {skill.name}
                </p>
                <div className="w-3/4 h-1 bg-gray-700 rounded-full mt-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;