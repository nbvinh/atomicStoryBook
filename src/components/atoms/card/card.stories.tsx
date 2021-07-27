import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from ".";

export default {
  title: "Example/Card",
  component: Card,
  // argTypes: {
  //   onClick: { action: "clicked" },
  // },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Card",
};
