import React from 'react';
import { Form } from 'react-bootstrap';

export default function SelectMonth({ months, handleSelectedMonth }) {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Mês</Form.Label>
          <Form.Control as='select' onChange={handleSelectedMonth}>
            {months.map(month => {
              return <option>{month}</option>;
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  );
}
