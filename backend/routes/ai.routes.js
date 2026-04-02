import { enhanceText } from "../controllers/ai.controller.js";

const router = express.Router();

// POST /api/ai/enhance
router.post("/enhance", enhanceText);

export default router;
