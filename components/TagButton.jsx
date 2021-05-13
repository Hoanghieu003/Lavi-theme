import React from 'react'

export default function TagButton({ name, handleSetCategory, categoryActive }) {
    return (
        <button className={`tag ${categoryActive ? 'active' : null}`} onClick={() => handleSetCategory(name)}>
			{name.charAt(0).toUpperCase() + name.slice(1)}
		</button>
    )
}
