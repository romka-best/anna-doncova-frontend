import React, { useEffect, useRef } from 'react';
import cn from 'classnames';

import CloseIcon from 'public/icons/close.svg';
import Button, { ButtonColor } from 'ui/Button';

type ModalProps = {
    className?: string;
    isOpen: boolean;
    showCloseButton?: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
};

export default function Modal({ className, isOpen, showCloseButton = true, onClose, title, children }: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEsc);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-[2.4rem]" onClick={handleOutsideClick}>
            <div
                ref={modalRef}
                className={cn('relative max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-[#212121] p-12 sm:p-[1.6rem]', className)}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between gap-6">
                    <h3 className="text-3xl font-semibold uppercase text-white sm:text-2xl">{title}</h3>
                    {showCloseButton && <Button className="p-0" color={ButtonColor.Transparent} onClick={onClose} iconLeft={<CloseIcon />} />}
                </div>
                {children}
            </div>
        </div>
    );
}
