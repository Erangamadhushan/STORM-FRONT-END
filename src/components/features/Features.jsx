import { HeartPulse, ChartNoAxesCombined, Waypoints, Bed } from 'lucide-react'
import React from 'react'

export const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20" id="users-manual">
      <div className="text-center">
        <h2 className="text-2xl font-bold md:text-4xl">Powerful <span className='text-lime-500'>health</span> features</h2>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="p-5 flex gap-4">
            <div>
              <HeartPulse className="text-red-600 bg-gray-800 rounded-full p-1" size={35} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Heart Health Notification</h3>
              <p>Get instant notifications about severe weather conditions to keep you safe and informed.</p>
            </div>
          </div>
          <div className="p-5 flex gap-4">
            <div>
              <ChartNoAxesCombined className="text-green-600 bg-gray-800 rounded-full p-1" size={35}/> 
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">ECG</h3>
              <p>The ECG app can record your heartbeat and rhythm using the electrical heart sensors.</p>
            </div>
          </div>
        </div>
        <div>
          <img src="digital-watch-main.png" alt="digital-watch-type-10" className="w-64 mx-auto"/>
        </div>
        <div>
          <div className="p-5 flex gap-4">
            <div>
              <Waypoints className="text-blue-600 bg-gray-800 rounded-full p-1" size={35} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Blood Oxygen</h3>
              <p>Get readings of your blood oxygen for insights into an important indicator at your overall wellness</p>
            </div>
          </div>
          <div className="p-5 flex gap-4">
            <div>
              <Bed className="text-red-800 bg-gray-800 rounded-full p-1" size={35} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Sleep Tracking</h3>
              <p>Keep track of your sleep. See how much time you spend in three sleep stages: REM, Core, and Deep</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
