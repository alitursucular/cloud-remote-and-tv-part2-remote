import React from "react";
import { useCurrentChannel } from "../../../api/api";
import useStore from "../../../_state";
import Text from "../../../stories/Text";
import * as S from "../styles.index";

const DisplaySection = () => {
    const [currentChannelNumber, updateCurrentChannelNumber] = useStore((state) => [
        state.currentChannelNumber,
        state.updateCurrentChannelNumber
    ]);

    const { data } = useCurrentChannel();

    React.useEffect(() => {
        data && updateCurrentChannelNumber(data.number);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <S.DisplaySection>
            <S.NowShowing>
                <Text size={22} weight={300} color="#FFF">
                    NOW SHOWING:
                </Text>
            </S.NowShowing>
            <S.CurrentChannel>
                <Text size={72} weight={500} color="#FFF">
                    {currentChannelNumber?.toString().padStart(3, "0")}
                </Text>
            </S.CurrentChannel>
        </S.DisplaySection>
    );
};

export default DisplaySection;
