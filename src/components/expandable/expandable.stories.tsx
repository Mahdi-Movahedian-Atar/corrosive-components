import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Expandable, type ExpandableProps } from "./expandable";

const meta: Meta<ExpandableProps> = {
  component: Expandable,
};

type Story = StoryObj<ExpandableProps>;

export default meta;

export const Primary: Story = {
  args: {
    visible: false,
    direction: "down",
    variant: "solid",
    color: "primary",
    maxHeight: 100,
    class: "",
    style: {
      height: "fit-content",
      width: "fit-content",
      position: "relative",
    },
  },
  argTypes: {
    variant: {
      options: ["solid", "outlined", "text"],
      control: { type: "radio" },
    },
    direction: {
      options: ["down", "up", "left", "right"],
      control: { type: "radio" },
    },
    color: {
      options: ["success", "error", "warning", "accent", "primary"],
      control: { type: "radio" },
    },
  },
  render: (props) => (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        padding: "700px",
      }}
    >
      <label style={{ position: "relative" }}>
        ssssssssssssssssssssssssssssssssssssssssssssss
        <Expandable {...props}>
          Expandable Expandable Expandable Expandable Expandable Expandable
          Expandable Expandable Expandable
        </Expandable>
      </label>
    </div>
  ),
};
