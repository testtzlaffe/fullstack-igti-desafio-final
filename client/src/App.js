import React, { useState, useEffect } from 'react';
import Transactions from './components/Transactions/Transactions';
import SelectMonth from './components/SelectMonth/SelectMonth';
import api from './services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/CreateTransactionModal/CreateTransactionModal';
import './App.css';
import { Button } from 'react-bootstrap';

export default function App() {
  const [selectedMonth, setSelectedMonth] = useState('2019-09');
  const [months, setMonths] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [totalReceitas, setTotalReceitas] = useState(0);
  const [totalDespesas, setTotalDespesas] = useState(0);
  const [search, setSearch] = useState('');

  const [saldo, setSaldo] = useState(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleShowModal = () => {
    setModalIsOpen(true);
  };

  const handleHideModal = () => {
    setModalIsOpen(false);
  };

  const handleChangeSelectedMonth = event => {
    const newMonth = event.target.value;
    setSelectedMonth(newMonth);
  };

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    async function listMonths() {
      const response = await api.get('/months');
      const monthList = response.data.data;
      setMonths(monthList);
    }

    listMonths();
  }, []);

  useEffect(() => {
    async function listTransactions() {
      const response = await api.get(`/?period=${selectedMonth}`);
      const transactionList = response.data.data;

      transactionList.sort((a, b) => {
        return a.day - b.day;
      });

      setTransactions(transactionList);
    }

    listTransactions();
  }, [selectedMonth]);

  useEffect(() => {
    const receitas = transactions.filter(
      transaction => transaction.type === '+'
    );

    const despesas = transactions.filter(
      transaction => transaction.type === '-'
    );

    const newTotalReceitas = receitas.reduce((acc, v) => {
      return acc + v.value;
    }, 0);

    const newTotalDespesas = despesas.reduce((acc, v) => {
      return acc + v.value;
    }, 0);

    const newSaldo = newTotalReceitas - newTotalDespesas;

    setSaldo(newSaldo);
    setTotalReceitas(newTotalReceitas);
    setTotalDespesas(newTotalDespesas);
  }, [transactions]);

  useEffect(() => {
    const filteredTransactions = transactions.filter(transaction => {
      return transaction.description.includes(search);
    });

    setTransactions(filteredTransactions);
  }, [search]);

  return (
    <>
      <h1>Desafio Final do Bootcamp Full Stack</h1>
      <SelectMonth
        months={months}
        handleSelectedMonth={handleChangeSelectedMonth}
      />
      Qtde transações: {transactions.length} - Total Receitas: {totalReceitas} -
      Total Despesas: {totalDespesas} Saldo: {saldo}
      <input type='text' onChange={handleInputChange} />
      <Button onClick={handleShowModal} />
      <Modal isOpen={modalIsOpen} handleHideModal={handleHideModal} />
      <Transactions transactions={transactions} />
    </>
  );
}
