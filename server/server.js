const express = require( 'express' ),
      fs      = require('fs'),
      app     = express(),
      port    = 8000,

      events = require( '../data/events.json' );


const requestTime = function (req, res, next) {
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

app.use(requestTime);


app.get(
    '/status',
    (req, res) => res.send( res.serverUptime ).end()
);

app.get(
    '/api/events',
    (req, res) => {
        let stream = fs.createReadStream( __dirname + '/data/events.json' );

        res.setHeader( 'Content-Type', 'application/json' );
        stream.pipe( res );
    }
);

app.get(
    '*',
    (req, res) => {
        res.setHeader( 'Content-Type', 'text/html' );
        res.status(404).send('<h1>Page not found</h1>').end();
    }
);

app.listen(
    port,
    () => console.log(`Server listening on port ${port}!`)
);