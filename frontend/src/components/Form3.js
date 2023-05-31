import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #1A202C;
  color: white;
  height: 42px;
`;

const Form3 = ({ getProf, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const prof = ref.current;

      prof.nome.value = onEdit.nome;
      prof.email.value = onEdit.email;
      prof.fone.value = onEdit.fone;
      prof.cref.value = onEdit.cref;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const prof = ref.current;

    if (
      !prof.nome.value ||
      !prof.email.value ||
      !prof.fone.value ||
      !prof.cref.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    try {
      const data = {
        nome: prof.nome.value,
        email: prof.email.value,
        fone: prof.fone.value,
        cref: prof.cref.value,
      };

      if (onEdit) {
        await axios.put(`http://localhost:8800/professor${onEdit.id}`, data);
        toast.success("Professor atualizado com sucesso!");
      } else {
        await axios.post("http://localhost:8800/professor", data);
        toast.success("Professor cadastrado com sucesso!");
      }

      prof.nome.value = "";
      prof.email.value = "";
      prof.fone.value = "";
      prof.cref.value = "";

      setOnEdit(null);
      getProf();
    } catch (error) {
      toast.error("Ocorreu um erro ao salvar o professor.");
    }
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="fone" />
      </InputArea>
      <InputArea>
        <Label>CREF</Label>
        <Input name="cref" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form3;