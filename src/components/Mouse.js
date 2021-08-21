import React from 'react';

const Mouse = () => {
   
    useEffect(() => {
        const handleCursor = (e) => {
        
        };
        
        window.addEventListener('mousemove', handleCursor)
    
    }, []);
    return <span className="cursor"></span>;

};


export default Mouse;