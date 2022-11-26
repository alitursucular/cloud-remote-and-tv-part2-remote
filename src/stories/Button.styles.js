import styled, { css } from "styled-components";

const DefaultButton = styled.button`
    border: 0;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    color: ${({ textColor }) => textColor || "rgb(255, 255, 255)"};
    background-color: ${({ backgroundColor }) => backgroundColor || "rgb(137, 65, 234)"};
    cursor: pointer;

    svg {
        fill: ${({ iconColor }) => iconColor || "#FFF"};

        ${({ iconRotateAngle }) =>
            iconRotateAngle &&
            css`
                transform: rotate(${iconRotateAngle}deg);
            `}
    }

    &:hover:enabled {
        opacity: 0.8;
    }

    &:active:enabled {
        position: relative;
        top: 2px;
    }

    ${({ size }) => {
        if (size) {
            switch (size) {
                case "small":
                    return css`
                        min-width: 48px;
                        min-height: 48px;
                        font-size: 12px;

                        svg {
                            width: 8px;
                            height: auto;
                        }
                    `;
                case "medium":
                    return css`
                        min-width: 96px;
                        min-height: 96px;
                        font-size: 18px;

                        svg {
                            width: 12px;
                            height: auto;
                        }
                    `;
                case "large":
                    return css`
                        min-width: 144px;
                        min-height: 144px;
                        font-size: 24px;

                        svg {
                            width: 16px;
                            height: auto;
                        }
                    `;
                default:
                    return null;
            }
        }
    }}

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.5;
            pointer-events: none;
            cursor: not-allowed;
        `}
`;

export default DefaultButton;
