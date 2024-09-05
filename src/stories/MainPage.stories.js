import React from "react";
import MainPage from "../components/MainPage/MainPage";

export default {
  title: "MainPage",
  component: MainPage,
};

const Template = args => <MainPage {...args} />

export const Light = Template.bind({})
Light.args = {
  children: 'Input...',
  theme: 'light'
}

export const Dark = Template.bind({})
Dark.args = {
  children: 'Input...',
  theme: 'dark'
}