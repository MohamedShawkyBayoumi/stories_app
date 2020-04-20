import React from 'react'
import { Link } from 'react-router-dom'

function StoryCard() {
    return (
        <div className="story-card">
            <div className="story-avatar">
                <div
                    style={{
                        background: `url('${require('../../assets/avatar.jpg')}') no-repeat center`
                    }}
                />
            </div>
            <div className="card-content">
                <div className="card-content-box">
                    <h2><Link to={`/stories/1`}>The standard Lorem Ipsum passage, used since the 1500s</Link></h2>
                    <h3>Mohamed Shawky</h3>
                    <h3>APR, 30, 2020</h3>
                    <div>
                        <span>200 comments</span>
                        <span>150 Likes</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoryCard;