import React, { useState } from 'react';
import { container, ACTIONS } from './store';
function Cart() {
    const [books, setBooks] = useState([]);
    container.subscribe(() => {
        setBooks(Object.assign([], container.getState().books));
        console.log('cart updated', container.getState())
    })
    const removeFromCart = (b) => container.dispatch(ACTIONS.REMOVE, {
        bookid: b
    });
    let sum=[];
    sum = books.map(b => Number(b.book.price));
    console.log(sum);
    sum=sum.reduce((a, b) => a + b,0);
    console.log(sum);
    return (
        <>
            <fieldset className="form-group border border-info">
                <legend style={{ width: 'inherit' }}>My cart</legend>
                <h3>Items in cart</h3>
                <ul>
                    {books.map(b => <li>{b.book.title} - <button className="btn btn-warning" onClick={() => removeFromCart(b)}>Remove</button></li>)}
                </ul>
                <h4>Sum price is: {sum}</h4>
            </fieldset>
        </>
    );
}

export default Cart;