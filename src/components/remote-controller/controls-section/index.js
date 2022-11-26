import React from "react";
import { usePreviousChannel, useNextChannel } from "../../../api/api";
import useStore from "../../../_state";
import Button from "../../../stories/Button";
import * as S from "../styles.index";

const ControlsSection = () => {
    const [currentChannelNumber] = useStore((state) => [state.currentChannelNumber]);

    const previousChannelMutation = usePreviousChannel();
    const nextChannelMutation = useNextChannel();

    const handlePreviousChannel = () => {
        previousChannelMutation.mutate();
    };

    const handleNextChannel = () => {
        nextChannelMutation.mutate();
    };

    return (
        <S.ControlsSection>
            <Button
                size="large"
                iconRotateAngle={180}
                onClick={handlePreviousChannel}
                disabled={currentChannelNumber === 1 || previousChannelMutation.isLoading}
            />
            <Button
                size="large"
                onClick={handleNextChannel}
                disabled={currentChannelNumber === 5 || nextChannelMutation.isLoading}
            />
        </S.ControlsSection>
    );
};

export default ControlsSection;
