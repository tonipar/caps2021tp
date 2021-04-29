import React from "react";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  intent: "primary",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  intent: "secondary",
  label: "Button",
};

export const Default = Template.bind({});
Default.args = {
  label: "Button",
};
