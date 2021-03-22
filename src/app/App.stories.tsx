import React from 'react'
import { action } from '@storybook/addon-actions'
import App from './App'
import { ReduxStoreProviderDecorator } from '../stories/decorators/ReduxStoreProviderDecorator'
import { BrowserRouter } from 'react-router-dom'

export default {
    title: 'App Stories',
    component: App,
    decorators: [ReduxStoreProviderDecorator]
}

export const AppBaseExample = (props: any) => {
    return (
        <BrowserRouter>
            <App demo={true} />
        </BrowserRouter>
    )
}
