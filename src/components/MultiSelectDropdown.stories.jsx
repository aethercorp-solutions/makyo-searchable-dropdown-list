import React from 'react';
import MultiSelectDropdown from './MultiSelectDropdown';
import './MultiSelectDropdown.css';

export default {
  title: 'Components/MultiSelectDropdown',
  component: MultiSelectDropdown,
  tags: ['autodocs'],
  argTypes: {
    filtering: { control: 'boolean' },
    multiple: { control: 'boolean' },
    outlined: { control: 'boolean' },
    optionLabel: { control: 'text' },
    usePortal: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
};

const Template = (args) => <MultiSelectDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option with icon' },
    { id: 3, name: 'Long Long Long Option 3' },
    { id: 4, name: 'Long Long Long Long Option 4' },
    { id: 5, name: 'Long Long Long Long Long Option 5' },
    { id: 6, name: 'Long Long Long Long Long Long Option 6' },
  ],
  optionLabel: 'name',
  multiple: true,
  outlined: false,
  filtering: true,
  usePortal: false,
  placeholder: 'Select options...',
};
