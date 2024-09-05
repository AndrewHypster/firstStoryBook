import React from "react";
import InputAnnotation from "../components/InputAnnotation/InputAnnotation";

export default {
  title: "InputAnnotation",
  component: InputAnnotation,
};

const Template = args => <InputAnnotation {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'default'
}

export const Error = Template.bind({})
Error.args = {
  type: 'error'
}

export const Disabled = Template.bind({})
Disabled.args = {
  type: 'disabled'
}