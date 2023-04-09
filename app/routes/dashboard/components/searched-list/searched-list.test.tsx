import React from 'react'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { ToastProvider } from '../../../../components'
import { Dashboard_items } from '../../types/Dashboard'
import { itemsMock } from '../../../../__mocks__'
import { SearchedList } from './searched-list'

describe('Searched List', () => {
  const customRender = (items: Dashboard_items[] = []) => {
    return (
      <MockedProvider>
        <ToastProvider>
          <SearchedList items={items} />
        </ToastProvider>
      </MockedProvider>
    )
  }

  it('renders', () => {
    render(customRender())
    expect(screen.getByText(/search results/i)).toBeInTheDocument
  })

  it('renders an empty list', () => {
    render(customRender())
    expect(screen.getByText(/no results/i)).toBeInTheDocument()
  })

  it('renders a list of items', () => {
    render(customRender(itemsMock))
    expect(screen.getAllByRole('checkbox')).toHaveLength(itemsMock.length)

    itemsMock.forEach((i) => {
      expect(screen.getByText(i.name)).toBeInTheDocument()
    })
  })
})
