// index.js
import React from 'react';

export default function Index() {
    return (
        <div className=''>
            <Header brand='RetroEmu.lol' />
            <main className={`${fontArray.lobster.className} block w-100 bg-slate-400`}>
                <h2>index</h2>
            </main>
            {children}
            <Footer />
    );
}

