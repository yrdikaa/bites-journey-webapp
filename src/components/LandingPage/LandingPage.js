import React from 'react';
import HeroSection from './HeroSection';
import Recommendation from './Recomendation';
function LandingPage() {
    const highlightData = [
        {
            title: "Fitur 1",
            content: "Deskripsi fitur 1"
        }, {
            title: "Fitur 2",
            content: "Deskripsi fitur 2"
        }, {
            title: "Fitur 3",
            content: "Deskripsi fitur 3"
        }
    ];

    return (
        <div >
            <div className="highlight-columns">
                <HeroSection/>
                <Recommendation/>
            </div>
        </div>
    );
}

export default LandingPage;
