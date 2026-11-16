import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/dom'
import { MemoryRouter } from 'react-router'
import ContactCreate from '../src/components/Contact/ContactCreate'

vi.mock('react-use', () => ({
  useLocalStorage: () => ['', vi.fn()]
}))
// cek router
describe('ContactCreate', () => {
  it('menampilkan form tambah kontak', () => {
    render(
      <MemoryRouter>
        <ContactCreate />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: /create new contact/i }))
    expect(screen.getByLabelText('First Name'))
    expect(screen.getByLabelText('Last Name'))
    expect(screen.getByLabelText('Email'))
    expect(screen.getByLabelText('Phone'))
    expect(screen.getByRole('button', { name: /create contact/i }))
  })
})
