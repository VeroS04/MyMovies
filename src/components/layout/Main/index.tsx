
//import "./style.scss";

import type { FC, ReactNode } from "react"

type Props = {
    children: ReactNode
}

const Main: FC<Props> = ({ children }) => {

    return (
        <main className="main main-color flex-grow-1">
            { children }
        </main>
    )

}

export { Main }