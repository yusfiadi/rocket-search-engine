import React, { useState, useEffect } from 'react';

// Components
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Document } from '../components/Document';
import { Container } from "semantic-ui-react";
import { getCookie } from '../services/Cookie';
import { Link } from 'react-router-dom';

// Styling
import "./Result.css"

function Result() {
  const [documents, setDocuments] = useState([]);
  const [path, setPath] = useState('');

  useEffect(() => {
    fetch('/result/' + getCookie('query')).then(res => res.json()).then(data => {
      setDocuments(data);
      setPath(getCookie('query'));
    });
  }, []);

  return (
    <body className="result">
      <Header/>
      <div className="App">
        <h1 className="result-title">Result</h1>
        <Container style={{textAlign:'left'}}>
          <Document docs={documents} />
        </Container>
      </div>
    </body>
  );
}

export default Result;