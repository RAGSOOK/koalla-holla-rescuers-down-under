import React, { Component } from 'react';
import { TableRow , TableCell, Button } from '@material-ui/core';
import {connect} from 'react-redux';

class KoalaTableDetail extends Component {

    transferBtn = () => {
        // console.log('transfer Button');
        this.props.dispatch({ type: 'PREPARE_KOALA', payload: this.props.koala })
    }

    deleteKoala = () => {
        this.props.dispatch({ type: 'DELETE_KOALA', payload: this.props.koala })
    }
    render() {
        return (
            
                 <TableRow key={this.props.koala.i}>
                        <TableCell>{this.props.koala.name}</TableCell>
                        <TableCell>{this.props.koala.gender}</TableCell>
                        <TableCell>{this.props.koala.age}</TableCell>
                        <TableCell>{this.props.koala.ready_to_transfer}</TableCell>
                        <TableCell><Button onClick={this.transferBtn}>Ready to Transfer</Button></TableCell>
                        <TableCell>{this.props.koala.notes}</TableCell>
                        <TableCell><Button onClick={this.deleteKoala}>Delete</Button></TableCell>
                        
                    </TableRow>
           
        );
    }
}

export default connect()(KoalaTableDetail);