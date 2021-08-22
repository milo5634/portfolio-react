import React from 'react';
import DynamicText from '../components/DynamicText';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import ButtonsButtom from '../components/ButtonsButtom';
import Mouse from '../components/Mouse';

const Home = () => {
    return (
        <main>
            <Mouse />
            <div className="home">
                <Navigation />
                <SocialNetwork />
                
                
                <div className="home-main">
                    <div className="main-content">
                        <h1>Milo Agency</h1>
                        <h2><DynamicText /></h2>
                    </div>
                </div>
                <ButtonsButtom right="/project-1"/>
            </div>
        </main>
    );
};

export default Home;