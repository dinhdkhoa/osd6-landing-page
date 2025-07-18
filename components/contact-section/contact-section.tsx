import React from 'react';
import { Linkedin, Facebook, Twitter, ChevronRight, ExternalLink } from 'lucide-react';

const ContactSection = () => {
    return (
        <div className="py-6 lg:py-12 md:px-20 xl:px-[10rem]">
            {/* Contact section */}
            <div className="bg-gray-100 mb-10 lg:mb-20">
                <div className="flex flex-col md:flex-row md:py-10 md:px-12">
                    {/* Left column */}
                    <div className="p-8 md:w-1/2">
                        <h2 className="text-2xl font-bold mb-4">Liên hệ với Bosch</h2>
                        <p className="text-gray-700 mb-6">
                            Chúng tôi mong nhận được phản hồi của bạn
                        </p>

                        <div className="flex items-center space-x-4">
                            <a href="#" aria-label="LinkedIn" className="hover:text-gray-600">
                                <Linkedin size={20} className='text-foreground hover:text-bosch_blue' />
                            </a>
                            <a href="#" aria-label="Facebook" className="hover:text-gray-600">
                                <Facebook size={20} className='text-foreground hover:text-bosch_blue' />
                            </a>
                            <a href="#" aria-label="Twitter" className="hover:text-gray-600">
                                <Twitter size={20} className='text-foreground hover:text-bosch_blue' />
                            </a>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="p-8 md:w-1/2 ">
                        <h2 className="text-2xl font-bold mb-6">Gửi tin nhắn cho chúng tôi</h2>
                        <a href="#" className="text-blue-600 flex items-center hover:underline">
                            Đến trang biểu mẫu
                            <ChevronRight size={16} className="ml-1" />
                        </a>
                    </div>
                </div>
            </div>
            <ActionCard />
        </div>
    );
};

const ActionCard = () => {
    return <>
        <div className="lg:mt-8 grid md:grid-cols-2 gap-10 px-8 md:px-0">

            <div className="bg-bosch_blue text-white p-8 hover:bg-[#00578d]" >
                <h2 className="text-xl lg:text-3xl font-bold mb-1 ">Tìm kiếm công việc?</h2>
                <h2 className="text-xl lg:text-3xl font-bold mb-6">Ứng tuyển ngay.</h2>
                <a href="#" className="text-white flex items-center hover:underline">
                    Cơ hội nghề nghiệp tại Bosch
                    <ChevronRight size={16} className="ml-1" />
                </a>
            </div>

            <div className="bg-bosch_blue text-white px-8 pt-8 pb-8 lg:pb-40 hover:bg-[#00578d]" >
                <h2 className="text-xl lg:text-3xl font-bold mb-6 ">Trở thành một đối tác kinh doanh.</h2>
                {/* <h2 className="text-3xl font-bold mb-6">doanh.</h2> */}
                <a href="#" className="text-white flex items-center hover:underline">
                    Mua hàng và hậu cần
                    <ExternalLink size={16} className="ml-1" />
                </a>
            </div>
        </div ></>
}

export default ContactSection;