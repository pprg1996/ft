import React, { Component } from "react";
import { Typography, Paper, TextField, Button, List, IconButton } from "material-ui";
import { ListItem, ListItemText, ListItemSecondaryAction } from "material-ui/List"
import { Delete } from "@material-ui/icons";
import { withStyles } from "material-ui/styles";

const styles = theme =>
    console.log(theme) || {
        root: {
            margin: "20px auto",
            padding: 20,
            maxWidth: 400
        },
        form: {
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-evenly"
        }
    }

export default withStyles(styles)(class App extends Component {

    state = {
        exercises: [{ id: 1, title: 'Bench Press' },
        { id: 2, title: 'Deadlift' },
        { id: 3, title: 'Squats' }],
        title: ""
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }

    handleCreate = e => {
        e.preventDefault();
        if (this.state.title) {
            this.setState(({ exercises, title }) => (
                {
                    exercises: [
                        ...exercises, {
                            title, id: Date.now()
                        }
                    ],
                    title: ""
                }
            ))
        }
    }

    handleDelete = (id) => {
        this.setState(({ exercises }) => ({ exercises: exercises.filter(ex => (ex.id != id)) }))
    }

    render() {
        const { title } = this.state;
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Typography variant="display1" align="center" gutterBottom >
                    Exercises
            </Typography>

                <form className={classes.form} onSubmit={this.handleCreate}>
                    <TextField name="title" label="Exercise" value={title} margin="normal" onChange={this.handleChange} />
                    <Button type="submit" color="primary" variant="raised" >Create</Button>
                </form>

                <List>
                    {this.state.exercises.map((exercise) => (
                        <ListItem key={exercise.id}>
                            <ListItemText primary={exercise.title} />
                            <ListItemSecondaryAction>
                                <IconButton color="primary" onClick={() => { this.handleDelete(exercise.id) }}><Delete /></IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        );
    }
})