const express = require("express");
const app = express();
const port = 3000;

//   ingne next() kodukknthe ine ann middleware enn parayunnath 
app.use("/", (req, res, next) => {
  console.log("called the / on it", req.url)
  next(); // ✅ very important
})


app.get("/", (req, res) => {
  res.send("Hello World! os my app");
});

app.param(["id", "page"], (req, res, next, value) => {
  console.log("CALLED ONLY ONCE with", value);
  req.id = value;
  next();
});

app.get("/user/:id", (req, res, next) => {
  console.log("although this matches", );
  res.send(req.params.id);

});

app.all(
  "/secret/:page",
  (req, res, next) => {
    console.log("Accessing the secret section ...", req.params.page, "is idd");
    next();
  },
  (req, res) => {
    console.log(req.params.id, "is teh request");
    res.send("hlooiii");
  }
);

const admin = express();

admin.get("/", (req, res) => {
  console.log(admin.mountpath, "is admin mountpath"); // [ '/adm{*splat}n', '/manager' ]
  res.send("Admin Homepage");
});

///
const secret = express();
secret.get("/", (req, res) => {
  console.log(secret.mountpath, "is secret mount path"); // /secr{*splat}t
  res.send("Admin Secret page");
});

admin.use("/secr{*splat}t", secret); // load the 'secret' router on '/secr{*splat}t', on the 'admin' sub app
// app.use(['/adm{*splat}n', '/manager'], admin) // load the 'admin' router on '/adm{*splat}n' and '/manager', on the parent app

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening on porttt ${port}`);
});
