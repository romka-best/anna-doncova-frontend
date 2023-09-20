'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';

import ChevronIcon from 'public/icons/chevron.svg';

import Checkbox from '../Checkbox';

interface DropdownProps {
    className?: string;
    isMultiply?: boolean;
    labelText: string;
    placeholderText: string;
    items: Array<string>;
    selectedItems: Array<string>;
    onSelect: (items: Array<string>) => void;
}

export default function Dropdown({ className, labelText, placeholderText, items, isMultiply = false, selectedItems, onSelect }: DropdownProps) {
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const [isOpen, setIsOpen] = useState(false);

    const handleItemClick = (item: string) => {
        let newSelectedItems: Array<string>;
        if (selectedItems.includes(item)) {
            if (isMultiply) {
                newSelectedItems = selectedItems.filter((selectedItem) => selectedItem !== item);
            } else {
                newSelectedItems = [];
            }
        } else {
            if (isMultiply) {
                newSelectedItems = [...selectedItems, item];
            } else {
                newSelectedItems = [item];
            }
        }
        onSelect(newSelectedItems);
    };

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside, isOpen]);

    return (
        <div ref={dropdownRef} className={cn('relative flex flex-col gap-4', className)}>
            <label className="text-base text-white">{labelText}</label>
            <div className="flex cursor-pointer justify-between border-b border-white py-4 hover:border-[#FF11E7]" onClick={() => setIsOpen((prev) => !prev)}>
                <p className={cn('text-lg', selectedItems.length ? 'text-white' : 'text-[#9D9D9D]')}>{selectedItems.join(', ') || placeholderText}</p>
                <div className="h-[2.4rem] w-[2.4rem]">
                    {isOpen ? <ChevronIcon className="h-[2.4rem] w-[2.4rem] -rotate-90" /> : <ChevronIcon className="h-[2.4rem] w-[2.4rem] rotate-90" />}
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        className="absolute inset-y-full z-50 mt-4 flex h-72 w-full flex-col overflow-y-scroll rounded-[2.5rem] bg-[#393939] p-6"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                    >
                        {items.map((item, index) => (
                            <motion.li
                                key={item}
                                className="cursor-pointer border-b border-[#585858] text-lg text-white hover:border-white hover:text-[#FF11E7]"
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: -10,
                                        transition: { duration: 0.2 },
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { delay: index * 0.1 },
                                    },
                                }}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                {isMultiply ? (
                                    <Checkbox
                                        className="px-6 py-3"
                                        checked={selectedItems.includes(item)}
                                        label={item}
                                        onChange={() => handleItemClick(item)}
                                    />
                                ) : (
                                    <p className="px-6 py-3" onClick={() => handleItemClick(item)}>
                                        {item}
                                    </p>
                                )}
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}
