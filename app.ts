import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();

app.use("*", logger());

app.get("/", (c) => {
    return c.json({"message" : "Hello, World!"});
})
app.get("/test", (c) => {
  return c.json({"message" : "test"});
});

export default app;
