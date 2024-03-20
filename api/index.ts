import express from "express";

app = express();
app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/hsol", (req, res) => res.send("한솔"));
app.listen(3000, () => console.log("Server ready on port 3000."));

export default app;