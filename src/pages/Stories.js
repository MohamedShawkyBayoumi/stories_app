import React from 'react'
import Header from '../components/Header'
import StoryCard from '../components/UI/StoryCard'

function Stories() {
    return (
        <div style={{ height: '100%' }}>
            <Header />
            <div className="stories">
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
            </div>
        </div>
    )
}

export default Stories;