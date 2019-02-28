import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Table, TableBody, TableCell, TableHead, TableRow, } from '@material-ui/core';
import KoalaTableDetail from "./KoalaTableDetail";


class KoalaList extends Component{
    componentDidMount(){
        this.props.dispatch({type: 'GET_KOALAS'});
    }

    render(){
        let koalaTable = this.props.reduxStore.setKoalas.map(koala  =>
            <KoalaTableDetail koala={koala} key={koala._id} />
        );

        return (
           
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Ready To Transfer</TableCell>
                        <TableCell></TableCell>
                        <TableCell>Notes</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {koalaTable}
                </TableBody>
            </Table>
          
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore : reduxStore
})

export default connect(mapReduxStoreToProps)(KoalaList);