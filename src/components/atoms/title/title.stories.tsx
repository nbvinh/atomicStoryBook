import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Title from ".";

export default {
  title: "Example/Title",
  component: Title,
  // argTypes: {
  //   onClick: { action: "clicked" },
  // },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Title",
};
