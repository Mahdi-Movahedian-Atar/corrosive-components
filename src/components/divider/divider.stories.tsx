import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Divider, DividerProps } from "./divider";

const meta: Meta<DividerProps> = {
  component: Divider,
};

type Story = StoryObj<DividerProps>;

export default meta;

export const Primary: Story = {
  args: {
    vertical: false,
    offset: 50,
    variant: "outlined",
    color: "primary",
    style: { height: "500px", width: "500px" },
    class: undefined,
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
  },
  render: (props) => (
    <Divider {...props}>
      <div q:slot={"firstPanel"}>First Panel</div>
      <div q:slot={"secondPanel"}>Second Panel</div>
    </Divider>
  ),
};
