import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Input, type InputProps } from "./input";
import { $ } from "@builder.io/qwik";
import { Button } from "../button/button";

const meta: Meta<InputProps> = {
  component: Input,
};

type Story = StoryObj<InputProps>;

export default meta;

export const Primary: Story = {
  args: {
    value: 55665,
    placeholder: undefined,
    disabled: false,
    variant: "solid",
    color: "primary",
    raised: false,
    rounded: false,
    floatingPlaceholder: true,
    class: "",
    style: {
      height: "fit-content",
      width: "fit-content",
    },
    onChange: $((value) => {
      console.log(value);
    }),
    type: "text",
    min: Number.MIN_VALUE,
    max: Number.MAX_VALUE,
  },
  argTypes: {
    variant: {
      options: ["solid", "outlined", "text"],
      control: { type: "radio" },
    },
    color: {
      options: ["success", "error", "warning", "accent", "primary"],
      control: { type: "radio" },
    },
    type: {
      options: ["text", "number", "password", "color"],
      control: { type: "radio" },
    },
  },
  render: (props) => (
    <Input {...props}>
      {" "}
      <Button q:slot={"left"}>left</Button>{" "}
      <Button q:slot={"right"}>left</Button>{" "}
    </Input>
  ),
};
