import { Footer } from "../Footer"
import { Header } from "../Header"

export const Default = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}