import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button, { ButtonSize, ButtonTheme } from "./index";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  children: "Button",
  size: ButtonSize.MEDIUM,
};

export const Large = Template.bind({});
Large.args = {
  children: "Button",
  size: ButtonSize.LARGE,
};

export const Rounded = Template.bind({});
Rounded.args = {
  children: "Button",
  theme: ButtonTheme.ROUNDED,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Button",
  disabled: true,
};
