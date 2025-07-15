
import { Header } from "../Header"
import { Main } from "../Main"
import { Footer } from "../Footer"
import type { FC, ReactNode } from "react"

type Props = {
    children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {

    return (

        <>
            <Header />
            <div className="d-flex flex-grow-1">
                <Main>
                    { children }
                </Main>
            </div>
            <Footer />
        </>
    )
}

export { Layout }