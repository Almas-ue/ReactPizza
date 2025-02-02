import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    className?: string,
}

const Container: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={cn("container max-w-[1245px] h-full mx-auto", className)}>
            {children}
        </div>
    )
}

export default Container
