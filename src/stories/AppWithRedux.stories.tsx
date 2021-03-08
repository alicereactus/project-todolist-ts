import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { ReduxStoreProviderDecorator } from './decorators/ReduxStoreProviderDecorator';
import App from '../app/App';

export default {
    title: 'Todolist/AppWithRedux',
    component: App,
    decorators: [ReduxStoreProviderDecorator]
} as Meta;

const Template: Story = (args) => <App {...args} />


export const AppWithReduxExample = Template.bind({});
AppWithReduxExample.args = {};