import React from "react";
import InputGroup from "../components/InputGroup/InputGroup";

export default {
  title: "InputGroup",
  component: InputGroup,
};

const Template = args => <InputGroup {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Input...',
  type: 'default'
}

export const Hover = Template.bind({})
Hover.args = {
  children: 'Input...',
  type: 'hover'
}

export const Focus = Template.bind({})
Focus.args = {
  children: 'Input...',
  type: 'focus'
}

export const Error = Template.bind({})
Error.args = {
  children: 'Input...',
  type: 'error'
}

export const ErrorFocus = Template.bind({})
ErrorFocus.args = {
  children: 'Input...',
  type: 'error-focus'
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Input...',
  type: 'disabled'
}