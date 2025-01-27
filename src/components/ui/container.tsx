import { Children, ReactElement } from "react"

type Props = {
    children: JSX.Element,
}

const Container: React.FC<Props> = ({ children }) => {
    return (
        <div className="container max-w-[1245px] mx-auto">
            {children}
        </div>
    )
}

export default Container
