<<<<<<< HEAD
const SCTask = styled.section`
  background-color: black;
  margin-top: 500px;
`;

export default SCTask;
=======
import styled from 'styled-components';

const SCTasklist = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .close-session {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }
  .card {
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 1px 26px rgba(82, 82, 246, 0.3);
    padding: 32px;
  }
`;

export default SCTasklist;
>>>>>>> dev
