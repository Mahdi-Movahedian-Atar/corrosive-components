import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Progress, ProgressProps } from "./progress";

const meta: Meta<ProgressProps> = {
  component: Progress,
};

type Story = StoryObj<ProgressProps>;

export default meta;

export const Primary: Story = {
  args: {
    type: "circular",
    size: 100,
    width: 10,
    progress: 0,
    class: undefined,
    style: {
      display: "inline-flex",
      height: "100%",
      width: "100%",
      alignContent: "center",
    },
    variant: "infinite",
    color: "primary",
  },
  argTypes: {
    variant: {
      options: ["infinite", "value", "withLabel"],
      control: { type: "radio" },
    },
    color: {
      options: ["success", "error", "warning", "accent", "primary"],
      control: { type: "radio" },
    },
    type: {
      options: ["circular", "linear"],
      control: { type: "radio" },
    },
  },
  render: (props) => <Progress {...props}></Progress>,
};
