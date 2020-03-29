import React from 'react';
import './homepage.styles.scss';
import PlayersList from '../../components/player-list/player-list-component';

const HomePage = () => (
    <div className="homepage">
        <PlayersList />
    </div>
)

export default HomePage;