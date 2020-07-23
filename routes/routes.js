const express = require('express');
const transactionRouter = express.Router();
const transactionService = require('../services/transactionService');

transactionRouter.get('/', transactionService.index);
transactionRouter.get('/months', transactionService.months);

module.exports = transactionRouter;
