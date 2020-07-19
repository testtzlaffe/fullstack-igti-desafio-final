import React, { useState, useEffect } from 'react';
import Transactions from './components/Transactions/Transactions'
import SelectMonth from './components/SelectMonth/SelectMonth'
import api from './services/api'

export default function App() {
  const [month, setMonth] = useState('2019-09')
  const [transactions, setTransactions] = useState([])
  const [transactionCounter, setTransactionCounter] = useState(0)

  useEffect(() => {
    async function listTransactions() {
      console.log('testando...')
      const response = await api.get(`/?period=${month}`)
      console.log(response.data.data)
      const transactionsList = response.data.data
      setTransactions(transactionsList)
    }

    listTransactions()
  }, [month])

  useEffect(() => {

  }, [transactions])

  return (
    <>
      <h1>Desafio Final do Bootcamp Full Stack</h1>
      {transactions.length}
      <SelectMonth />
      <Transactions transactions={transactions} />
    </>
  );
}
