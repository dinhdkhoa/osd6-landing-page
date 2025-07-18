import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface SectionHeaderProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const SectionHeader = ({ children, className, id }: SectionHeaderProps) => {
    return (
        <h2 
            id={id}
            className={cn(
                "font-semibold text-2xl md:text-4xl tracking-wide",
                className
              )}
        >
            {children}
        </h2>
    )
}

export default SectionHeader