import React from "react";
import Button from "./Button";

export default {
    title: "Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" }
    }
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
    label: "Button"
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
    disabled: true
};

export const WithStyles = Template.bind({});
WithStyles.args = {
    iconColor: "black",
    backgroundColor: "yellow"
};

export const AllSizes = () => (
    <>
        <Button size="small" />
        <Button size="medium" />
        <Button size="large" />
    </>
);
