import React from 'react'

export const FilterItems = ({ filterByType }) => {
  return (
    <div className="border border-gray-700 rounded-lg p-4 sticky top-20">
        <h2 className="text-xl font-semibold mb-4">Filter by Type</h2>
        <ul className="space-y-2">
            <li><button onClick={() => filterByType('All')}  className="w-full text-left hover:underline">All</button></li>
            <li><button onClick={() => filterByType('dive watch')} className="w-full text-left hover:underline">Dive Watch</button></li>
            <li><button onClick={() => filterByType('chronograph')} className="w-full text-left hover:underline">Chronograph</button></li>
            <li><button onClick={() => filterByType('racing chronograph')} className="w-full text-left hover:underline">Racing Chronograph</button></li>
            <li><button onClick={() => filterByType('dress watch')} className="w-full text-left hover:underline">Dress Watch</button></li>
            <li><button onClick={() => filterByType('eco-drive')} className="w-full text-left hover:underline">Eco-Drive</button></li>
            <li><button onClick={() => filterByType('aviation chronograph')} className="w-full text-left hover:underline">Aviation Chronograph</button></li>
            <li><button onClick={() => filterByType('digital sport')} className="w-full text-left hover:underline">Digital Sport</button></li>
            <li><button onClick={() => filterByType('casual watch')} className="w-full text-left hover:underline">Casual Watch</button></li>
            <li><button onClick={() => filterByType('automatic')} className="w-full text-left hover:underline">Automatic</button></li>
            <li><button onClick={() => filterByType('fashion watch')} className="w-full text-left hover:underline">Fashion Watch</button></li>
            <li><button onClick={() => filterByType('field watch')} className="w-full text-left hover:underline">Field Watch</button></li>
            <li><button onClick={() => filterByType('automatic dress')} className="w-full text-left hover:underline">Automatic Dress</button></li>
        </ul>
    </div>
  )
}
