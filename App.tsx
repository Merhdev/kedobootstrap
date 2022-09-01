import React from 'react';
import { Button } from 'react-bootstrap';
import Header from './components/Header';
import Form from './pages/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default function App() {
  return (
    <div className="app-wrapper">
      <h1> Work, work, work </h1>
      <Button variant="primary">Button</Button>
      <Header />
      <Form />
    </div>
  );
}
