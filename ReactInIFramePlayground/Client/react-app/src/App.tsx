import React, { useState, useEffect } from 'react';
import Frame from 'react-frame-component';

function App() {
    // Parse the query parameters
    const [language, setLanguage] = useState('');

    useEffect(() => {
        // Get the query parameters from the URL
        const queryParams = new URLSearchParams(window.location.search);
        const lang = queryParams.get('lang') || 'default';
        setLanguage(lang);
    }, []);
    
    
    return (
        <div>
            <p>React App without frame. Have to be black regular font (as usual without styles) but it's overridden by website styles</p>
            <h1>Query Parameters:</h1>
            <p>Value for 'lang': {language}</p>

            <Frame style={{ border: "0px" }}>
                <p style={{ color: 'green' }}>Frame inside react App. Have to be green</p>
            </Frame>
        </div>
    );
}

export default App;
