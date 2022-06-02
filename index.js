const express = require("express");
const app = express();
const PORT = 8080;
let productos = ["productos"]


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/api/productos", (req, res)=>{
    res.status(200).send ({productos});
});

app.get("/api/productos/:id", (req, res)=>{
    const id = parseInt(res.params.id) -1;
});

app.post("/api/productos", (req, res) => {
    const { producto } = req.body;
    const result = {
        agregado: producto,
        id: id,
    };
    res.status(200).json(result);
});


app.put("/api/productos/:id", (req, res) => {
    const id = parseInt(res.params.id) -1;
    const { producto } = req.body;

    const OldProduct = productos.splice(pos, 1 , productos.trim()).join("");
    const result = {
        NewOne: productos,
        last: OldProduct,
    };
    res.status(200).json(result);
}), 

app.delete("/api/productos/:id", (req, res) => {

}), 

app.listen (PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
})