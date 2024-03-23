import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <nav className="header">
                <img src="/images/header_logo.jpg" alt='logo' />
                <div >
                    <ul>
                        <li href="#">Menu</li>
                        <li href="#">Location</li>
                        <li href="#">About</li>
                        <li href="#">Contact</li>
                    </ul>
                </div>
                <button className='btn'>Login</button>
            </nav>
        )
    }
}
