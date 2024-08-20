const router = require('express').Router();
const tasksRouter = require('./tasks.api.router');
const authRouter = require('./auth.router');
const tokenRouter = require('./token.router');

router.use('/tasks', tasksRouter);
router.use('/auth', authRouter);
router.use('/tokens', tokenRouter);

module.exports = router;
