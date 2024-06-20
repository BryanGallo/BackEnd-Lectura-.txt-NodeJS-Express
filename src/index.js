import express from "express";
const app = express();

//Solicitudes HTTP en JSON
app.use(express.json());


const port = process.env.BD_PORT || 8000;

app.listen(port, () => {
    console.log(`Servidor operativo en el puerto ${port}`);
});
