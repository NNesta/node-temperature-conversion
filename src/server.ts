import express, {json} from "express"


const app = express()
app.use(json())
app.listen(3000,()=>[
    console.log("server is running")
])

app.post("/convert",(req,res)=>{
    const {type, quantity} = req.body;
    let result
    if(type.toLowerCase()==="celcius"||type.toLowerCase()==="c"){
        result = (quantity*9/5)+32
    }
    else if(type.toLowerCase()==="fahrenheit"||type.toLowerCase()==="f"){
        result = (quantity-32)*5/9
    }
    else {
        res.send("Please put valid input")
    }

    res.send(`${result}`)
})