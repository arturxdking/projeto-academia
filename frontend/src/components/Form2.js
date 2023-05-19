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

const Form2 = ({ getTrei, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const trei = ref.current;

      trei.exercicio.value = onEdit.exercicio;
      trei.series.value = onEdit.series;
      trei.repeticoes.value = onEdit.repeticoes;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trei = ref.current;

    if (
      !trei.exercicio.value ||
      !trei.series.value ||
      !trei.repeticoes.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    try {
      const data = {
        exercicio: trei.exercicio.value,
        series: trei.series.value,
        repeticoes: trei.repeticoes.value,
      };

      if (onEdit) {
        await axios.put(`http://localhost:8800/treinos${onEdit.id}`, data);
        toast.success("Exercício atualizado com sucesso!");
      } else {
        await axios.post("http://localhost:8800/treinos", data);
        toast.success("Exercício cadastrado com sucesso!");
      }

      trei.exercicio.value = "";
      trei.series.value = "";
      trei.repeticoes.value = "";

      setOnEdit(null);
      getTrei();
    } catch (error) {
      toast.error("Ocorreu um erro ao salvar o exercício.");
    }
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Exercício</Label>
        <Input name="exercicio" />
      </InputArea>
      <InputArea>
        <Label>Séries</Label>
        <Input name="series" />
      </InputArea>
      <InputArea>
        <Label>Repetições</Label>
        <Input name="repeticoes" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form2;
