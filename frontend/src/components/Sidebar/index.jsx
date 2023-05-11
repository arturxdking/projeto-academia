import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import { FaTimes, FaHome, FaEnvelope, FaRegSun, FaUserAlt, FaIdCardAlt, FaRegFileAlt, FaRegCalendarAlt, FaChartBar } from 'react-icons/fa';

import SidebarItem from '../SidebarItem';

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <Link to="/"> {/* Adicione o Link para a página Home */}
          <SidebarItem Icon={FaHome} Text="Home" />
        </Link>
        <SidebarItem Icon={FaChartBar} Text="Treinos" />
        <Link to="/alunos">
        <SidebarItem Icon={FaUserAlt} Text="Alunos" />
        </Link>
        <SidebarItem Icon={FaEnvelope} Text="E-Mail" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendário" />
        <SidebarItem Icon={FaIdCardAlt} Text="Professores" />
        <SidebarItem Icon={FaRegFileAlt} Text="Ajuda" />
        <SidebarItem Icon={FaRegSun} Text="Configuração" />
      </Content>
    </Container>
  );
};

export default Sidebar;
