import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

const Thead = styled.thead``;

const Tbody = styled.tbody``;

const Tr = styled.tr``;

const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    display: ${(props) => props.onlyWeb ? "none" : "table-cell"};
  }
`;

const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    display: ${(props) => props.onlyWeb ? "none" : "table-cell"};
  }

  /* Adicione um espaçamento entre os botões de editar e deletar */
  &:nth-last-child(2) {
    padding-right: 15px; /* Ajuste o valor conforme necessário */
  }
`;

const EditButton = styled(FaEdit)`
  cursor: pointer;
`;

const DeleteButton = styled(FaTrash)`
  cursor: pointer;
`;

const Grid3 = ({ prof, setProf, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/professor/${id}`);
      const newArray = prof.filter((prof) => prof.id !== id);
      setProf(newArray);
      toast.success("Professor deletado com sucesso!");
    } catch (error) {
      toast.error("Ocorreu um erro ao deletar o professor.");
    }

    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>E-mail</Th>
          <Th onlyWeb>Telefone</Th>
          <Th>CREF</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {prof.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.nome}</Td>
            <Td width="30%">{item.email}</Td>
            <Td width="20%" onlyWeb>
              {item.fone}
            </Td>
            <Td width="30%">{item.cref}</Td>
            <Td alignCenter width="10%">
              <EditButton onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="10%">
              <DeleteButton onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid3;
