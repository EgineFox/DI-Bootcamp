import React from 'react';

interface UserCardProps {
    name?: string;
    age?: number;
    role?: string;
}

const UserCard = ({ name, age, role }: UserCardProps) => {
    const displayName = name ?? 'Anonymous User';
    const displayAge = age ?? 'Not specified';
    const displayRole = role ?? 'No role assigned';

    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            margin: '10px',
            maxWidth: '300px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h3>{displayName}</h3>
            <p><strong>Age:</strong> {displayAge}</p>
            <p><strong>Role:</strong> {displayRole}</p>
        </div>
    );
};

export default UserCard;
