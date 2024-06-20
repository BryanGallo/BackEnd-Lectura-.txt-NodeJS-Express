import express from "express";
import cors from "cors";
import uploadRouter from "./routes/uploadRouter.js";
const app = express();

//Solicitudes HTTP en JSON
app.use(express.json());

app.use(
    cors({
        origin: "*",
    })
);

//ROUTING
//Routing File
app.use("/api/upload", uploadRouter);

const port = process.env.BD_PORT || 8000;

app.listen(port, () => {
    console.log(`Servidor operativo en el puerto ${port}`);
});
