import React from "react";
import PropTypes from "prop-types";
import DefaultButton from "./Button.styles";
import Chevron from "./assets/Chevron";

/**
 * Button component
 */
const Button = ({ size, textColor, iconColor, backgroundColor, iconRotateAngle, label, ...rest }) => {
    return (
        <DefaultButton
            type="button"
            size={size}
            textColor={textColor}
            iconColor={iconColor}
            backgroundColor={backgroundColor}
            iconRotateAngle={iconRotateAngle}
            {...rest}
        >
            {label ? label : <Chevron />}
        </DefaultButton>
    );
};

Button.propTypes = {
    label: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    textColor: PropTypes.string,
    iconColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    iconRotateAngle: PropTypes.number
};

Button.defaultProps = {
    size: "medium",
    textColor: "#FFF",
    iconColor: "#FFF",
    backgroundColor: "rgb(137, 65, 234)",
    iconRotateAngle: 0
};

export default Button;
