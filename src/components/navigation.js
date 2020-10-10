import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'

export const Navigation = () => (
    <div className="nav">
        <Link to="/">
            Home
        </Link>
        <Link to="/about">
            About
        </Link>
    </div>
)