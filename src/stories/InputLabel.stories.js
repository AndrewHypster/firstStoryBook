import React from "react";
import InputLabel from "../components/InputLabel/InputLabel";

export default {
  title: "InputLabel",
  component: InputLabel,
};

const Template = args => <InputLabel {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'default'
}

export const Disabled = Template.bind({})
Disabled.args = {
  type: 'disabled'
}