import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';
import styled from 'styled-components';
import Form from './components/Form.js';
import Form2 from './components/Form2.js';
import Grid from './components/Grid';
import Grid2 from './components/Grid2';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home/Home'; // Importe a página Home

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 120px;
  margin-left: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  const [trei, setTrei] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get('http://localhost:8800');
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  const getTrei = async () => {
    try {
      const res2 = await axios.get("http://localhost:8800/treinos");
      setTrei(res2.data.sort((a, b) => (a.exercicio > b.exercicio ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  useEffect(() => {
    getTrei();
  }, [setTrei]);

  return (
    <Router> {/* Adicione o componente Router em torno do conteúdo */}
      <>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Container>
          <Switch> {/* Adicione o componente Switch para alternar entre rotas */}
            <Route exact path="/"> {/* Defina a rota para a página Home */}
              <Home />
            </Route>
            <Route path="/alunos"> {/* Exemplo de rota para a página de cadastro */}
              <Title>Cadastro de Alunos</Title>
              <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
              <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
            </Route>
            <Route path="/treinos">
            <Title>Cadastro de Exercícios</Title>
              <Form2 onEdit={onEdit} setOnEdit={setOnEdit} getTrei={getTrei} />
              <Grid2 setOnEdit={setOnEdit} trei={trei} setTrei={setTrei} />
            </Route>
          </Switch>
        </Container>
        <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
        <GlobalStyle />
      </>
    </Router>
  );
}

export default App;
