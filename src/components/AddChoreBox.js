import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

export default class AddChoreBox extends Component {
    state = {
        housemate: this.props.users[0].name,
        chore: this.props.chores[0].name,

    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addChore(this.state.housemate, this.state.chore)
    }

    render() {
        return (
            <div style={{paddingTop: "20px"}}>
                <Paper className="x" style={{ padding: "20px", width: "50%", margin: "auto" }}>
                    <h2 style={{ display: "flex" }}> Add Chore</h2>
                    <form onSubmit={this.onSubmit}>
                        <FormControl style={formStyle}>
                            <InputLabel htmlFor="housemate">HouseMate</InputLabel>
                            <Select
                                value={this.state.housemate}
                                onChange={this.onChange}
                                inputProps={{
                                    name: 'housemate',
                                    id: 'housemate',
                                }}
                            >
                                {this.props.users.map((user) => (
                                    <MenuItem value={user.name}>{user.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl style={formStyle}>
                            <InputLabel htmlFor="chore">Chore</InputLabel>
                            <Select
                                value={this.state.chore}
                                onChange={this.onChange}
                                inputProps={{
                                    name: 'chore',
                                    id: 'chore',
                                }}
                            >
                                {this.props.chores.map((chore) => (
                                    <MenuItem value={chore.name}>{chore.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <input
                            id="submit-button"
                            type="submit"
                            style={{ display: "none" }}
                        />
                        <label htmlFor="submit-button">
                            <Button variant="contained" component="span" color="secondary">
                                Submit
                            </Button>
                        </label>
                    </form>

                </Paper>

            </div>
        )
    }
}

const formStyle = {
    minWidth: 200,
    paddingRight: '20px'
}
