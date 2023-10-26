//Esta funcion se pone a correr el servidor

import app from "./App.js";
import { connectDB } from "./db.js";

connectDB();
app.listen(5001,() => console.log ('Server on PORT 5001'))