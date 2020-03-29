import React from 'react';
import './player-item.styles.scss'

const PlayerItem = ({name, imageUrl, clubImageUrl, position}) => (
    <li className="player-overview">
                    <div className="player-overview-photo">
                        <a className="photo">
                        <img src={imageUrl} />
                        </a>
                        <figcaption className="photo-caption">
                            <h2>#20</h2>
                            <img src={clubImageUrl} />
                        </figcaption>
                    </div>
                    <div className="player-overview-detail">
                        <h2 className="Name">{name}</h2>
                        <span className="player-position">{position}</span>
                        <a className="player-link">Ver ficha</a>
                    </div>
    </li>
)

export default PlayerItem;