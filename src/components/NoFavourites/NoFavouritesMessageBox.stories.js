import React from "react";
import NoFavouritesMessageBox from "./NoFavouritesMessageBox";

export default {
  title: "FavouritesMessageBox",
  component: NoFavouritesMessageBox,
};

const Template = (args) => <NoFavouritesMessageBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "You have no favourite classes yet.",
};
