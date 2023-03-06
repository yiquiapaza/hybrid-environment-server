// core dep
import express from 'express';
import barcharRouters from './routers/barchart.router.mjs';
import scatterplotRouters from './routers/scatterplot.router.mjs';
import linechartRouters from './routers/linechart.router.mjs';
import positionRouters from './routers/position.router.mjs';

//const raw_data = JSON.parse(fs.readFileSync('raw_data.json'));

const app = express();
// express config
app.use(express.json());
app.use(express.urlencoded());



// Routes

app.use('/barchart', barcharRouters);
app.use('/scatterplot', scatterplotRouters);
app.use('/linechart', linechartRouters);
app.use('/menu', positionRouters)
app.use('/position', positionRouters)
// TODO:
// Create GET and POST position service URL
// Create GET and POST rotation service URL
// Create a hook for interaction or maybe just a new URL for GET and POST information about elements
// Create log for eeach event

app.listen(3000);
