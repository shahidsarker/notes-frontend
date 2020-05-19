import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Toggleable from './Toggleable'
import { render, fireEvent } from '@testing-library/react'

describe('<Toggleable />', () => {
  let component

  beforeEach(() => {
    component = render(
      <Toggleable buttonLabel="show...">
        <div className="testDiv" />
      </Toggleable>
    )
  })

  test('renders its children', () => {
    expect(component.container.querySelector('.testDiv')).toBeDefined()
  })

  test('at start the children are not displayed', () => {
    const div = component.container.querySelector('.toggleableContent')

    expect(div).toHaveStyle('display: none')
  })

  test('after clicking the button, children are displayed', () => {
    const button = component.getByText('show...')
    fireEvent.click(button)

    const div = component.container.querySelector('toggleableContent')
    expect(div).not.toHaveStyle('display: none')
  })
})
