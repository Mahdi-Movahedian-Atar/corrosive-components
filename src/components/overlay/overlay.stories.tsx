import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Overlay, OverlayProps } from "./overlay";

const meta: Meta<OverlayProps> = {
  component: Overlay,
};

type Story = StoryObj<OverlayProps>;

export default meta;

export const Primary: Story = {
  args: {
    open: false,
    color: "primary",
    opacity: 0.5,
    closeOnClick: true,
    class: undefined,
    style: {
      height: "100%",
      width: "100%",
      position: "fixed",
    },
  },
  argTypes: {
    color: {
      options: ["success", "error", "warning", "accent", "primary"],
      control: { type: "radio" },
    },
  },
  render: (props) => <Overlay {...props}>Overlay</Overlay>,
};
