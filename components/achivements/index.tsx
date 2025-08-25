import { Users, Euro, FlaskConical, MapPin } from 'lucide-react';
import SectionHeader from '../section-header';

const BoschStats = () => {
    return (
        <section id='achievements'>
            <SectionHeader className='mb-10'>Achivements</SectionHeader>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-6 bg-gray-200 py-16 rounded-md shadow-sm">
                <Users className="w-8 h-8 text-gray-700 mb-2" />
                <div className="text-xl font-bold text-gray-900">417,900</div>
                <div className="text-sm text-gray-600 text-center">
                    associates worldwide
                </div>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-200 py-16 rounded-md shadow-sm">
                <Euro className="w-8 h-8 text-gray-700 mb-2" />
                <div className="text-xl font-bold text-gray-900">90.3</div>
                <div className="text-sm text-gray-600 text-center">
                    billion euros sales revenue
                </div>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-200 py-16 rounded-md shadow-sm">
                <FlaskConical className="w-8 h-8 text-gray-700 mb-2" />
                <div className="text-xl font-bold text-gray-900">86,800</div>
                <div className="text-sm text-gray-600 text-center">
                    associates in research and development
                </div>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-200 py-16 rounded-md shadow-sm">
                <MapPin className="w-8 h-8 text-gray-700 mb-2" />
                <div className="text-xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600 text-center">
                    locations globally
                </div>
            </div>
        </div>
        </section>
    );
};

export default BoschStats;