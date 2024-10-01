import app from './app.js';
import { connectdb } from './db.js';


connectdb();
app.listen(5000);
console.log('server on port ', 5000);