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
import './commands';
import { mount } from 'cypress/react18';
import { Theme } from '@fizzog/ui';

function inject(jsx: JSX.Element) {
  return mount(<Theme>{jsx}</Theme>);
}

Cypress.Commands.add('inject', inject);
