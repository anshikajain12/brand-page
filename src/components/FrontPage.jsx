import React, { Component } from 'react'

export default class FrontPage extends Component {
    render() {
        return (
            <div className='main'>
                <div className='hero-content'>
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam pariatur sed a cumque, corrupti magni. Aliquid quasi pariatur voluptatibus.</p>
                    <div className="button">
                        <button className="shop">SHOP NOW!</button>
                        <button className="category">Category</button>
                    </div>
                    <h6>Also Available on</h6>
                    <div className="brand-icons">
                        <img className="img" src="/images/flipcart.png" alt="" />
                        <img className="img" src="/images/amazon.png" alt="" />
                    </div>
                </div>
                <div className="logo">
                    <img src="/images/page2.png" alt="logo" />
                </div>
            </div>
        )
    }
}
