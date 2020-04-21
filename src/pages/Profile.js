import React, { useState } from 'react'
import Header from '../components/Header'
import { TextInput } from '../components/UI';

function Profile() {
    const [isLoading, setIsLoading] = useState(false),
          [avatar, setAvatar] = useState(null);
          console.log('avatar', avatar);
    return (
        <div>
            <Header />
            <div className="page-content">
                {isLoading && (
                    <div className="loader-container">
                        <div className="loader" />
                    </div>
                )}
                <h1>Edit your profile</h1>
                <form>
                    <div className="avatar-wrapper-edit">
                        <div className="avatar-img">
                            <input
                                type="file"
                                className="custom-file-input"
                                onChange={e => setAvatar(e.target.files[0])}
                            />
                            <div 
                                style={{
                                    background: `url('${avatar ? URL.createObjectURL(avatar) : require('../assets/avatar.jpg')}') no-repeat center`
                                }}
                            />
                        </div>
                    </div>
                    <TextInput
                        type="text"
                        name="fullname"
                        required
                        onChange={() => console.log('test')}
                        label="Full name"
                    />
                    <TextInput
                        type="text"
                        name="job"
                        required
                        onChange={() => console.log('test')}
                        label="Job Title"
                    />
                    
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}

export default Profile;