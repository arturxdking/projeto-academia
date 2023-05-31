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
`;

const EditButton = styled(FaEdit)`
  cursor: pointer;
`;

const DeleteButton = styled(FaTrash)`
  cursor: pointer;
`;

const Grid2 = ({ trei, setTrei, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/treinos/${id}`);
      const newArray = trei.filter((trei) => trei.id !== id);
      setTrei(newArray);
      toast.success("Exercício deletado com sucesso!");
    } catch (error) {
      toast.error("Ocorreu um erro ao deletar o exercício.");
    }

    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Exercício</Th>
          <Th>Séries</Th>
          <Th onlyWeb>Repetições</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {trei.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.exercicio}</Td>
            <Td width="30%">{item.series}</Td>
            <Td width="20%" onlyWeb>
              {item.repeticoes}
            </Td>
            <Td alignCenter width="5%">
              <EditButton onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <DeleteButton onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid2;
