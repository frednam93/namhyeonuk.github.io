// Music.tsx - Dark Themed Music Section
import React from "react";
import { Link } from "react-router-dom";

export default function Music() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-100 bg-gray-900 min-h-screen">
      <h2 className="text-4xl font-extrabold tracking-tight mb-6 text-center text-pink-300">🎵 Music Projects</h2>
      <p className="text-lg text-center text-gray-400 mb-10">
        I create and perform indie rock music, blending psychedelic, disco, and garage styles.
      </p>

      <ul className="space-y-4">
        <li className="bg-gray-800 border-l-4 border-pink-400 p-4 rounded shadow-sm hover:shadow-md transition-shadow">
          <strong>Nam Heeon (Solo)</strong> — <em>Psychedelic Disco - A Flowing Life</em> (EP Album)<br />
          <a
            href="https://music.youtube.com/playlist?list=OLAK5uy_kqy--hJp2od2hWdz1cuLb5xth_OPH4R7I&si=6WUOElBIpTEaUAbJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-300 underline text-sm"
          >
            ▶ Listen on YouTube Music
          </a>
        </li>

        <li className="bg-gray-800 border-l-4 border-green-400 p-4 rounded shadow-sm hover:shadow-md transition-shadow">
          <strong>Nam Heeon (Solo)</strong> — <em>Freedom</em> (10-song full album in production)
        </li>

        <li className="bg-gray-800 border-l-4 border-purple-400 p-4 rounded shadow-sm hover:shadow-md transition-shadow">
          <strong>Oyan (Band)</strong> — <em>Wooyadongdong</em> (Single)<br />
          <a
            href="https://music.youtube.com/playlist?list=OLAK5uy_kc2L_5CY89fZ2pw5LstzUg4w86WYER_Hs&si=CWLx7AQUSzN_nINR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 underline text-sm"
          >
            ▶ Listen on YouTube Music
          </a>
        </li>

        <li className="bg-gray-800 border-l-4 border-blue-400 p-4 rounded shadow-sm hover:shadow-md transition-shadow">
          <strong>Oyan (Band)</strong> — Preparing full album + <span className="font-bold">live show at Rolling Hall</span> on <strong>Nov 1st</strong>
        </li>

        <li className="bg-gray-800 border-l-4 border-yellow-400 p-4 rounded shadow-sm hover:shadow-md transition-shadow">
          Preparing a <strong>new band</strong> project with new members
        </li>
      </ul>

      <div className="mt-10 text-center space-y-4">
        <Link to="/" className="text-sm text-pink-300 hover:underline block">← Back to Home</Link>
        <a
          href="https://www.youtube.com/@acousticsouth"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-pink-200 underline block"
        >
          ▶ Visit My YouTube Channel
        </a>
      </div>
    </div>
  );
}