import { ReactNode } from "react"

type Props = {
    children: ReactNode,
}

const Container: React.FC<Props> = ({ children }) => {
    return (
        <div className="container max-w-[1245px] h-full mx-auto">
            {children}
        </div>
    )
}

export default Container
