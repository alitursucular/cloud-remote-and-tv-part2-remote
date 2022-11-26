import styled from "styled-components";

const StyledText = styled.div`
    font-size: ${({ size }) => size + "px"};
    font-weight: ${({ weight }) => weight};
    color: ${({ color }) => color};
`;

export default StyledText;
