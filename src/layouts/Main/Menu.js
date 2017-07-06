// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Menu extends Component {

    render() {
        const { items } = this.props;

        return (
            <div className="Menu">
                <ul className="Menu">
                    {
                        items && items.map(
                            (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Menu;
