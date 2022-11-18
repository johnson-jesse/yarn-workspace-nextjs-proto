import { SimpleDialog } from '@fizzog/sx'

describe('SimpleDialog.cy.js', () => {
  it('playground', () => {
    cy.inject(<SimpleDialog open={false} title={''} children={undefined}></SimpleDialog>)
    
  })
})