import React from 'react';
import { Component } from 'react';

class StorePicker extends Component {
    render() {
        return (
            <form action="" className="store-selector">
                { /* This is a store picker */ }
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store ></button>
            </form>
        );
    }
}

export default StorePicker;