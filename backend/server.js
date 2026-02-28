import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config({quiet : true});

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.get("/", (req, res) => {
    res.status(200).json({message: "server is running"});
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
