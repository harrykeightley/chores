import React, { Component } from 'react'
import Ranking from './Ranking.js'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class Rankings extends Component {
    render() {
        let rankings = this.props.users.sort((a, b) => b.points - a.points)
        return (
            <Paper className="x" style={{ width: "50%", margin: "auto"}}>
                <h2 style={{ paddingTop: '20px' }}>Rankings</h2>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Place</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Points</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rankings.map((user) => (
                            <Ranking key={user.id} user={user} rank={rankings.indexOf(user) + 1} />
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

Rankings.propTypes = {
    users: PropTypes.array.isRequired
}