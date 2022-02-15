import styled from 'styled-components';
import { FaChevronCircleLeft } from 'react-icons/fa';

export default styled.div`
  width: 100%;

  .header {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom:1rem;
  }
  p {
    margin-bottom: 2rem !important;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow:auto;
`;

export const GoBack = styled(FaChevronCircleLeft)`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  color:#000;

  :hover {
    opacity: 0.7;
  }
`;
