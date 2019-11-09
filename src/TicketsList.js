import React, { useState } from 'react';
import BusTicket from './BusTicket';

function TicketsList(props) {
    let [books, setBooks] = useState([]);

    console.log(props.num);
    if (books.length === 0 || books.length!=props.num) {
        fetch('db.json').then(responseData => {
            responseData.json().then(booksData => {
                const filteredBooks = booksData.slice(0, props.num);
                console.log(filteredBooks);
                for (let i = 0; i < filteredBooks.length; i++) {
                    filteredBooks[i].price = Math.ceil(Math.random() * 100);
                }
                setBooks(filteredBooks);
            })
        })
    }
    console.log(books);
    return (
        <section className="row">
            {books.map(b => <BusTicket {...b} key={b.key} id={b.id} />)}
        </section>
    );
}

export default TicketsList;
