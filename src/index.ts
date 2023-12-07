import "dotenv/config";
import app from "./app";
import { PORT } from "./constants";
import { connectMongoDB } from "./database";

const port = PORT || 8080;

app.listen(port, async () => {
	console.log(`Server listening on ${port}`);
	connectMongoDB();
});
