export const ACTIONS = {
    'ADD': 'ADD',
    'REMOVE': 'REMOVE'
}
const createStore = (reducer) => {
    let internalState = { // model
        books: []
    };
    const handlers = [];

    return {
        dispatch: (action, params) => {
            internalState = reducer(internalState, action, params);
            handlers.forEach(h => h());
        },
        subscribe: (h) => {
            handlers.push(h);
        },
        getState: () => internalState
    }
}

const reducer = (m, action, params) => {
    const updates = {
        ADD: (m, params) => { 
            m.books.push(params);
            return m;
        },
        REMOVE: (m, params) => {
            const idx = m.books.indexOf(params.bookid);
            m.books.splice(idx, 1);
            return m;
        }
    }
    return updates[action](m, params);
}


export const container = createStore(reducer);