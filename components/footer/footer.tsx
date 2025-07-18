import React from 'react';
import {
    Linkedin,
    Youtube,
    Facebook,
    Instagram,
    Twitter,
    ExternalLink,
    ChevronUp
} from 'lucide-react';
import BackToTopBtn from '../back-to-top-btn';

const Footer = () => {
    return (<>

        <footer className="bg-gray-800 text-white py-8 md:py-12 px-8 md:px-20 xl:px-[40rem]">
            {/* Top section with logo and social icons */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                    <h2 className="text-2xl font-medium">Sáng tạo vì cuộc sống</h2>
                </div>

                <div className="flex items-center space-x-6 mt-4 md:mt-0">
                    <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" aria-label="YouTube" className="hover:text-gray-300">
                        <Youtube size={20} />
                    </a>
                    <a href="#" aria-label="Facebook" className="hover:text-gray-300">
                        <Facebook size={20} />
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-gray-300">
                        <Instagram size={20} />
                    </a>
                    <a href="#" aria-label="Twitter" className="hover:text-gray-300">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>

            {/* Middle section with links */}
            <div className="mb-8">
                <ul className="flex flex-wrap gap-6 md:gap-8">
                    <li>
                        <a href="#" className="hover:underline">
                            Thông tin liên hệ chung
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline flex items-center">
                            Giấy phép và bằng sáng chế
                            <ExternalLink size={16} className="ml-1" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline flex items-center">
                            Mua hàng và hậu cần
                            <ExternalLink size={16} className="ml-1" />
                        </a>
                    </li>
                </ul>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-600 mb-8 relative">
                <BackToTopBtn />
            </div>

            {/* Bottom section with copyright and legal links */}
            <div className="flex flex-wrap flex-col-reverse gap-y-4 text-xs text-gray-300">
                <div className="w-full md:w-auto md:mr-8">
                    © Công ty TNHH Bosch Việt Nam 2025, tất cả các quyền được đăng ký
                </div>
                <div className="flex flex-wrap flex-col md:flex-row gap-2 md:gap-x-6">
                    <a href="#" className="hover:underline whitespace-nowrap">
                        Điều khoản sử dụng
                    </a>
                    <a href="#" className="hover:underline whitespace-nowrap">
                        Thông báo pháp lý
                    </a>
                    <a href="#" className="hover:underline whitespace-nowrap">
                        Điều khoản về Quyền riêng tư
                    </a>
                    <a href="#" className="hover:underline whitespace-nowrap">
                        Cài đặt về Quyền riêng tư
                    </a>
                </div>
            </div>
        </footer>
    </>
    );
};

export default Footer;