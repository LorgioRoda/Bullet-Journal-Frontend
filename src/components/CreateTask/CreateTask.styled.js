import styled from "styled-components";

const SCTask2 = styled.section`
  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

    .input {
      margin-bottom: 10px;
      height: 30px;
      width: 250px;
      padding: 10px;
      font-size: 16px;
      border-radius: 10px;
      outline: none;
      cursor: pointer;
      border: 1px solid rgb(0, 110, 147);
    }

    .input:hover {
      box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
        rgba(17, 17, 26, 0.1) 0px 0px 8px;
    }
  }
`;

export default SCTask2;
