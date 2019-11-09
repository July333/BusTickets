import React, { useState } from 'react';
import { container, ACTIONS } from './store';

function BusTicket(props) {
    const imagesBaseUrl = 'https://kob-e.github.io/react-book-store/books-data/';

    const addBook = () => {
        container.dispatch(ACTIONS.ADD, {
            book: props
        })
    }

    return (
        <div className="col-auto card border-info mb-3" style={{width: '20rem', height: '33rem'}}>
            <div className="card-header">Title: {props.title}</div>
            <div className="card-body">
                <h4 className="card-title">Author: {props.author}</h4>
                <p className="card-text">Price: {props.price}</p>
            </div>
            <img style={{height: '300px', width: '100%', display: 'block'}} src={imagesBaseUrl + props.imageLink} alt="Card image" />       
            <button className="btn btn-success" onClick={addBook}>Add</button>
        </div>
    );
}

export default BusTicket;


