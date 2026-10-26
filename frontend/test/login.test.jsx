import { describe, expect } from "vitest"
import { it } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/dom"
import { MemoryRouter } from "react-router"
import UserLogin from "../src/components/User/UserLogin"

describe("UserLogin", () => { 
    it("menampilkan form login", () => {
        render(
            <MemoryRouter>
                <UserLogin/>
            </MemoryRouter>
        );

        expect(screen.getByRole("heading", { name: "Contact Management" }))

        expect(screen.getByLabelText("Username"))

        expect(screen.getByLabelText("Password"))

        expect(screen.getByRole("button", { name: /sign in/i }))
    })
 })