import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <div className="players-container">
            <ul className="player-list">

                <li className="player-overview">
                    <div className="player-overview-photo">
                        <a className="photo">
                         <img src='/images/Players/zampedri300500.jpg' /> 
                        </a>
                        <figcaption className="photo-caption">
                            <h2>#20</h2>
                            <img src="/images/Clubs/rosario-central.png" />
                        </figcaption>
                    </div>
                    <div className="player-overview-detail">
                        <h2 className="Name">Fernando Zampedri</h2>
                        <span className="player-position">Delantero Centro</span>
                        <a className="player-link">Ver ficha</a>
                    </div>
                </li>

                <li className="player-overview">
                    <figure className="player-overview-photo">
                        <a className="photo">
                            <img src='/images/Players/zampedri300500.jpg' />
                        </a>
                        <figcaption className="photo-caption">
                            <h2>#20</h2>
                            <img src="/images/Clubs/rosario-central.png" />
                        </figcaption>
                    </figure>
                    <div className="player-overview-detail">
                        <h2 className="Name">Fernando Zampedri</h2>
                        <span className="player-position">Delantero Centro</span>
                        <a className="player-link">Ver ficha</a>
                    </div>
                </li>

                <li className="player-overview">
                    <figure className="player-overview-photo">
                        <a className="photo">
                            <img src='/images/Players/zampedri300500.jpg' />
                        </a>
                        <figcaption className="photo-caption">
                            <h2>#20</h2>
                            <img src="/images/Clubs/rosario-central.png" />
                        </figcaption>
                    </figure>
                    <div className="player-overview-detail">
                        <h2 className="Name">Fernando Zampedri</h2>
                        <span className="player-position">Delantero Centro</span>
                        <a className="player-link">Ver ficha</a>
                    </div>
                </li>

                <li className="player-overview">
                    <figure className="player-overview-photo">
                        <a className="photo">
                            <img src='/images/Players/zampedri300500.jpg' />
                        </a>
                        <figcaption className="photo-caption">
                            <h2>#20</h2>
                            <img src="/images/Clubs/rosario-central.png" />
                        </figcaption>
                    </figure>
                    <div className="player-overview-detail">
                        <h2 className="Name">Fernando Zampedri</h2>
                        <span className="player-position">Delantero Centro</span>
                        <a className="player-link">Ver ficha</a>
                    </div>
                </li>

            </ul>
        </div>
    </div>
)

export default HomePage;