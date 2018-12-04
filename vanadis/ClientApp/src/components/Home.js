import React, { Component } from 'react';
import { Logo } from './Logo';
import './stylesheets/home.css';

export class Home extends Component {
    render() {
        return (
            <div id="home">
                <Logo />
            </div>
        );
    }
}
