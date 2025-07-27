import { logger } from "./application/logging.js";
import { web } from "./application/web.js";
import cors from "cors";

web.use(cors());

web.listen(300, () => {
  logger.info("App start");
});
