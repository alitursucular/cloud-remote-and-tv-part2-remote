import styled from "styled-components";

const RemoteContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin-top: 48px;
`;

const DisplaySection = styled.div`
    display: flex;
    flex-flow: column nowrap;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    background-color: rgb(41, 45, 50);
`;

const NowShowing = styled.div`
    text-align: center;
    padding: 24px 0;
`;

const CurrentChannel = styled.div`
    text-align: center;
    padding: 24px 0;
`;

const ControlsSection = styled.div`
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    background-color: rgb(32, 33, 36);
    display: flex;
    justify-content: space-between;
    padding: 112px 40px 160px;
`;

export { RemoteContainer, DisplaySection, NowShowing, CurrentChannel, ControlsSection };
