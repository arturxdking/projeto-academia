import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import { FaTimes, FaHome, FaEnvelope, FaRegSun, FaUserAlt, FaIdCardAlt, FaRegFileAlt, FaRegCalendarAlt, FaChartBar } from 'react-icons/fa';

import SidebarItem from '../SidebarItem';

const Sidebar = ({ active }) => {
  const sidebarRef = useRef(null);

  const closeSidebar = () => {
    active(false);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <Container sidebar={active} ref={sidebarRef}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <SidebarItem Icon={FaHome} Text="Home" />
        </Link>
        <Link to="/alunos" style={{ textDecoration: 'none' }}>
          <SidebarItem Icon={FaUserAlt} Text="Alunos" />
        </Link>
        <Link to="/treinos" style={{ textDecoration: 'none' }}>
          <SidebarItem Icon={FaChartBar} Text="Treinos" />
        </Link>
        <Link to="/professor" style={{ textDecoration: 'none' }}>
          <SidebarItem Icon={FaIdCardAlt} Text="Professores" />
        </Link>
        <SidebarItem Icon={FaEnvelope} Text="E-Mail" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendário" />
        <SidebarItem Icon={FaRegFileAlt} Text="Ajuda" />
        <SidebarItem Icon={FaRegSun} Text="Configuração" />
      </Content>
    </Container>
  );
};

export default Sidebar;
