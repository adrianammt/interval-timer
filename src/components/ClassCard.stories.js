import React from "react";

import ClassCard from "./ClassCard";

export default {
  title: "Example/ClassCard",
  component: ClassCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ClassCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 1,
  name: "Good morning Sunshine",
  duration: "00:30",
  intervalTime: "00:01",
};
