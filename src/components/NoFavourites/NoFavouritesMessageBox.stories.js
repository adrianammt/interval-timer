import React from "react";
import NoClassMessageBox from "./NoClassMessageBox";

export default {
  title: "MessageBox",
  component: NoClassMessageBox,
};

const Template = (args) => <NoClassMessageBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "Let's add some classes!",
};
