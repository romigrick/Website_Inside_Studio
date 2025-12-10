import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { TEAM_MEMBERS } from '../data';

const Team = () => (

  <div className="container mx-auto px-6 min-h-screen relative z-10">
    <div className="mb-20 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Quem Somos</h1>
      <p className="text-xl text-neutral-400">Mentes criativas por trás da mágica.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {TEAM_MEMBERS.map((member, i) => (
        <div key={i} className="group">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div className="flex gap-4 text-white">
                <Linkedin size={20} className="hover:text-blue-400 cursor-pointer transition-colors"/>
                <Instagram size={20} className="hover:text-pink-400 cursor-pointer transition-colors"/>
              </div>
            </div>
          </div>
          <h3 className="text-xl font-bold text-white">{member.name}</h3>
          <p className="text-blue-500 text-sm font-medium uppercase tracking-wider">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Team;