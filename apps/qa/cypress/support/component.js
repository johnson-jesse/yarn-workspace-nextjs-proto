// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import './commands'

import { mount } from 'cypress/react18'

function _mount(jsx, options, rerenderKey) {
    return mount(<div style={{ border: '2px solid orange' }} children={jsx} />);
}

Cypress.Commands.add('mount', _mount)