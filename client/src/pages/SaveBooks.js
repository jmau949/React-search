  
import React, { Component } from "react";
import API from "../utils/API";
import { Container} from "../components/Grid.js";
import Saving from "../components/Saving.js"

class SaveBook extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))
    }

    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
            <Container fluid className="container">
                <Container>
                    <Saving savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
                </Container>
            </Container>
            </div>
        )
    }
}



export default SaveBook 