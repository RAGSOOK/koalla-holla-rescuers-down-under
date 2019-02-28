import React, { Component } from 'react';
import { TableRow , TableCell, Button } from '@material-ui/core';

class KoalaTableDetail extends Component {
    render() {
        return (
            
                 <TableRow key={this.props.koala.i}>
                        <TableCell>{this.props.koala.name}</TableCell>
                        <TableCell>{this.props.koala.gender}</TableCell>
                        <TableCell>{this.props.koala.age}</TableCell>
                        <TableCell>{this.props.koala.ready_to_transfer}</TableCell>
                        <TableCell><Button>Ready to Transfer</Button></TableCell>
                        <TableCell>{this.props.koala.notes}</TableCell>
                        
                    </TableRow>
           
        );
    }
}

export default KoalaTableDetail;