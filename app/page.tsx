'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
};

const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
};

const slideInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
};

const slideInRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
};

export default function HomePage() {
    return (
        <div className="min-h-screen bg-black text-white" style={{ backgroundColor: '#000000' }}>
            <motion.nav 
                className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <motion.div 
                        className="flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                    >
                        <svg width="32" height="26" viewBox="0 0 41 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[41px] sm:h-[33px]">
                            <path d="M38.6885 19.9414C35.7245 17.0666 30.8972 17.1435 27.9288 20.1105L25.7447 22.2936L23.6091 20.1589L27.6673 16.1025C31.1543 12.6171 31.1543 6.94436 27.6673 3.459L26.8258 2.61786C25.1339 0.92899 22.8884 0 20.5 0C18.1116 0 15.8639 0.92899 14.1764 2.61786L13.3349 3.459C9.84791 6.94436 9.84791 12.6171 13.3349 16.1025L17.3931 20.1589L15.2574 22.2936L12.9855 20.0227C11.5024 18.5403 9.55568 17.8001 7.60675 17.8001C5.65782 17.8001 3.71109 18.5403 2.22797 20.0227C0.790997 21.4612 0 23.3697 0 25.4012C0 27.4327 0.790997 29.3411 2.22797 30.7775C3.66275 32.2116 5.57213 33 7.60675 33C9.64137 33 11.5507 32.2116 12.9855 30.7775L15.2574 28.5066L17.5843 30.8368C18.3621 31.6142 19.3948 32.0447 20.4956 32.0447C21.5964 32.0447 22.6313 31.6164 23.4091 30.8389L25.7447 28.5044L27.9288 30.6874C29.3965 32.1545 31.352 32.9627 33.4328 32.9627C35.5136 32.9627 37.2867 32.2138 38.6885 30.8565C40.1782 29.4114 41 27.4722 41 25.399C41 23.3258 40.1782 21.3865 38.6885 19.9414ZM9.87867 27.6698C9.27224 28.276 8.46586 28.6076 7.60675 28.6076C6.74764 28.6076 5.94126 28.2738 5.33483 27.6698C4.7284 27.0659 4.39443 26.2577 4.39443 25.399C4.39443 24.5403 4.7284 23.7343 5.33483 23.1281C5.94126 22.522 6.74764 22.1881 7.60675 22.1881C8.46586 22.1881 9.27224 22.522 9.87867 23.1281L12.1506 25.399L9.87867 27.6698ZM20.4978 27.5381L19.7156 26.7562L18.3621 25.4012L20.4758 23.2862L20.6516 23.4202L22.6313 25.399L20.4934 27.5359L20.4978 27.5381ZM21.9875 15.5688L20.5022 17.0534L16.4439 12.9971C14.6708 11.2247 14.6708 8.33895 16.4439 6.56442L17.2855 5.72328C18.1446 4.86457 19.2871 4.39019 20.5022 4.39019C21.7173 4.39019 22.8598 4.86237 23.7189 5.72328L24.5604 6.56442C26.3336 8.33675 26.3336 11.2225 24.5604 12.9971L21.9875 15.5688ZM35.63 27.705C35.0258 28.2914 34.2348 28.5813 33.4328 28.5813C32.5715 28.5813 31.7014 28.2474 31.0378 27.5842L28.8538 25.4012L31.0378 23.2182C32.3188 21.9378 34.3798 21.8829 35.63 23.0952C36.2606 23.7057 36.6078 24.5249 36.6078 25.4012C36.6078 26.2775 36.2606 27.0966 35.63 27.7072V27.705Z" fill="white" />
                        </svg>
                        <span className="text-white text-lg sm:text-xl font-bold">Squid</span>
                    </motion.div>
                    <div className="flex items-center space-x-4 sm:space-x-8">
                        <Link href="#" className="hidden sm:block text-white hover:text-gray-300 transition-colors">
                            Home
                        </Link>
                        <Link href="/signup">
                            <motion.button 
                                className="gradient-button px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg text-white text-sm sm:text-base font-medium hover:opacity-90 transition-opacity"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="hidden sm:inline">Download Template</span>
                                <span className="sm:hidden">Download</span>
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </motion.nav>

            <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <svg width="190" height="190" viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-20 right-20" style={{ zIndex: 1 }}>
                    <g filter="url(#filter0_f_408_1329)">
                        <circle cx="95" cy="95" r="65" fill="url(#paint0_radial_408_1329)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_408_1329" x="0" y="0" width="190" height="190" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_408_1329" />
                        </filter>
                        <radialGradient id="paint0_radial_408_1329" cx="0" cy="0" r="1" gradientTransform="matrix(5.41665 137.042 -1562.65 1373.3 85.7917 20.7916)" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#494955" />
                            <stop offset="1" stopColor="#141414" />
                        </radialGradient>
                    </defs>
                </svg>

                <svg width="190" height="190" viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-40 left-20" style={{ zIndex: 1 }}>
                    <g filter="url(#filter0_f_408_1330)">
                        <circle cx="95" cy="95" r="65" fill="url(#paint0_radial_408_1330)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_408_1330" x="0" y="0" width="190" height="190" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_408_1330" />
                        </filter>
                        <radialGradient id="paint0_radial_408_1330" cx="0" cy="0" r="1" gradientTransform="matrix(5.41665 137.042 -1562.65 1373.3 85.7917 20.7916)" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#494955" />
                            <stop offset="1" stopColor="#141414" />
                        </radialGradient>
                    </defs>
                </svg>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-4xl mx-auto relative px-4">
                        <div className="absolute rounded-full w-full max-w-[538px] aspect-square hidden md:block" style={{
                            top: '-80px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: 'radial-gradient(50% 50% at 50% 50%, rgba(34, 34, 40, 0.4) 0%, rgba(34, 34, 40, 0) 100%)',
                            zIndex: 0
                        }}></div>

                        <motion.div 
                            className="relative z-10"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <img 
                                src="https://res.cloudinary.com/dlvjrvhak/image/upload/v1766143037/Ellipse_14_ye2gq6.png" 
                                alt="Ellipse decoration"
                                className="absolute hidden md:block"
                                style={{
                                    top: '-30px',
                                    left: '50%',
                                    transform: 'translateX(-100px)',
                                    width: '120px',
                                    height: 'auto', 
                                    zIndex : '-1'
                                }}
                            />
                            <h1 className="text-white text-center z-40 text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4" style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 600,
                                lineHeight: '1.2',
                                letterSpacing: '0%',
                                margin: '0 auto 24px'
                            }}>
                                Beautiful Landing Page Design for You
                            </h1>
                        </motion.div>

                        <motion.p 
                            className="text-gray-400 text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 max-w-xl mx-auto px-4" 
                            style={{
                                lineHeight: '1.6'
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="px-4"
                        >
                            <Link href="/signup">
                                <button className="gradient-button px-6 py-3 sm:px-10 sm:py-4 rounded-xl text-white font-semibold text-sm sm:text-base hover:opacity-90 transition-opacity shadow-2xl">
                                    Download Template
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div 
                        className="mt-16 sm:mt-24 relative" 
                        style={{ paddingBottom: '200px', overflow: 'visible' }}
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    >
                        <div className="relative mx-auto" style={{ maxWidth: '1150px', width: '100%', boxSizing: 'border-box', padding: '0 16px', overflow: 'visible' }}>
                            <div className="absolute left-1/2 transform -translate-x-1/2 z-0 hidden sm:block" style={{ bottom: '-280px', width: '100vw', height: '500px', overflow: 'visible' }}>
                                <svg viewBox="0 0 1446 474" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice" style={{ overflow: 'visible' }}>
                                    <defs>
                                        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0.48%" stopColor="#FF9898" />
                                            <stop offset="100%" stopColor="#8054FF" />
                                        </linearGradient>
                                    </defs>
                                    <path fill="url(#wave-gradient)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1446,128L1446,474L0,474Z"></path>
                                </svg>
                            </div>

                            <div className="relative rounded-[20px] sm:rounded-[30px] shadow-2xl z-10" style={{
                                backgroundColor: '#131415',
                                height: 'auto',
                                minHeight: '400px',
                                boxSizing: 'border-box',
                                padding: '16px sm:24px'
                            }}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4" style={{ minHeight: '400px' }}>
                                    <div className="rounded-2xl p-4 flex flex-col space-y-3" style={{ backgroundColor: '#222228', overflow: 'hidden' }}>
                                        <div style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))' }}>
                                            <img src="https://res.cloudinary.com/dlvjrvhak/image/upload/v1766143020/Group_113_uzvzmj.png" alt="Logo" style={{ width: '60px', height: 'auto', objectFit: 'contain' }} />
                                        </div>
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} className="space-y-2">
                                                <div className="h-3 rounded-full w-3/4" style={{ backgroundColor: '#313139' }}></div>
                                                <div className="h-2 rounded-full w-1/2" style={{ backgroundColor: '#3D3D49' }}></div>
                                            </div>
                                        ))}
                                        <div className="mt-auto" style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))' }}>
                                            <img src="https://res.cloudinary.com/dlvjrvhak/image/upload/v1766143020/Group_113_uzvzmj.png" alt="Avatar" style={{ width: '50px', height: 'auto', objectFit: 'contain' }} />
                                        </div>
                                    </div>

                                    <div className="space-y-4 flex flex-col" style={{ height: '100%', overflow: 'hidden' }}>
                                        <div className="rounded-2xl p-4 flex items-center justify-center" style={{ backgroundColor: '#222228', flex: '1', overflow: 'hidden' }}>
                                            <div style={{ position: 'relative', width: '120px', height: '120px', maxWidth: '100%' }}>
                                                <svg viewBox="0 0 200 200" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
                                                    <defs>
                                                        <linearGradient id="donut-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                            <stop offset="0%" stopColor="#FF9898" />
                                                            <stop offset="100%" stopColor="#8054FF" />
                                                        </linearGradient>
                                                    </defs>
                                                    <circle cx="100" cy="100" r="80" fill="none" stroke="#313139" strokeWidth="30" />
                                                    <circle cx="100" cy="100" r="80" fill="none" stroke="url(#donut-gradient)" strokeWidth="30" strokeDasharray="377" strokeDashoffset="94" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="rounded-2xl p-4 flex items-center justify-center" style={{ backgroundColor: '#222228', flex: '1', overflow: 'hidden' }}>
                                            <img src="https://res.cloudinary.com/dlvjrvhak/image/upload/v1766143021/Group_132_nk5ngw.png" alt="Bar Chart" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                        </div>
                                    </div>

                                    <div className="space-y-1 flex flex-col h-full">
                                        <div
                                            className="rounded-2xl p-3 flex flex-col gap-y-3 items-center h-full"
                                            style={{ backgroundColor: '#222228' }}
                                        >
                                            <img
                                                src="https://res.cloudinary.com/dlvjrvhak/image/upload/v1766143420/Group_111_iiufoq.png"
                                                alt="User 1"
                                                className="w-full object-contain"
                                            />
                                            <img
                                                src="https://res.cloudinary.com/dlvjrvhak/image/upload/v1766143420/Group_110_igaxo6.png"
                                                alt="User 2"
                                                className="w-full object-contain"
                                            />
                                            <img
                                                src="https://res.cloudinary.com/dlvjrvhak/image/upload/v1766143420/Group_109_rvsisu.png"
                                                alt="User 3"
                                                className="w-full object-contain"
                                            />
                                            <img src="https://res.cloudinary.com/dlvjrvhak/image/upload/v1766143420/Group_108_gbdqtm.png" alt="User 4" 
                                             className="w-full object-contain" />
                                        
                                        </div>



                                        <div className="rounded-2xl p-4 flex items-center justify-center" style={{ backgroundColor: '#222228', flex: '1', overflow: 'hidden' }}>
                                            <img src="" alt="Stats" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="relative py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#000000' }}>
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div 
                        className="mb-12 sm:mb-16 px-4"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Feature Boxes</h2>
                        <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-xl">
                            A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div 
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="backdrop-blur-sm rounded-[20px] p-8 transition-all group" style={{
                            width: '350px',
                            height: '371px',
                            backgroundColor: '#131415'
                        }}>
                            <div className="rounded-[30px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{
                                width: '104px',
                                height: '104px',
                                backgroundColor: '#222228'
                            }}>
                                <img src="https://res.cloudinary.com/dlvjrvhak/image/upload/v1766142991/Group_180_thmelb.png" alt="Icon" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Easy to Use</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Intuitive interface designed for seamless user experience and quick implementation
                            </p>
                        </motion.div>

                        <motion.div 
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="backdrop-blur-sm rounded-[20px] p-6 sm:p-8 transition-all group relative hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-purple-500/20 w-full max-w-sm min-h-[320px] mx-auto" style={{
                            backgroundColor: '#131415'
                        }}>
                            <div className="rounded-[30px] w-24 h-24 sm:w-[104px] sm:h-[104px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{
                                backgroundColor: '#222228'
                            }}>
                                <img src="https://res.cloudinary.com/dlvjrvhak/image/upload/v1766143020/Group_129_pgxdpw.png" alt="Icon" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Modern Design</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Contemporary aesthetics that align with the latest design trends and best practices
                            </p>
                        </motion.div>

                        <motion.div 
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="backdrop-blur-sm rounded-[20px] p-6 sm:p-8 transition-all group relative w-full max-w-sm min-h-[320px] mx-auto" style={{
                            background: 'linear-gradient(154.63deg, #FF9898 3.69%, #8054FF 67.86%)'
                        }}>
                            <div className="rounded-[30px] w-24 h-24 sm:w-[104px] sm:h-[104px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg" style={{
                                background: 'linear-gradient(154.63deg, #FF9898 3.69%, #8054FF 67.86%)'
                            }}>
                                <img src="https://res.cloudinary.com/dlvjrvhak/image/upload/v1766142990/Group_174_xs3jes.png" alt="Icon" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Fully Customizable</h3>
                            <p className="text-white text-sm leading-relaxed">
                                Tailor every aspect to match your brand identity and specific requirements
                            </p>
                        </motion.div>

                        <motion.div 
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="backdrop-blur-sm rounded-[20px] p-8 transition-all group" style={{
                            width: '350px',
                            height: '371px',
                            backgroundColor: '#131415'
                        }}>
                            <div className="rounded-[30px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{
                                width: '104px',
                                height: '104px',
                                backgroundColor: '#222228'
                            }}>
                                <img src="https://res.cloudinary.com/dlvjrvhak/image/upload/v1766142991/Group_176_bih9kq.png" alt="Icon" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Fast Performance</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Optimized for speed and efficiency to deliver exceptional user experience
                            </p>
                        </motion.div>

                        <motion.div 
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="backdrop-blur-sm rounded-[20px] p-6 sm:p-8 transition-all group w-full max-w-sm min-h-[320px] mx-auto" style={{
                            backgroundColor: '#131415'
                        }}>
                            <div className="rounded-[30px] w-24 h-24 sm:w-[104px] sm:h-[104px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{
                                backgroundColor: '#222228'
                            }}>
                                <img src="https://res.cloudinary.com/dlvjrvhak/image/upload/v1766142990/Group_170_mk9rzu.png" alt="Icon" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Secure & Reliable</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Built with industry-standard security practices to protect your data
                            </p>
                        </motion.div>

                        <motion.div 
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="backdrop-blur-sm rounded-[20px] p-6 sm:p-8 transition-all group w-full max-w-sm min-h-[320px] mx-auto" style={{
                            backgroundColor: '#131415'
                        }}>
                            <div className="rounded-[30px] w-24 h-24 sm:w-[104px] sm:h-[104px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{
                                backgroundColor: '#222228'
                            }}>
                                <img src="https://res.cloudinary.com/dlvjrvhak/image/upload/v1766142988/Group_161_fyll4i.png" alt="Icon" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Dedicated support team ready to assist you at any time, day or night
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#000000' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                        <div className="relative order-2 lg:order-1" style={{ width: '100%', maxWidth: '500px', height: '400px', flexShrink: 0 }}>
                            <svg className="absolute inset-0" style={{ width: '100%', height: '100%', pointerEvents: 'none' }}>
                                <circle cx="250" cy="250" r="100" fill="none" stroke="#1a1a1a" strokeWidth="1" />
                                <circle cx="250" cy="250" r="150" fill="none" stroke="#1a1a1a" strokeWidth="1" />
                                <circle cx="250" cy="250" r="200" fill="none" stroke="#1a1a1a" strokeWidth="1" />
                            </svg>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 41 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M38.6885 19.9414C35.7245 17.0666 30.8972 17.1435 27.9288 20.1105L25.7447 22.2936L23.6091 20.1589L27.6673 16.1025C31.1543 12.6171 31.1543 6.94436 27.6673 3.459L26.8258 2.61786C25.1339 0.92899 22.8884 0 20.5 0C18.1116 0 15.8639 0.92899 14.1764 2.61786L13.3349 3.459C9.84791 6.94436 9.84791 12.6171 13.3349 16.1025L17.3931 20.1589L15.2574 22.2936L12.9855 20.0227C11.5024 18.5403 9.55568 17.8001 7.60675 17.8001C5.65782 17.8001 3.71109 18.5403 2.22797 20.0227C0.790997 21.4612 0 23.3697 0 25.4012C0 27.4327 0.790997 29.3411 2.22797 30.7775C3.66275 32.2116 5.57213 33 7.60675 33C9.64137 33 11.5507 32.2116 12.9855 30.7775L15.2574 28.5066L17.5843 30.8368C18.3621 31.6142 19.3948 32.0447 20.4956 32.0447C21.5964 32.0447 22.6313 31.6164 23.4091 30.8389L25.7447 28.5044L27.9288 30.6874C29.3965 32.1545 31.352 32.9627 33.4328 32.9627C35.5136 32.9627 37.2867 32.2138 38.6885 30.8565C40.1782 29.4114 41 27.4722 41 25.399C41 23.3258 40.1782 21.3865 38.6885 19.9414ZM9.87867 27.6698C9.27224 28.276 8.46586 28.6076 7.60675 28.6076C6.74764 28.6076 5.94126 28.2738 5.33483 27.6698C4.7284 27.0659 4.39443 26.2577 4.39443 25.399C4.39443 24.5403 4.7284 23.7343 5.33483 23.1281C5.94126 22.522 6.74764 22.1881 7.60675 22.1881C8.46586 22.1881 9.27224 22.522 9.87867 23.1281L12.1506 25.399L9.87867 27.6698ZM20.4978 27.5381L19.7156 26.7562L18.3621 25.4012L20.4758 23.2862L20.6516 23.4202L22.6313 25.399L20.4934 27.5359L20.4978 27.5381ZM21.9875 15.5688L20.5022 17.0534L16.4439 12.9971C14.6708 11.2247 14.6708 8.33895 16.4439 6.56442L17.2855 5.72328C18.1446 4.86457 19.2871 4.39019 20.5022 4.39019C21.7173 4.39019 22.8598 4.86237 23.7189 5.72328L24.5604 6.56442C26.3336 8.33675 26.3336 11.2225 24.5604 12.9971L21.9875 15.5688ZM35.63 27.705C35.0258 28.2914 34.2348 28.5813 33.4328 28.5813C32.5715 28.5813 31.7014 28.2474 31.0378 27.5842L28.8538 25.4012L31.0378 23.2182C32.3188 21.9378 34.3798 21.8829 35.63 23.0952C36.2606 23.7057 36.6078 24.5249 36.6078 25.4012C36.6078 26.2775 36.2606 27.0966 35.63 27.7072V27.705Z" fill="#313139" />
                                </svg>
                            </div>

                            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '60s' }}>
                                <div className="absolute" style={{ top: 'calc(50% - 100px)', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF9898, #8054FF)' }}></div>
                                </div>
                            </div>

                            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}>
                                <div className="absolute" style={{ top: '50%', left: 'calc(50% - 150px)', transform: 'translate(-50%, -50%)' }}>
                                    <img src="https://res.cloudinary.com/dlvjrvhak/image/upload/v1766143036/Ellipse_11_tu3gpd.png" alt="Orbit" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                                </div>
                            </div>

                            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '50s' }}>
                                <div className="absolute" style={{ top: '50%', left: 'calc(50% + 150px)', transform: 'translate(-50%, -50%)' }}>
                                    <img src="https://res.cloudinary.com/dlvjrvhak/image/upload/v1766143035/Ellipse_9_mfpzuo.png" alt="Orbit" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                                </div>
                            </div>

                            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '55s', animationDirection: 'reverse' }}>
                                <div className="absolute" style={{ top: 'calc(50% + 200px)', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                    <img src="https://res.cloudinary.com/dlvjrvhak/image/upload/v1766143036/Ellipse_10_gkfkcd.png" alt="Orbit" style={{ width: '35px', height: '35px', objectFit: 'contain' }} />
                                </div>
                            </div>

                            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '40s' }}>
                                <div className="absolute" style={{ top: 'calc(50% + 141px)', left: 'calc(50% + 141px)', transform: 'translate(-50%, -50%)' }}>
                                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'linear-gradient(135deg, #A855F7, #EC4899)' }}></div>
                                </div>
                            </div>

                            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '70s', animationDirection: 'reverse' }}>
                                <div className="absolute" style={{ top: 'calc(50% - 141px)', left: 'calc(50% + 141px)', transform: 'translate(-50%, -50%)' }}>
                                    <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'linear-gradient(135deg, #8054FF, #FF9898)' }}></div>
                                </div>
                            </div>
                        </div>

                        <motion.div 
                            className="max-w-xl order-1 lg:order-2 text-center lg:text-left"
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                                We're here to guide and help you at all times
                            </h2>
                            <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
                            </p>
                            <motion.button 
                                className="gradient-button px-8 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Download
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="relative" style={{backgroundColor: '#18181C', width: '100%', paddingTop: '60px', paddingBottom: '180px'}}>
                
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2 
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        Companies we Worked<br />With in Since 2015
                    </motion.h2>
                    
                    <motion.div 
                        className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div variants={fadeInUp} className="px-6 py-3 rounded-lg bg-neutral-950 text-gray-400 font-medium italic">Smile</motion.div>
                        <motion.div variants={fadeInUp} className="px-6 py-3 rounded-lg bg-neutral-950 text-gray-400 font-bold">Urban</motion.div>
                        <motion.div variants={fadeInUp} className="px-6 py-3 rounded-lg bg-neutral-950 text-gray-400 font-medium">natural</motion.div>
                        <motion.div variants={fadeInUp} className="px-6 py-3 rounded-lg bg-neutral-950 text-gray-400 font-bold tracking-wider">WAVE</motion.div>
                        <motion.div variants={fadeInUp} className="px-6 py-3 rounded-lg bg-neutral-950 text-gray-400 font-medium italic">HAPPY</motion.div>
                        <motion.div variants={fadeInUp} className="px-6 py-3 rounded-lg bg-neutral-950 text-gray-400 font-medium italic">Alisa</motion.div>
                    </motion.div>
                </div>
            </section>

            <div className="relative" style={{marginTop: '-120px', marginBottom: '-120px', zIndex: 10}}>
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div 
                        className="relative overflow-hidden" 
                        style={{
                            background: 'linear-gradient(135.66deg, #FF9898 14.73%, #8054FF 86.33%)',
                            width: '100%',
                            maxWidth: '1110px',
                            minHeight: '300px',
                            borderRadius: '20px',
                            margin: '0 auto'
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="relative z-10 p-6 sm:p-8 lg:p-12">
                            <p className="text-white/80 text-xs sm:text-sm mb-2">Love our Our Tool?</p>
                            <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                                Feel Free to Join our<br />15 Days Free Trial
                            </h3>
                            <motion.button 
                                className="px-6 py-3 rounded-lg bg-black/30 text-white font-medium hover:bg-black/40 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Download Template
                            </motion.button>
                        </div>
                        
                        <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center">
                            <img 
                                src="/wireframe-globe.svg" 
                                alt="Wireframe" 
                                className="w-full h-full object-contain opacity-50"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            <section className="relative pt-48 sm:pt-60 lg:pt-72 pb-16 sm:pb-24" style={{backgroundColor: '#0a0a0a'}}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                        <motion.div 
                            className="relative hidden lg:block" 
                            style={{width: '100%', maxWidth: '542px', height: 'auto', flexShrink: 0}}
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img 
                                src="/group-133.png" 
                                alt="Wireframe Globe" 
                                className="w-full h-full object-contain"
                                style={{
                                    opacity: 1
                                }}
                            />
                        </motion.div>
                        
                        <motion.div 
                            className="flex-1 w-full max-w-md"
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                            <p className="text-gray-400 mb-8 text-sm">
                                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
                            </p>
                            
                            <form className="space-y-4">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                />
                                <textarea
                                    placeholder="Name"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                ></textarea>
                                <motion.button
                                    type="submit"
                                    className="gradient-button px-8 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send Now
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <motion.footer 
                style={{ width: '100%', minHeight: '360px', height: 'auto', position: 'relative' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <div style={{ 
                    backgroundColor: '#18181C', 
                    minHeight: '268px',
                    width: '100%',
                    position: 'relative',
                    paddingBottom: '2rem'
                }}>
                    <div className="max-w-7xl mx-auto px-4 pt-8 sm:pt-14">
                        <div className="flex flex-col sm:flex-row justify-between gap-8">
                            <div style={{ maxWidth: '303px', width: '100%' }}>
                                <svg width="32" height="26" viewBox="0 0 41 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 sm:mb-6 sm:w-[41px] sm:h-[33px]">
                                    <path d="M38.6885 19.9414C35.7245 17.0666 30.8972 17.1435 27.9288 20.1105L25.7447 22.2936L23.6091 20.1589L27.6673 16.1025C31.1543 12.6171 31.1543 6.94436 27.6673 3.459L26.8258 2.61786C25.1339 0.92899 22.8884 0 20.5 0C18.1116 0 15.8639 0.92899 14.1764 2.61786L13.3349 3.459C9.84791 6.94436 9.84791 12.6171 13.3349 16.1025L17.3931 20.1589L15.2574 22.2936L12.9855 20.0227C11.5024 18.5403 9.55568 17.8001 7.60675 17.8001C5.65782 17.8001 3.71109 18.5403 2.22797 20.0227C0.790997 21.4612 0 23.3697 0 25.4012C0 27.4327 0.790997 29.3411 2.22797 30.7775C3.66275 32.2116 5.57213 33 7.60675 33C9.64137 33 11.5507 32.2116 12.9855 30.7775L15.2574 28.5066L17.5843 30.8368C18.3621 31.6142 19.3948 32.0447 20.4956 32.0447C21.5964 32.0447 22.6313 31.6164 23.4091 30.8389L25.7447 28.5044L27.9288 30.6874C29.3965 32.1545 31.352 32.9627 33.4328 32.9627C35.5136 32.9627 37.2867 32.2138 38.6885 30.8565C40.1782 29.4114 41 27.4722 41 25.399C41 23.3258 40.1782 21.3865 38.6885 19.9414ZM9.87867 27.6698C9.27224 28.276 8.46586 28.6076 7.60675 28.6076C6.74764 28.6076 5.94126 28.2738 5.33483 27.6698C4.7284 27.0659 4.39443 26.2577 4.39443 25.399C4.39443 24.5403 4.7284 23.7343 5.33483 23.1281C5.94126 22.522 6.74764 22.1881 7.60675 22.1881C8.46586 22.1881 9.27224 22.522 9.87867 23.1281L12.1506 25.399L9.87867 27.6698ZM20.4978 27.5381L19.7156 26.7562L18.3621 25.4012L20.4758 23.2862L20.6516 23.4202L22.6313 25.399L20.4934 27.5359L20.4978 27.5381ZM21.9875 15.5688L20.5022 17.0534L16.4439 12.9971C14.6708 11.2247 14.6708 8.33895 16.4439 6.56442L17.2855 5.72328C18.1446 4.86457 19.2871 4.39019 20.5022 4.39019C21.7173 4.39019 22.8598 4.86237 23.7189 5.72328L24.5604 6.56442C26.3336 8.33675 26.3336 11.2225 24.5604 12.9971L21.9875 15.5688ZM35.63 27.705C35.0258 28.2914 34.2348 28.5813 33.4328 28.5813C32.5715 28.5813 31.7014 28.2474 31.0378 27.5842L28.8538 25.4012L31.0378 23.2182C32.3188 21.9378 34.3798 21.8829 35.63 23.0952C36.2606 23.7057 36.6078 24.5249 36.6078 25.4012C36.6078 26.2775 36.2606 27.0966 35.63 27.7072V27.705Z" fill="white" />
                                </svg>
                                <p style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '28px',
                                    color: '#9E9E9E'
                                }}>
                                    A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
                                </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-8 sm:gap-12 lg:gap-20">
                                <div>
                                    <h4 style={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontWeight: 600,
                                        fontSize: '16px',
                                        lineHeight: '32px',
                                        color: '#FFFFFF',
                                        marginBottom: '8px'
                                    }}>Sections</h4>
                                    <div style={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        lineHeight: '38px',
                                        color: '#9E9E9E'
                                    }}>
                                        <div>Home</div>
                                        <div>Section One</div>
                                        <div>Section Two</div>
                                        <div>Section Tree</div>
                                    </div>
                                </div>
                                
                                <div style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '38px',
                                    color: '#9E9E9E',
                                    paddingTop: '40px'
                                }}>
                                    <div>Home</div>
                                    <div>Section One</div>
                                    <div>Section Two</div>
                                    <div>Section Tree</div>
                                </div>
                                
                                <div style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '38px',
                                    color: '#9E9E9E',
                                    paddingTop: '40px'
                                }}>
                                    <div>Home</div>
                                    <div>Section One</div>
                                    <div>Section Two</div>
                                    <div>Section Tree</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style={{ 
                    backgroundColor: '#000000', 
                    minHeight: '92px',
                    width: '100%',
                    padding: '1.5rem 0'
                }}>
                    <div className="max-w-7xl mx-auto px-4 h-full flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '28px',
                            color: '#9E9E9E'
                        }}>
                            All Rights Reservd Inkyy.com 2022
                        </p>
                        
                        <div className="flex gap-3">
                            <div style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#18181C',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <svg width="18" height="15" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.533 5.11c.015.213.015.426.015.64 0 6.507-4.954 14.003-14.003 14.003v-.004A13.94 13.94 0 0 1 0 17.538a9.88 9.88 0 0 0 7.29-2.04 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 7.12v-.063a4.9 4.9 0 0 0 2.235.616A4.93 4.93 0 0 1 1.67 1.1a13.98 13.98 0 0 0 10.15 5.15 4.929 4.929 0 0 1 8.396-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 2.555a10.019 10.019 0 0 1-2.467 2.555Z" fill="white"/>
                                </svg>
                            </div>
                            
                            <div style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#18181C',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="white"/>
                                </svg>
                            </div>
                            
                            <div style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#18181C',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <svg width="18" height="14" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.317 1.492a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 1.492a.07.07 0 0 0-.032.027C.533 6.093-.32 10.555.099 14.961a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.009c.12.099.245.198.372.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.029 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 12.278c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.footer>
        </div>
    );
}
