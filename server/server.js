const express    = require( 'express' ),
      // fs      = require('fs'),
      bodyParser = require( 'body-parser' ),

      app     = express(),
      port    = 8000,

      types = require( './data/types.json' ),
      data  = require( './data/events.json' );

let appState = { location: 'index' };


const requestTime = (req, res, next) => {
    const time = parseInt( process.uptime(), 10 );

    // сколько часов, минут и оставшихся секунд
    let hours   = Math.floor( time / 3600 ),
        minutes = Math.floor( time % 3600 / 60 ),
        seconds = Math.floor( time % 3600 % 60 );

    // переменные для строкового отображения значений времени
    let dH, dM, dS;

    dH = ( hours   < 10 ) ? `0${hours}`   : hours
    dM = ( minutes < 10 ) ? `0${minutes}` : minutes
    dS = ( seconds < 10 ) ? `0${seconds}` : seconds

    res.serverUptime = `${dH}:${dM}:${dS}`;
    next();
}

// хелперные функции для middleware 'requestEvents'
const isTypesValid = queryTypes =>
    queryTypes.reduce(
        (acc, queryType) => !!types.find( type => type === queryType ),
        true
    );

const filterEvents = ( data, queryTypes ) =>
    queryTypes.length
        ? data.filter(
            event => queryTypes.find( type => type === event.type )
        )
        : data;


const requestEvents = (req, res, next) => {
    let queryTypes =
        req.query.type
            ? req.query.type.split(':')
            : [],
        { events } = data;

    res.isTypesValid = isTypesValid( queryTypes );

    if ( res.isTypesValid ) {
        res.events = filterEvents( events, queryTypes );
    }
    next();

}

// раздаем статику
app.use(express.static( 'public' ));

// реализуем ручку для отправки данных о стейте на сервер
app.post(
    '/api/state/update',

    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),

    (req, res) => {
        appState =  req.body;
        console.log( 'new state', appState );
        res.status(200).send( appState ).end();
    }
);

// и ручку, чтобы забирать state
app.get(
    '/api/state/get',
    (req, res) => res.status(200).send( appState ).end()
);

app.use( requestTime );
app.get(
    '/status',
    (req, res) => res.status(200).send( res.serverUptime ).end()
);


app.use( requestEvents );
app.get(
    '/api/events',
    (req, res) => {
        if (res.isTypesValid) {
            res.status(200).json( { events: res.events } ).end();
        } else {
            res.status(400).send( 'incorrect type' ).end();
        }

        // убираю стримы, так как непонятно, как их фильтровать без применения сторонних библиотек
        // let stream = fs.createReadStream( __dirname + '/data/events.json' );
        // res.setHeader( 'Content-Type', 'application/json' );
        // stream.pipe( res );
    }
);

app.get(
    '*',
    (req, res) => {
        res.setHeader( 'Content-Type', 'text/html' );
        res.status(404).send('<h1>Page not found</h1>').end();
    }
);

app.use(
    (error, req, res, next) => {
        console.log( error );
        res.status(500).send( 'Something went wrong', error );
    }
);

app.listen(
    port,
    error => {
        error && console.log( 'Something bad happened: ', error );
        console.log( `Server listening on port ${port}!` );
    }
);