import React from 'react';

import Header from './components/Header';

function App() {

    const projects = ['AppDev', 'front-end web'];

    return (
        <>
            <Header title="projects" />

            <ul>
                {projects.map(project => <li>{project}</li>)}
            </ul>

        </>
    );
}

export default App;