import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type DividerProps = {
    className?: string;
};


const Divider = ({ className }: DividerProps) => {
    const baseStyles = "w-12 mx-auto border-2 border-blue-500 rounded-input";

    return <hr className={twMerge(clsx(baseStyles, className))} />;
};

export default Divider;