import React from "react";
import PlayClassCard from "./PlayClassCard";

export default {
  title: "PlayClassCard",
  component: PlayClassCard,
};

const Template = (args) => <PlayClassCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  name: "Good morning Sunshine",
  duration: "00:30",
  intervalTime: "00:01",
  prepTime: "10 sec",
  isPlayed: false,
  isStopped: false,
  isPaused: false,
  isToggled: false,
};
