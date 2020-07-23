const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const TransactionModel = require('../models/TransactionModel');

const index = async (request, response) => {
  const { period } = request.query;

  if (!period) {
    return response.status(400).json({
      message:
        'É necessário informar o parâmetro period, cujo valor deve estar no formato yyyy-mm.',
    });
  }

  try {
    const transactions = await TransactionModel.find({ yearMonth: period });

    return response.json({ data: transactions });
  } catch (error) {
    return response.json({ message: error.message });
  }
};

const months = async (request, response) => {
  try {
    const months = await TransactionModel.distinct('yearMonth');

    return response.json({ data: months });
  } catch (error) {
    return response.json({ message: error.message });
  }
};

module.exports = { index, months };
