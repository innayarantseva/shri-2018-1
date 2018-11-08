import createStore from '../node_modules/shri-arch/src/index.js';


// store stuff

const reducer = ( state = {}, action ) => {
    console.log(action);
    if (action.type === 'location') {
        state.location = action.location;
    }
    return state;
};

let store = createStore( reducer );
store.subscribe( () => console.log( store.getState() ) );

fetch(
    '/api/state/get',
    {
        headers: new Headers({'Content-Type': 'application/json;charset=utf-8'}),
        method: 'get',
        credentials: 'include'
    }
)
.then( res => res.json() )
.then(
    ({location}) => {
        store.dispatch( { type: 'location', location } );
    }
);


const getLocationState = ( ) => {
    let hrefChunks = window.location.href.split('/');
    return hrefChunks[hrefChunks.length - 1].split('.')[0];
};

window.addEventListener('load',
    () => fetch(
        '/api/state/update',
        {
            headers: new Headers({'Content-Type': 'application/json;charset=utf-8'}),
            method: 'post',
            credentials: 'include',
            body: JSON.stringify({ location: getLocationState() })
        }
    )
);

