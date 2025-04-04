import Image from "next/image";
import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Profile() {
    return( 
            <div className="w-full bg-gray-100 flex flex-col items-center justify-center py-10">
                    <div className="w-25 h-25 rounded-full overflow-hidden">
                        <Image 
                            src="/assets/susan.jpg"
                            alt="My Picture"
                            width={70}
                            height={70}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                <h1 className="text-lg font-semibold mt-2 text-black flex items-center">
                    Sauzan Faza <span className="mx-2">|</span>
                    <span className="text-black">Frontend Developer</span>
                </h1>

                <div className="flex space-x-4 mt-2 text-2xl text-gray-600">
                <a href="https://instagram.com" target="_blank">
                    <FaInstagram className="hover:text-pink-500 transition duration-300" />
                </a>
                <a href="https://github.com" target="_blank">
                    <FaGithub className="hover:text-black transition duration-300" />
                </a>
                <a href="https://wa.me" target="_blank">
                    <FaWhatsapp className="hover:text-green-500 transition duration-300" />
                </a>
            </div>
            </div>
    )
}