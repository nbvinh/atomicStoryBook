import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Feature from ".";
import view from "../../templates/default/index.module.css";
import Block from "../../molecules/block";
export default {
  title: "Example/Feature",
  component: Feature,
  // argTypes: {
  //   onClick: { action: "clicked" },
  // },
} as ComponentMeta<typeof Feature>;

const Template: ComponentStory<typeof Feature> = (args) => (
  <Feature {...args} />
);

export const FeatureBlock = Template.bind({});
FeatureBlock.args = {
  className: view.hero,
  image:
    "https://i.pinimg.com/originals/7e/d6/1a/7ed61a337b0cccb1598fe5fd1b9724bf.jpg",
  children: (
    <Block title="Atom" button="Learn more">
      <p>
        An atom is the smallest constituent unit of ordinary matter that has the
        properties of a chemical element. Every solid, liquid, gas, and plasma
        is composed of neutral or ionized atoms. Atoms are very small; typical
        sizes are around 100 picometers (a ten-billionth of a meter, in the
        short scale).
      </p>
    </Block>
  ),
};
