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
  name: "Rise and shine",
  duration: "00:30",
  intervaltime: "00:01",
  prepTime: "10 sec",
  isPlaying: false,
  isStopped: false,
  isPaused: false,
  isToggled: false,
};
