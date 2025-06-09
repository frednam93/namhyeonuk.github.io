import React from "react";
import { Link } from "react-router-dom";

export default function Guitars() {
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-100 bg-gray-900 min-h-screen">
      <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-center text-green-300">🎸 Handcrafted Guitars</h2>
      <p className="text-lg text-center text-gray-400 mb-10">
        Every guitar I build carries a unique story, tone, and intention. I am a tele-lover who likes to experiment with my hand-made guitars.
      </p>

      <div className="space-y-6">
        <div className="border-l-4 border-green-500 bg-gray-800/80 p-4 rounded shadow-sm">
          <h3 className="text-xl font-semibold text-green-300">Pitell <span className="text-sm text-green-400">(Done)</span></h3>
          <p className="text-sm text-gray-300 mb-4">
            Swamp ash Tele. Maple neck, rosewood fingerboard. Tung oil finish. P90 neck & Tele bridge pickup. Kill switch, Bigsby, custom head.
          </p>
          <img
            src="/images/pitell.jpg"
            alt="Petell Guitar"
            className="rounded-lg shadow-md border border-gray-700"
          />
        </div>

        <div className="border-l-4 border-blue-500 bg-gray-800/80 p-4 rounded shadow-sm">
          <h3 className="text-xl font-semibold text-blue-300">Stell <span className="text-sm text-blue-400">(In progress)</span></h3>
          <p className="text-sm text-gray-300">
            Tele-pickguarded Strat. Alder body, maple neck/fingerboard. Dark blue finish. 3 Strat pickups, hardtail bridge, custom head.
          </p>
        </div>

        <div className="border-l-4 border-yellow-500 bg-gray-800/80 p-4 rounded shadow-sm">
          <h3 className="text-xl font-semibold text-yellow-300">Nutell <span className="text-sm text-yellow-400">(Planned)</span></h3>
          <p className="text-sm text-gray-300">
            Humbucker Tele. Walnut body/neck, rosewood fingerboard. Gold hardware, custom head.
          </p>
        </div>

        <div className="border-l-4 border-purple-500 bg-gray-800/80 p-4 rounded shadow-sm">
          <h3 className="text-xl font-semibold text-purple-300">Doup <span className="text-sm text-purple-400">(Planned)</span></h3>
          <p className="text-sm text-gray-300">
            Bass with Tele-style pickguard. Double Precision pickups. Custom head design.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link to="/" className="text-sm text-green-400 hover:text-green-300 underline">← Back to Home</Link>
      </div>
    </div>
  );
}
