import "dotenv/config";
import express from "express";
import cors from "cors";
import contactRoute from "./contactRoute";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoute);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "DarkPeak Landscaping API" });
});

app.listen(PORT, () => {
  console.log(`[api] listening on port ${PORT}`);
});
