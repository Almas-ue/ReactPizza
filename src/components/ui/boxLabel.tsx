import React from "react"
import { Checkbox } from "./checkbox"
import { cn } from "@/lib/utils"

interface Props {
    classNameCheck?: string,
    classNametext?: string,
    nameBox: string,
}

const BoxLabel: React.FC<Props> = ({ classNameCheck, classNametext, nameBox }) => {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox id={nameBox} className={cn("size-6 rounded-lg border-none bg-gray-100", classNameCheck)} />
            <label
                htmlFor={nameBox}
                className={cn("font-regular text-base cursor-pointer", classNametext)}
            >
                {nameBox}
            </label>
        </div>
    )
}

export default BoxLabel
