import React from 'react';
import './ProfilePage.css';

const ProfilePage = ({ user }) => {
  const userName = user?.name || 'User'; // Placeholder if no user name is available
  const modelsOwned = user?.models || []; // Placeholder if no models are available

  return (
    <div className="profile-page">
      <div className="profile-panel">
        <h1>Welcome back, {userName}</h1>
      </div>
      <div className="models-panel">
        {modelsOwned.length > 0 ? (
          <div className="models-list">
            {modelsOwned.map((model, index) => (
              <div key={index} className="model-item">
                {model.name}
              </div>
            ))}
          </div>
        ) : (
          <div className="no-models">
            <p>Let go of your EGO and traverse the new frontier.</p>
            <button onClick={() => window.location.href = '/buy-bots'}>Buy Trading Bots</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;