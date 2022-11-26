import React from "react";
import PropTypes from "prop-types";
import StyledText from "./Text.styles";

/**
 * Text component
 */
const Text = ({ children, variant, size, weight, color, ...rest }) => (
    <StyledText as={variant} variant={variant} size={size} weight={weight} color={color} {...rest}>
        {children}
    </StyledText>
);

Text.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf(["p", "span"]),
    size: PropTypes.number,
    weight: PropTypes.oneOf([300, 400, 500]),
    color: PropTypes.string
};

Text.defaultProps = {
    variant: "p",
    size: 16,
    weight: 400,
    color: "#000"
};

export default Text;
