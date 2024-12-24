'use client'
import React from 'react';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import breadcrumbImg from "@/media/breadcrumb_bg.png"

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    items?: BreadcrumbItem[];
    onNavigate?: (href: string) => void;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
    items = [],
    onNavigate
}) => {
    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ): void => {
        e.preventDefault();
        onNavigate?.(href);
    };

    return (
        <nav className="relative w-full">
            <Image src={breadcrumbImg} alt='breadcrumb img' className='' />
            <div className='absolute top-0 left-0 w-full h-full bg-[#1f1e1740] flex flex-col items-center justify-center gap-4'>
                <div className='flex items-center justify-center space-x-2'>
                    <Link
                        href="/"
                        onClick={(e) => handleClick(e, "/")}
                        className="flex items-center text-[#FFFFFFB2]"
                    >
                        Home
                    </Link>

                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            <FiChevronRight className="w-4 h-4 text-[#FFFFFFB2]" />
                            {index === items.length - 1 ? (
                                <span className="font-medium text-[#FFFFFFB2]">{item.label}</span>
                            ) : (
                                <Link
                                    href={item.href}
                                    onClick={(e) => handleClick(e, item.href)}
                                    className="text-[#FFFFFFB2]"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <h5 className='text-[50px] font-[800] leading-[60px] text-[#fff]'>{items[items.length - 1].label}</h5>
            </div>
        </nav>
    );
};

export default Breadcrumb;