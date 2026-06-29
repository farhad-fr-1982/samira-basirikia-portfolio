import Image from 'next/image';

const projects = [
    { id: 1, src: '/images/nagsh1.jpg', alt: 'نقاشی اول', title: 'نقاشی رنگ روغن', tags: 'نقاشی، هنرهای تجسمی' },
    { id: 2, src: '/images/nagsh2.jpg', alt: 'نقاشی دوم', title: 'نقاشی آبرنگ', tags: 'نقاشی، هنرهای تجسمی' },
    { id: 3, src: '/images/tahzib1.jpg', alt: 'تهذیب اول', title: 'تهذیب سنتی', tags: 'تهذیب، هنر اسلامی' },
    { id: 4, src: '/images/tahzib2.jpg', alt: 'تهذیب دوم', title: 'تهذیب تذهیب', tags: 'تهذیب، هنر اسلامی' },
    { id: 5, src: '/images/khat1.jpg', alt: 'خطاطی اول', title: 'خطاطی نستعلیق', tags: 'خطاطی، کالیگرافی' },
    { id: 6, src: '/images/khat2.jpg', alt: 'خطاطی دوم', title: 'خطاطی ثلث', tags: 'خطاطی، کالیگرافی' },
];

const Projects = () => {
    return (
        <div className="pt-16 pb-16 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
                نمونه‌ای از آخرین <span className="text-cyan-300">آثار</span>
            </h1>

            <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="overflow-hidden rounded-lg border border-white/10 hover:border-cyan-200/50 transition-all duration-300 flex flex-col"
                    >
                        <div className="relative w-full h-64 overflow-hidden">
                            <Image
                                src={project.src}
                                alt={project.alt}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-3">
                            <h3 className="text-sm sm:text-base font-semibold text-white">
                                {project.title}
                            </h3>
                            <p className="pt-1 text-xs font-medium text-white/80">{project.tags}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;