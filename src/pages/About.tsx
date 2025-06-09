// About.tsx - Dark Theme Matching
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
<div className="bg-gray-900 text-gray-100 min-h-screen px-6 py-12 space-y-12">
  <section className="text-center space-y-2">
    <img src="/images/profile.jpg" className="mx-auto rounded-full w-32 h-32 shadow-lg" />
    <h1 className="text-3xl font-extrabold tracking-tight">Hyeonuk Nam</h1>
    <p className="text-indigo-400 italic">Researcher · Musician · Guitar Luthier</p>
  </section>


        {/* Introduction */}
        <section className="bg-gray-800/80 p-6 rounded-xl shadow-md backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-indigo-300 mb-4">Origin</h2>
          <p className="text-gray-300">
            Since childhood, I loved building things with my hands—like Lego. In elementary school, I enjoyed solving math problems. In middle and high school, I fell in love with the guitar. Naturally, I became passionate about both making and music, which led me to mechanical engineering and acoustics.
          </p>
        </section>

        {/* Development */}
        <section className="bg-gray-800/80 p-6 rounded-xl shadow-md backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-pink-300 mb-4">Growth</h2>
          <p className="text-gray-300">
            During high school, I started arranging music for my band and soon moved on to writing my own songs. My passion for guitar and making things evolved into guitar building, which eventually guided me to acoustic science and auditory intelligence research.
          </p>
        </section>

        {/* Turning Point */}
        <section className="bg-gray-800/80 p-6 rounded-xl shadow-md backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Struggles and Transformation</h2>
          <p className="text-gray-300">
            I faced burnout multiple times during research, but I always recovered through creative work—composing albums and crafting guitars. To me, research and creation aren’t separate; they’re complementary currents.
          </p>
        </section>

        {/* Conclusion */}
        <section className="bg-gray-800/80 p-6 rounded-xl shadow-md backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-green-300 mb-4">Vision</h2>
          <p className="text-gray-300">
            Today, I am a <strong className="text-white">philosopher and creator of sound</strong>. Mechanics and music, math and emotion, research and art—they all flow together.
            <br /><br />
            I aim to <strong className="text-white">redefine how machines perceive sound</strong> through auditory intelligence,
            <br />
            <strong className="text-white">design the physical embodiment of tone</strong> through guitar building,
            <br />
            and <strong className="text-white">spread my philosophy through music</strong>.
            <br /><br />
            Everything I do points in one direction:
            <br />
            <em className="text-indigo-400">“Through sound, we connect more deeply.”</em>
            <br /><br />
            I will keep thinking, creating, and expanding the boundaries of knowledge—through sound.
          </p>
        </section>

  <div className="text-center pt-6">
    <Link to="/" className="text-indigo-400 hover:underline text-sm">← Back to Home</Link>
  </div>
</div>

  );
}
