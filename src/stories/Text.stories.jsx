import React from "react";
import Text from "./Text";

export default {
    title: "Text",
    component: Text,
    argTypes: {}
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "I am a fancy text",
    variant: "p"
};

export const Span = Template.bind({});
Span.args = {
    children: "I am a fancy text, and my tag is <span>",
    variant: "span"
};

export const WithFontsize = Template.bind({});
WithFontsize.args = {
    ...Default.args,
    size: 32
};

export const WithColor = Template.bind({});
WithColor.args = {
    ...Default.args,
    color: "red"
};

export const WithWeight = Template.bind({});
WithWeight.args = {
    ...Default.args,
    weight: 500
};

export const AllWeights = () => (
    <>
        <Text weight={300}>I am a fancy text and my weight is 300</Text>
        <Text weight={400}>I am a fancy text and my weight is 400</Text>
        <Text weight={500}>I am a fancy text and my weight is 500</Text>
    </>
);

export const Composition = () => (
    <>
        <Text size={16}>I am a fancy text</Text>
        <Text size={26}>I am a fancy text</Text>
        <Text size={36}>I am a fancy text</Text>
        <Text size={46}>I am a fancy text</Text>
    </>
);
