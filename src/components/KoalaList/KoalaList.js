import React, {Component} from 'react';
import {connect} from 'react-redux';

class KoalaList extends Component{
    componentDidMount(){
        this.props.dispatch({type: 'GET_KOALAS'});
    }

    render(){
        return (
            <div>{JSON.stringify(this.props.reduxStore)}</div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore : reduxStore
})

export default connect(mapReduxStoreToProps)(KoalaList);