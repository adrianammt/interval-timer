import React from "react";
import ClassCard from "./ClassCard";

export default {
  title: "ClassCard",
  component: ClassCard,
};

const Template = (args) => <ClassCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  name: "Good morning Sunshine",
  duration: "00:30",
  intervalTime: "00:01",
  onRemoveClassClick() {
    console.log("Clicked");
  },
};
