import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import bgImage from './assets/bg.png';

// Sparkle pattern as data URI for better compatibility
const sparklePattern = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3CradialGradient id='s1'%3E%3Cstop offset='0%25' style='stop-color:%23ffffff;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23a0c4ff;stop-opacity:0'/%3E%3C/radialGradient%3E%3CradialGradient id='s2'%3E%3Cstop offset='0%25' style='stop-color:%23d0e7ff;stop-opacity:0.8'/%3E%3Cstop offset='100%25' style='stop-color:%236b9bd1;stop-opacity:0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='20' cy='30' r='2' fill='url(%23s1)' opacity='0.9'/%3E%3Ccircle cx='180' cy='50' r='1.5' fill='url(%23s2)' opacity='0.7'/%3E%3Ccircle cx='100' cy='20' r='2.5' fill='url(%23s1)' opacity='0.8'/%3E%3Ccircle cx='150' cy='180' r='2' fill='url(%23s2)' opacity='0.9'/%3E%3Ccircle cx='40' cy='160' r='1.8' fill='url(%23s1)' opacity='0.6'/%3E%3Ccircle cx='60' cy='80' r='1.2' fill='url(%23s1)' opacity='0.7'/%3E%3Ccircle cx='140' cy='100' r='1' fill='url(%23s2)' opacity='0.8'/%3E%3Ccircle cx='90' cy='140' r='1.3' fill='url(%23s1)' opacity='0.6'/%3E%3Ccircle cx='170' cy='120' r='1.1' fill='url(%23s2)' opacity='0.7'/%3E%3Ccircle cx='30' cy='110' r='1.4' fill='url(%23s1)' opacity='0.8'/%3E%3Ccircle cx='120' cy='60' r='1' fill='url(%23s2)' opacity='0.6'/%3E%3Ccircle cx='50' cy='50' r='0.8' fill='url(%23s1)' opacity='0.5'/%3E%3Ccircle cx='130' cy='40' r='0.6' fill='url(%23s2)' opacity='0.6'/%3E%3Ccircle cx='80' cy='100' r='0.7' fill='url(%23s1)' opacity='0.7'/%3E%3Ccircle cx='160' cy='160' r='0.8' fill='url(%23s2)' opacity='0.5'/%3E%3Ccircle cx='70' cy='170' r='0.6' fill='url(%23s1)' opacity='0.6'/%3E%3Ccircle cx='110' cy='130' r='0.7' fill='url(%23s2)' opacity='0.7'/%3E%3Ccircle cx='190' cy='90' r='0.8' fill='url(%23s1)' opacity='0.5'/%3E%3Ccircle cx='10' cy='70' r='0.6' fill='url(%23s2)' opacity='0.6'/%3E%3Ccircle cx='145' cy='25' r='0.7' fill='url(%23s1)' opacity='0.7'/%3E%3Ccircle cx='25' cy='145' r='0.8' fill='url(%23s2)' opacity='0.5'/%3E%3C/svg%3E`;

const TeamDetailsPage = () => {
    const { teamName } = useParams();
    const navigate = useNavigate();

    const teamData = {
        'festhead': {
            title: 'FESTHEAD',
            profiles: [
                { name: 'Rahul Sharma', handle: 'rahul_sharma', avatarUrl: 'https://via.placeholder.com/400x600/1a1a2e/ffffff?text=Rahul' },
                { name: 'Priya Patel', handle: 'priya_patel', avatarUrl: 'https://via.placeholder.com/400x600/1a1a2e/ffffff?text=Priya' }
            ]
        },
        'sponsorship': {
            title: 'SPONSORSHIP',
            profiles: [
                { name: 'Amit Kumar', handle: 'amit_kumar', avatarUrl: 'https://via.placeholder.com/400x600/1a1a2e/ffffff?text=Amit' }
            ]
        },
        'collaboration': {
            title: 'COLLABORATION',
            profiles: [
                { name: 'Sneha Reddy', handle: 'sneha_reddy', avatarUrl: 'https://as2.ftcdn.net/v2/jpg/01/34/51/79/1000_F_134517966_TzOCj9dV5DLsPfQRFmjxkDKSDov5PQ1i.jpg' }
            ]
        },
        'automation': {
            title: 'AUTOMATION',
            profiles: [
                { name: 'Vikram Singh', handle: 'vikram_singh', avatarUrl: 'https://via.placeholder.com/400x600/1a1a2e/ffffff?text=Vikram' },
                { name: 'Ananya Gupta', handle: 'ananya_gupta', avatarUrl: 'https://via.placeholder.com/400x600/1a1a2e/ffffff?text=Ananya' },
                { name: 'Rohan Mehta', handle: 'rohan_mehta', avatarUrl: 'https://via.placeholder.com/400x600/1a1a2e/ffffff?text=Rohan' }
            ]
        },
        'integration': {
            title: 'INTEGRATION',
            profiles: [
                { name: 'Kavya Iyer', handle: 'kavya_iyer', avatarUrl: 'https://via.placeholder.com/400x600/1a1a2e/ffffff?text=Kavya' },
                { name: 'Arjun Nair', handle: 'arjun_nair', avatarUrl: 'https://via.placeholder.com/400x600/1a1a2e/ffffff?text=Arjun' }
            ]
        },
        'security': {
            title: 'SECURITY',
            profiles: [
                { name: 'Neha Kapoor', handle: 'neha_kapoor', avatarUrl: 'https://via.placeholder.com/400x600/1a1a2e/ffffff?text=Neha' },
                { name: 'Siddharth Joshi', handle: 'siddharth_joshi', avatarUrl: 'https://via.placeholder.com/400x600/1a1a2e/ffffff?text=Siddharth' }
            ]
        }
    };

    const team = teamData[teamName?.toLowerCase()] || {
        title: teamName?.toUpperCase(),
        profiles: [
            { name: 'Team Member', handle: 'team_member', avatarUrl: 'https://via.placeholder.com/400x600/1a1a2e/ffffff?text=Member' }
        ]
    };

    // Generate profile cards based on the profiles array
    const profileCards = team.profiles.map((profile, index) => (
        <ProfileCard
            key={index}
            avatarUrl={profile.avatarUrl}
            iconUrl={sparklePattern}
            name={profile.name}
            title="Team Member"
            handle={profile.handle}
            status="Active"
            contactText="Contact"
            showUserInfo={true}
            enableTilt={true}
            behindGlowEnabled={true}
            behindGlowColor="rgba(132, 0, 255, 0.6)"
            behindGlowSize="60%"
            onContactClick={() => window.open(`https://instagram.com/${profile.handle}`, '_blank')}
        />
    ));

    return (
        <div
            className="bg-black bg-cover bg-center bg-no-repeat min-h-screen w-full pt-8 px-8"
        >
            {/* Back button */}
            <button
                onClick={() => navigate('/')}
                className="text-white text-lg font-bold mb-8 flex items-center gap-2 hover:opacity-80 transition-opacity"
                style={{ fontFamily: 'Nebula, Montserrat, Poppins, sans-serif' }}
            >
                ← BACK
            </button>

            {/* Team heading */}
            <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-20"
                style={{ fontFamily: 'Nebula, Montserrat, Poppins, sans-serif', letterSpacing: '0.2em', marginBottom: '5rem' }}
            >
                {team.title}
            </h1>

            {/* Profile cards grid */}
            <div className="flex justify-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12 px-4 sm:px-8 md:px-12">
                    {profileCards}
                </div>
            </div>
        </div>
    );
};

export default TeamDetailsPage;
