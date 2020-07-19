const express = require('express');
const transactionRouter = express.Router();
const transactionService = require('../services/transactionService')

transactionRouter.get('/', transactionService.index)

module.exports = transactionRouter;
