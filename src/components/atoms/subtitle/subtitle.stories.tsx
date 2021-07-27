import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Subtitle from ".";

export default {
  title: "Example/Subtitle",
  component: Subtitle,
  // argTypes: {
  //   onClick: { action: "clicked" },
  // },
} as ComponentMeta<typeof Subtitle>;

const Template: ComponentStory<typeof Subtitle> = (args) => <Subtitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Subtitle",
};
