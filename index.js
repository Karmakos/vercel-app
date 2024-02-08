import express from 'express'

// const port = '3000';
const app = express();


app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>
	{
		res.render("index.ejs");
	});

// app.listen(port,
//     console.log("App running")
//     );