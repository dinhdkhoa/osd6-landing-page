'use client'
import React from 'react'
import { Button } from '../ui/button';
import { ChevronUp } from 'lucide-react';

const BackToTopBtn = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <Button size={'icon'} className="absolute right-0 -top-4 bg-gray-700 rounded-full p-1"
            aria-label="Scroll to top" onClick={scrollToTop}>
            <ChevronUp size={20} />
        </Button>
    )
}

export default BackToTopBtn