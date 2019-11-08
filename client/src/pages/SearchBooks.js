import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid.js";
import Search from "../components/Search.js";
import Result from "../components/Result.js"


class SearchBooks extends Component {
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }


    handleFormSubmit = event => {
        event.preventDefault();
        API.getGoogleSearchBooks(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    let results = res.data.items
                    results = results.map(result => {
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail || result.volumeInfo.imageLinks.smallThumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    this.setState({ books: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
        event.preventDefault();
        let savedBooks = this.state.books.filter(book => book.id === event.target.id)
        savedBooks = savedBooks[0];
        API.saveBook(savedBooks)
            .then(this.setState({ message: alert("Saved") }))
            .catch(err => console.log(err))
    }
    render() {
        return (
<div>
            <Container fluid>

                <Container>
                    <Row>
                        <Col size="12">
                            <Search
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <Result books={this.state.books} handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
            </div>
        )
    }


}

export default SearchBooks