import styled from "styled-components";

const CardStyle = styled.div`
  & {
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    background-color: ${({isColor}) => isColor === '#161c24' ? '#434446' : '#f5f5f5'};
  }
`;
export { CardStyle };
