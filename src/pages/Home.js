import React from 'react'
import Header from '../components/Header'
import StoryCard from '../components/UI/StoryCard'

function Home() {
    return (
        <div style={{ height: '100%' }}>
            <Header />
            <div className="home">
                <section className="main-cards">
                    <div className="main-card">
                        <div>
                            <h3>I have </h3>
                            <h3>20 stories</h3>
                        </div>
                    </div>
                    <div className="main-card">
                        <div>
                            <h3>I have </h3>
                            <h3>30 comments</h3>
                        </div>
                    </div>
                </section>
                <div className="home-stories">
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />

                </div>
            </div>
        </div>
    )
}

export default Home;
