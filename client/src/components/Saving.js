import React from "react";
import {Row, Col} from "./Grid.js"

const Saving = props => {
    return (props.savedBooks.length === 0) ? (
        <div className="card">
            <div className="card-body">
                <div>
                    <h3>Books that You Saved</h3>
                </div>
            </div>
        </div>
    ):(
        <div className="card">
            <div className="card-body">
                <div>
                    <h3>Books that You Saved</h3>
                    {props.savedBooks.map(book => {
                        return (
                            <li className="list-group-item" key={book._id}>
                                <Row id={book.title + "Card"}>
                                    <Col size="2">
                                        <img src={book.image} alt=''/>
                                    </Col>
                                    <Col size="1"/>
                                    <Col size="9">
                                        <Row>
                                            <h2>{book.title}</h2>
                                        </Row>
                                        <Row>
                                            <h3>{book.authors}</h3>
                                        </Row>
                                        <Row>
                                            <p>{book.description}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv ">
                                    <button className="btn btn-danger" id={book._id} onClick={() => props.handleDeleteButton(book._id)}>
                                        Delete Book
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
export default Saving