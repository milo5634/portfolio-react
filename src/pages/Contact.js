import React from 'react';
import ButtonsButtom from '../components/ButtonsButtom';
import Navigation from '../components/Navigation';

const Contact = () => {
    return (
        <div>
            <Navigation />
            <ButtonsButtom left={"/project-4"} right={"/"} />
        </div>
    );
};

export default Contact;