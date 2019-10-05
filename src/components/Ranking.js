import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default class Ranking extends Component {
    render() {
        return (
            <TableRow key={this.props.rank}>
                <TableCell component="th" scope="row">
                    {this.props.rank}
                </TableCell>
                <TableCell>{this.props.user.name}</TableCell>
                <TableCell>{this.props.user.points}</TableCell>
            </TableRow>
        )
    }
}

Ranking.propTypes = {
    rank: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired
}
