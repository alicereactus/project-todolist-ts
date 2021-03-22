import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { AddItemForm, AddItemFormPropsType } from '../components/AddItemForm/AddItemForm';

export default {
  title: 'Todolist/AddItemForm',
  component: AddItemForm,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {
        description: 'AddItemFormExample clicked'
    },
  },
} as Meta;

const Template: Story<AddItemFormPropsType> = (args) => <AddItemForm {...args} />;

export const AddItemFormExample = Template.bind({});
AddItemFormExample.args = {
  addItem: action('AddItemFormExample clicked'),
};