import React from 'react';
import { Container, Content } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div>
      <Container>
        <Content>
          <h1>Bem-vindo à minha aplicação de cadastro de ficha de treino!</h1>
          <p>Aqui você pode cadastrar as fichas de treino para alunos de academia de musculação.</p><br/>
          <FontAwesomeIcon icon={faDumbbell} size="9x" /> {/* Adicione o ícone relacionado à musculação */}
          {/* Adicione mais informações ou componentes conforme necessário */}
        </Content>
      </Container>
    </div>
  );
};

export default Home;
