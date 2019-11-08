import React from "react";
import {Row, Col} from "./Grid.js"

const Result = props => {
    return (props.books.length === 0) ? (
        <div className="card">
            <div className="card-body">
                <div>
                    <h3>Search Results</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body">
                    <div>
                        <h3>Search Results</h3>
                        {props.books.map(book => {
                            return (
                                <li className="list-group-item" key={book.id}>
                                    <Row className="row">
                                        <Col size="2">
                                            <img src={book.image} alt={book.title} />
                                        </Col>
                                        <Col size="1"/>
                                        <Col size="9">
                                            <Row>
                                                <h3>{book.title}</h3>
                                            </Row>
                                            <Row>
                                                <h4>{book.author}</h4>
                                            </Row>
                                            <Row>
                                                <p>{book.description}</p>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <button className="btn btn-primary" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                            Save Book
                                        </button>
                                        <a href={book.link} target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-secondary">
                                                View Book
                                        </button>
                                        </a>
                                    </Row>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default Result