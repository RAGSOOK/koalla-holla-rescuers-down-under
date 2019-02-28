import React, {Component} from 'react';
import {connect} from 'react-redux';

class KoalaList extends Component{
    render(){
        return (
            <div>KOALAS</div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore : reduxStore
})

export default connect(mapReduxStoreToProps)(KoalaList);