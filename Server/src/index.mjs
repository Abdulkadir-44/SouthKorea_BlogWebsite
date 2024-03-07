import express from "express"
import {getDb,connectToDb} from "./database/db.mjs"
import cors from "cors"
const app = express() ; 
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json())
let db ;

connectToDb(err=>{
    if(!err)
    {
        app.listen(PORT,()=>{
            console.log(`Running on PORT ${PORT}`);
        })
        db = getDb()
    }
    else{
        console.log("Not connect to Database");
    }
})


app.get("/api/foods", async (req,res)=>{
    try {
        let foods = []
        await db.collection("Foods").find().forEach(element => foods.push(element));
        setTimeout(()=>{
            res.status(200).send(foods)
        },2000)
    } catch (error) {
        console.log("sıkıntı var...");
        res.status(404).send(error)
    }
})

app.post('/api/contact',(req,res)=>{
    const {name,surname,subject,content} = req.body
    console.log(name,surname,subject,content);
    setTimeout(()=>{
        res.json({ success: true, message: 'Veriler başarıyla kaydedildi' });
    },2000)
})

