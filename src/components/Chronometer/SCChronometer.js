import styled from "styled-components";

const SCChronometer = styled.section`
  .timer {
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .time {
    max-width: 400px;
    max-height: 400px;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .imagen {
    width: 500px;
    height: 300px;
    position: absolute;
    margin-top: 400px;
  }
  .time h2 {
    font-size: 100px;
    color: #fff;
  }
  .btns {
    display: flex;
    justify-content: center;
  }
  .btns input {
    margin: 5px;
  }
`;
export default SCChronometer;
