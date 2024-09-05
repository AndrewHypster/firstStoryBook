import React from "react";
import InputText from "../components/InputText/InputText";

export default {
  title: "InputText",
  component: InputText,
};

const Template = args => <InputText {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Input...',
}