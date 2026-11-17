import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/dom'
import { MemoryRouter } from 'react-router'
import ContactCreate from '../src/components/Contact/ContactCreate'

vi.mock('react-use', () => ({
  useLocalStorage: () => ['', vi.fn()]
}))

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
  it('mentesting nilai inputan saat user mengetik', () => {
    render(
      <MemoryRouter>
        <ContactCreate />
      </MemoryRouter>
    )

    const firstNameInput = screen.getByLabelText('First Name')
    const lastNameInput = screen.getByLabelText('Last Name')
    const emailInput = screen.getByLabelText('Email')
    const phoneInput = screen.getByLabelText('Phone')

    fireEvent.change(firstNameInput, { target: { value: 'Mochammad' } })
    fireEvent.change(lastNameInput, { target: { value: 'Khabib' } })
    fireEvent.change(emailInput, { target: { value: 'khabib@example.com' } })
    fireEvent.change(phoneInput, { target: { value: '081234567890' } })

    expect(firstNameInput.value).toBe('Mochammad')
    expect(lastNameInput.value).toBe('Khabib')
    expect(emailInput.value).toBe('khabib@example.com')
    expect(phoneInput.value).toBe('081234567890')
  })
})
