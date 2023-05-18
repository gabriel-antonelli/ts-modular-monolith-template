import { Router, Express } from "express";
import { readdirSync } from "fs";
import { join } from "path";

export default (app: Express): void => {
  const router: Router = Router();
  app.use("/api/v1", router);
  readdirSync(join(__dirname, "./routes")).forEach(async (file) => {
    if (!file.startsWith("index")) {
      (await import(`./routes/${file}`)).default(router);
    }
  });
};
