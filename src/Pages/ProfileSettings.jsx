import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SettingsModal from '../Components/SettingsModal';

export default function ProfileSettings() {
    const [isOpen, setIsOpen] = useState(false);
    const { name, email, currency, alert } = useSelector((state) => state.settingsInfo);

    return (
        <>
    <h1 className="text-3xl font-bold mt-10 text-gray-100 text-center">
        Profile Settings
      </h1>
            <div className={`${isOpen ? 'hidden' : ''} max-w-lg min-h-md my-10 mx-auto bg-gray-900 shadow-xl rounded-2xl overflow-hidden p-6 text-center text-gray-200 border border-gray-700 transition-all`}>
                
                <div className="flex justify-center mb-4">
                    <img
                        src={`https://ui-avatars.com/api/?name=${name}&background=random`}
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg"
                    />
                </div>

                <h2 className="text-2xl font-bold text-gray-100">{name}</h2>
                <p className="text-gray-400">{email}</p>

                <div className="mt-4 text-lg space-y-2">
                    <p className="text-gray-300 font-medium">
                        Currency: <span className="text-blue-400">{currency}</span>
                    </p>
                    <p className="text-gray-300 font-medium">
                        Notifications: 
                        <span className={`ml-2 font-semibold ${alert ? 'text-green-400' : 'text-red-400'}`}>
                            {alert ? 'Enabled' : 'Disabled'}
                        </span>
                    </p>
                </div>

                <button
                    onClick={() => setIsOpen(true)}
                    className="mt-5 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
                >
                    Edit Profile
                </button>
            </div>

            {isOpen && <SettingsModal setIsOpen={setIsOpen} />}
        </>
    );
}
