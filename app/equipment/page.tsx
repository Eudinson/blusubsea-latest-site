'use client';
import { CheckCircle2 } from 'lucide-react';

const equipmentList = [
  'Diving Systems Incl. Decompression Chamber (DDC)',
  'Scuba Replacement Package (SRP)',
  'Modular Saturation Diving System',
  'Mini SRP',
  'Launch and Recovery System (LARS)',
  'Daughtercraft',
  '6m RHIB',
  'ROVs',
  'Subsea Dredge',
  'HP Water Jet',
  'Cavi Blasters',
  'Grit Blasting and Grouting Spreads',
  'Hydraulic and Pneumatic Tooling',
  'HPU\'s',
  'Generators',
  'HP & LP Compressors',
  'Modular Pontoons',
  'Lift bags and Rigging',
  'Metrology Jigs'
];

export default function Equipment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/equipment/equipment_bg.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-cyan-900/60 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl uppercase tracking-tight">
            Our Equipment
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-5 py-2.5 bg-white border border-blue-200 rounded-full text-sm font-semibold mb-8 shadow-sm">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
            <span className="bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">OUR EQUIPMENT INVENTORY</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight px-4">
            Blu Subsea owns and operates a range of <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">IMCA compliant Diving & Subsea equipment</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The list of equipment we utilize and that is available for hire is below
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50/30 to-teal-50 rounded-3xl blur-3xl opacity-40"></div>

          <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-200/60 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"></div>

            <div className="p-8 md:p-12">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Equipment List</h3>
                  <p className="text-sm text-gray-500 mt-1">{equipmentList.length} items available</p>
                </div>
                <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-blue-700">All Available</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                {equipmentList.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 md:p-5 rounded-xl bg-gradient-to-br from-gray-50 to-slate-50/50 hover:from-blue-50 hover:to-cyan-50/70 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md cursor-default"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600 group-hover:text-cyan-600 transition-colors duration-300" strokeWidth={2.5} />
                    </div>
                    <p className="text-sm md:text-base text-gray-800 font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-xl opacity-40"></div>
            <div className="relative px-8 md:px-12 py-8 md:py-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 shadow-2xl border border-blue-400/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-white rounded-full shadow-lg">
                <span className="text-xs font-bold text-blue-600">AVAILABLE NOW</span>
              </div>
              <p className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-3 tracking-tight">
                All Equipment Available for Hire
              </p>
              <p className="text-blue-50 text-base md:text-lg font-medium">
                IMCA compliant and ready for deployment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
