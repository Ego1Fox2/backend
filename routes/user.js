import express from 'express';
import {user} from '..\conroler/user.js';
const router = express()

router.get('/me',user)



export default router