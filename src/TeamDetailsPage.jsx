import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import bgImage from './assets/bg.png';

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
                { name: 'Sneha Reddy', handle: 'sneha_reddy', avatarUrl: 'https://via.placeholder.com/400x600/1a1a2e/ffffff?text=Sneha' }
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
            name={profile.name}
            title="Team Member"
            handle={profile.handle}
            status="Active"
            contactText="Contact"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => window.open(`https://instagram.com/${profile.handle}`, '_blank')}
        />
    ));

    return (
        <div
            className="bg-black bg-cover bg-center bg-no-repeat min-h-screen w-full flex flex-col items-center justify-center"
        >
            {/* Back button */}
            <button
                onClick={() => navigate('/')}
                className="absolute top-8 left-8 text-white text-lg font-bold px-6 py-3 rounded-lg transition-colors duration-300"
                style={{ fontFamily: 'Nebula, sans-serif' }}
            >
                ← Back
            </button>

            {/* Team heading */}
            <h1
                className="text-6xl font-bold text-white"
                style={{ fontFamily: 'Nebula, sans-serif', letterSpacing: '0.2em', marginBottom: '4rem' }}
            >
                {team.title}
            </h1>

            {/* Profile cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-7xl">
                {profileCards}
            </div>
        </div>
    );
};

export default TeamDetailsPage;
