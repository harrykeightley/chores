import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class History extends Component {

    createData = (name, chore, date) => {
        return { name, chore, date };
    }




    render() {
        let past10Chores = this.props.previous_chores.map((prev) => this.createData(
            prev.user, prev.chore, prev.date
        )).sort((a, b) => a.date < b.date ? 1 : -1).slice(0, 10);
        return (
            <div style={{ marginBottom: '20px' }}>
                <Paper className="x" style={{ width: "50%", margin: "auto" }}>
                    <h2 style={{ paddingTop: '20px' }}>History</h2>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Housemate</TableCell>
                                <TableCell align="left">Chore</TableCell>
                                <TableCell align="right">Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {past10Chores.map(row => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">{row.chore}</TableCell>
                                    <TableCell align="right">{row.date.toString().substring(0, 25)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>

        )
    }
}
