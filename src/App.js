import React, { Component } from 'react';
import './App.css';
import Rankings from './components/Rankings.js'
import AddChoreBox from './components/AddChoreBox.js';
import History from './components/History.js'

class App extends Component {

    state = {
        users: [
            {
                id: 1,
                name: "Harry Keightley",
                points: 24
            },
            {
                id: 2,
                name: "Mitch Knight",
                points: 40
            },
            {
                id: 3,
                name: "Thomas Watkins",
                points: 38
            },
            {
                id: 4,
                name: "James Benjamin",
                points: 22
            }
        ],
        chores: [
            {
                id: 1,
                name: 'Taking out bins',
                points: 3
            },
            {
                id: 2,
                name: 'Taking in bins',
                points: 1
            },
            {
                id: 3,
                name: 'Unpacking dishwasher',
                points: 2
            },
        ],
        previous_chores: [
            {
                chore: 'Took out bins',
                user: 'Mitch Knight',
                date: new Date(),
            }
        ]
    };

    addChore = (user, chore) => {
        this.setState({
            previous_chores: [...this.state.previous_chores, {
                user: user,
                chore: chore, 
                date: new Date()
            }]
        })
        // Increment the points on that user.
        let actual_chore = this.state.chores.filter((x) => x.name === chore)[0]
        let actual_user = this.state.users.filter((x) => x.name === user)[0]
        actual_user.points += actual_chore.points

    

    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <h1>Milton f-Squad Chores</h1>
                    <Rankings users={this.state.users} />
                    <AddChoreBox users={this.state.users} chores={this.state.chores} addChore={this.addChore}/>
                    <History previous_chores={this.state.previous_chores}/>
                </div>
            </div>
        );
    }
}

export default App;
