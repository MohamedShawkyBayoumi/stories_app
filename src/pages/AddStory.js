import React, { useState } from 'react'
import Header from '../components/Header'
import { TextInput } from '../components/UI'

function AddStory() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div>
            <Header />
            <div className="page-content">
                {isLoading && (
                    <div className="loader-container">
                        <div className="loader" />
                    </div>
                )}
                <h1>Add new story</h1>
                <form>
                    <TextInput
                        type="text"
                        name="title"
                        required
                        onChange={() => console.log('test')}
                        label="Title"
                    />
                    <div className="text-area-wrapper">
                        <textarea
                            placeholder="Write a story here..."
                            name="story"
                            onChange={() => console.log('test')}
                            required={true}
                        />
                    </div>
                    <button type="submit">Create Story</button>
                </form>
            </div>
        </div>
    )
}

export default AddStory;