"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import udemy from "../../public/assets/udemy.png"
import fiverr from "../../public/assets/fiverr.png"
import elementor from "../../public/assets/elementor.png"
import logitech from "../../public/assets/logitech.png"
import oracle from "../../public/assets/oracle.png"

const images = [
    { src: udemy, alt: "figma" },
    { src: fiverr, alt: "fiverr" },
    { src: elementor, alt: "elementor" },
    { src: logitech, alt: "logitech" },
    { src: oracle, alt: "oracle" },
    { src: udemy, alt: "figma" },
    { src: fiverr, alt: "fiverr" },
    { src: elementor, alt: "elementor" },
    { src: logitech, alt: "logitech" },
    { src: oracle, alt: "oracle" },
    { src: udemy, alt: "figma" },
    { src: fiverr, alt: "fiverr" },
    { src: elementor, alt: "elementor" },
    { src: logitech, alt: "logitech" },
    { src: oracle, alt: "oracle" },
    { src: udemy, alt: "figma" },
    { src: fiverr, alt: "fiverr" },
    { src: elementor, alt: "elementor" },
    { src: logitech, alt: "logitech" },
    { src: oracle, alt: "oracle" },
]

export const LogoAnimation = () => {
    return (
        <div className="py-8 my-24 bg-purple-300/10 skew-y-3 opacity-80 glass">
            <div className="container mx-auto">
                <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
                    <motion.div
                        className="flex gap-14 flex-none pr-14"
                        animate={{
                            translateX: '-50%',
                        }}
                        transition={{
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                    >
                        {images.map((image, index) => (
                            image.src ? (
                                <Image
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    height={30}
                                />
                            ) : (
                                <div
                                    key={index}
                                    className="flex items-center justify-center h-8 w-24 bg-gray-300 text-gray-600"
                                >
                                    LOGO
                                </div>
                            )
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
