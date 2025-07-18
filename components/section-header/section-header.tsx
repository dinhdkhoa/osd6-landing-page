import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const SectionHeader = ({ children, className }: {children: ReactNode, className?: string}) => {
    return (
        <h2 className={cn(
                "font-semibold text-2xl md:text-4xl tracking-wide",
                className
              )}>{children}</h2>

    )
}

export default SectionHeader