import React from "react";
import DisplaySection from "./display-section";
import ControlsSection from "./controls-section";
import * as S from "./styles.index";

const RemoteController = () => {
    return (
        <S.RemoteContainer>
            <DisplaySection />
            <ControlsSection />
        </S.RemoteContainer>
    );
};

export default RemoteController;
