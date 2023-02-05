import React from 'react';
import './index.css';

const Home = () => {
    return (
        <React.Fragment>
            <div>
                <img
                    src={require('../../assets/homeBackground.png')}
                    alt={'background overlay'}
                    className={'background-image'}
                />
            </div>
        </React.Fragment>
    );
};

export default Home;
