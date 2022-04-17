import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ToggleSwitch, ToggleSwitchProps } from '../';

const meta: Meta = {
  title: 'Input/Toggle Switch',
  component: ToggleSwitch,
  argTypes: {
    onClick: { action: 'clicked' },
    enabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} />;

export const _ToggleSwitch = Template.bind({});

_ToggleSwitch.args = {
  enabled: true,
};
