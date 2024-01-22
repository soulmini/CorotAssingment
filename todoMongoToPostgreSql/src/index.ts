import express from "express";
const app = express();

const port = 3000;
import todoRoutes from "./routes/todo";
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use("/todo", todoRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
