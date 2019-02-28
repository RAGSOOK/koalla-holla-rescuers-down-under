import React, { Component } from 'react';
import { TableRow , TableCell, Button } from '@material-ui/core';
import {connect} from 'react-redux';
import swal from 'sweetalert';

class KoalaTableDetail extends Component {

    transferBtn = () => {
        // console.log('transfer Button');
        this.props.dispatch({ type: 'PREPARE_KOALA', payload: this.props.koala })
    }

    deleteKoala = () => {
        this.props.dispatch({ type: 'DELETE_KOALA', payload: this.props.koala });
        swal(`bye bye, ${this.props.koala.name}`);
    }
    render() {
        let transfer;
        if (this.props.koala.ready_to_transfer === true){
            transfer = 'Y';
        } else if (this.props.koala.ready_to_transfer === false){
            transfer = <Button onClick={this.transferBtn}>Ready to Transfer</Button>;
        }
        return (
            
                 <TableRow key={this.props.koala.i}>
                        <TableCell>{this.props.koala.name}</TableCell>
                        <TableCell>{this.props.koala.gender}</TableCell>
                        <TableCell>{this.props.koala.age}</TableCell>
                        <TableCell>{transfer}</TableCell>
                        <TableCell>{this.props.koala.notes}</TableCell>
                        <TableCell><Button onClick={this.deleteKoala}>Delete</Button></TableCell>
                    </TableRow>
           
        );
    }
}

export default connect()(KoalaTableDetail);