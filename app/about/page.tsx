'use client';
import Image from 'next/image';
import { Shield, Target, Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/aboutpage/about_us_bg.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-cyan-900/60 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl uppercase tracking-tight">
            We are committed to finding the optimal solution for your project
          </h1>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-lg max-w-4xl mx-auto font-light">
            Our mission, vision, and values establish a common culture and demonstrate what is most important for us as a company.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-32">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            ABOUT US
          </div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-5xl">
            Blu Subsea are a leading provider of diving, ROV, marine and civil works.
            Based in the Middle East, Blu Subsea are strategically located to provide their turnkey services to the global market.
            We provide innovative technologies and services to complete the toughest subsea and civils projects.
            We are committed to finding the optimal solution for your project.
            Our mission, vision, and values establish a common culture and demonstrate what is most important for us as a company.
          </p>
        </div>

        <div className="mb-32">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              OUR FOUNDATION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Mission, Vision & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our every decision and action
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full -mr-20 -mt-20 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Satisfy our customers by providing safe, cost-effective, and quality solutions for their subsea needs.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full -mr-20 -mt-20 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Creating technical solutions for the most complex operational challenges under water.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-100 to-green-100 rounded-full -mr-20 -mt-20 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Values</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Safety, Accountability, Respect & Ethics, Operational Excellence.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              WHAT DRIVES US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The unwavering commitments that define how we work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-3xl p-10 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-8 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Safety</h3>
                <p className="text-blue-50 text-lg leading-relaxed">
                  Provide a safe work environment for our employees and partners.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl p-10 bg-gradient-to-br from-emerald-500 via-green-600 to-green-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-8 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Accountability</h3>
                <p className="text-green-50 text-lg leading-relaxed">
                  For the commitments we make to our partners.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl p-10 bg-gradient-to-br from-cyan-400 via-cyan-600 to-blue-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-8 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Respect & Ethics</h3>
                <p className="text-cyan-50 text-lg leading-relaxed">
                  Ensure that respect and ethics are at the heart of all we do.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl p-10 bg-gradient-to-br from-teal-500 via-teal-700 to-teal-900 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-8 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Operational Excellence</h3>
                <p className="text-teal-50 text-lg leading-relaxed">
                  To be provided to our clients and partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
