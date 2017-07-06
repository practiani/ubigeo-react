import React, { Component } from 'react';

// Components
import Menu from './Menu';

// Data
import items from '../../data/menu';

class Mainx extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">

                    <h2>React</h2>
                    <Menu items={items} />

                </div>
                <p className="App-intro">
                    {this.props.children}
                </p>
            </div>
        );
    }
}

export default Mainx;