const express = require('express');
//Require handlebars
const exphbs = require('express-handlebars');
// Import routes and give the server access to them.
const routes = require('./controllers/burger_controller.js');


const PORT = process.env.PORT || 8080;

const app = express();

//Middleware
// Read "public" directory in the application directory.
app.use(express.static('public'));

//Parse app body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

//Set handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);