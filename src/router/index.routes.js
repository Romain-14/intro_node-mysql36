import { Router } from 'express'; // import express from express;

import { home_view, story_view } from "../controllers/views.js";


const router = Router(); // const router = express.Router();

// http://localhost:9000
router.get("/", home_view);
router.get("/story/:id", story_view);


export default router;