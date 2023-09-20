'use client';
import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

import { WindowSizeProvider } from 'providers/WindowSizeProvider';

export default function AnimationWrapper({ children }: PropsWithChildren) {
    return (
        <WindowSizeProvider>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                {children}
            </motion.div>
        </WindowSizeProvider>
    );
}
