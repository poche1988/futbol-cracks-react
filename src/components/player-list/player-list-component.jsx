import React from 'react';
import PlayerItem from '../player-item/player-item.component';
import './player-list.styles.scss';

class PlayersList extends React.Component {
    constructor() {
        super();

        this.state = {
            players: [
                {
                    name: 'Fernando Zampedri',
                    imageUrl: '/images/Players/zampedri300500.jpg',
                    clubImageUrl: '/images/Clubs/rosario-central.png',
                    id: 1,
                    position: 'Delantero centro'
                },
                {
                    name: 'Pablo vegetti',
                    imageUrl: '/images/Players/vegetti.jpg',
                    clubImageUrl: '/images/Clubs/belgranobgt.gif',
                    id: 2,
                    position: 'Delantero centro'
                },
                {
                    name: 'Franco Watson',
                    imageUrl: '/images/Players/francowatson2.jpg',
                    clubImageUrl: '/images/Clubs/iacc.png',
                    id: 3,
                    position: 'Mediapunta'
                },
                {
                    name: 'Juan Manuel Tevez',
                    imageUrl: '/images/Players/tevez.jpg',
                    clubImageUrl: '/images/Clubs/aucas.png',
                    id: 4,
                    position: 'Delantero centro'
                }
            ]
        }
    }

    render() {
        return (
            <div className="players-container">
                <ul className="player-list">            
                    {
                        this.state.players.map(({name, imageUrl, clubImageUrl, position, id}) => (
                            <PlayerItem key={id} name={name} imageUrl= {imageUrl}  clubImageUrl= {clubImageUrl} position={position} />
                        ))
                    }
                </ul>
            </div>
        )
    }    
}

export default PlayersList;