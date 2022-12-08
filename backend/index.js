const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const Register=require("./registerschema.js")
const mongoose=require("mongoose")
const port=4500;
console.log(Register)
app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())
mongoose.connect("mongodb+srv://akulamanasa:manasa@123@cluster0.xmrwygv.mongodb.net/onedb?retryWrites=true&w=majority")
.then(()=>{
	console.log("Created mongodb database")
})
.catch((err)=>{
	console.log(err)
	})
app.get("/",(req,res)=>{
	res.send("hi i am server")
})
app.post("/register",(req,res)=>{
	//const{username,password}=req.body
	const username="dummyuser",password="dummypassword"
	const newUser=new Register({
		username:username,password:password
	})
	newUser.save()
})