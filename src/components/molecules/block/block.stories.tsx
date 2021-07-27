import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Block from ".";

export default {
  title: "Example/Block",
  component: Block,
  // argTypes: {
  //   onClick: { action: "clicked" },
  // },
} as ComponentMeta<typeof Block>;

const Template: ComponentStory<typeof Block> = (args) => <Block {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Atom",
  button: "Learn more",
  children: (
    <p>
      An atom is the smallest constituent unit of ordinary matter that has the
      properties of a chemical element. Every solid, liquid, gas, and plasma is
      composed of neutral or ionized atoms. Atoms are very small; typical sizes
      are around 100 picometers (a ten-billionth of a meter, in the short
      scale).
    </p>
  ),
};
