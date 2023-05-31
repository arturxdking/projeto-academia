import styled from 'styled-components';

export const Container = styled.div`
  height: 78px;
  display: flex;
  background-color: #1A202C; 
  box-shadow: 0 0 20px 3px;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 25px;
    margin-left: 32px;
    cursor: pointer;
  }
`;