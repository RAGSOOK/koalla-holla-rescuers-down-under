import React, { Component } from 'react';
import { connect } from 'react-redux';

class KoalaForm extends Component {

    // constructor();

    render() {
        return (
            <div>
                <p>[ KoalaForm ]</p>
            </div>
        );
    }
}

export default connect()(KoalaForm);