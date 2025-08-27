import { Users, Euro, FlaskConical, MapPin } from 'lucide-react';
import SectionHeader from '../section-header';

const BoschStats = () => {
    return (
        <section id='achievements'>
            <SectionHeader className='mb-10'>Achivements</SectionHeader>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-6  py-16 ">
                    <Users className="w-8 h-8 text-blue-600 mb-2" />
                <div className="text-4xl font-bold text-blue-600">417,900</div>
                <div className="text-sm text-gray-600 text-center">
                    associates worldwide
                </div>
            </div>
            <div className="flex flex-col items-center p-6  py-16 ">
                <Euro className="w-8 h-8 text-green-600 mb-2" />
                <div className="text-4xl font-bold text-green-600">90.3</div>
                <div className="text-sm text-gray-600 text-center">
                    billion euros sales revenue
                </div>
            </div>
            <div className="flex flex-col items-center p-6  py-16 ">
                    <FlaskConical className="w-8 h-8 text-purple-600 mb-2" />
                <div className="text-4xl font-bold text-purple-600">86,800</div>
                <div className="text-sm text-gray-600 text-center">
                    associates in research and development
                </div>
            </div>
            <div className="flex flex-col items-center p-6  py-16 ">
                    <MapPin className="w-8 h-8 text-yellow-600 mb-2" />
                <div className="text-4xl font-bold text-yellow-600">150+</div>
                <div className="text-sm text-gray-600 text-center">
                    locations globally
                </div>
            </div>
        </div>
        </section>
    );
};

export default BoschStats;