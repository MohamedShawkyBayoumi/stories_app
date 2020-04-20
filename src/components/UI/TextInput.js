import React from 'react'

function TextInput({ type, name, required, onChange, label, customWrapperClass }) {
    return (
        <div className={`input-label-wrapper ${customWrapperClass}`}>
            <input
                type={type}
                name={name}
                required={required}
                onChange={onChange}
            />

            {label && (
                <label className="label-name">
                    <span className="label-content">{label}</span>
                </label>
            )}
        </div>
    )
}

export { TextInput };