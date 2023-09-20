'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Logo from 'public/logo.svg';
import ChevronIcon from 'public/icons/chevron.svg';
// import TelegramIcon from 'public/icons/telegram.svg';
// import WhatsAppIcon from 'public/icons/whatsapp.svg';

export default function Footer() {
    return (
        <footer className="relative z-10 mx-24 mb-12 mt-24 flex flex-col gap-8 rounded-[2.5rem] bg-[#212121] p-12 lg:mx-16 sm:mx-10 sm:mt-[4.8rem] sm:gap-10 sm:p-[1.6rem]">
            <Link href="/">
                <Logo />
            </Link>
            <div className="flex justify-between lg:flex-col lg:gap-12">
                <motion.a
                    className="flex cursor-pointer items-center gap-6 rounded-[2.5rem] bg-[#393939] p-12 lg:w-max sm:w-full sm:p-[1.6rem]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    href="https://t.me/AnnaGPT"
                    target="_blank"
                >
                    <div className="h-20 min-w-[5rem] rounded-[5rem] bg-[url('/telegram-logo.jpg')] bg-cover" />
                    <div className="flex flex-col gap-2">
                        <h4 className="text-2xl font-medium text-white">Telegram-канал курса</h4>
                        <p className="text-lg font-normal text-white sm:text-sm">Следите за&nbsp;новостями</p>
                    </div>
                    <ChevronIcon className="h-[3.2rem] min-w-[3.2rem]" />
                </motion.a>
                {/*  <div className="flex flex-col gap-8">
                    <h5 className="text-sm text-[#9D9D9D]">Социальные сети Анны</h5>
                    <div className="flex gap-8">
                        <motion.a
                            className="cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            href="https://t.me/ann_doncova"
                            target="_blank"
                        >
                            <TelegramIcon />
                        </motion.a>
                        <motion.a
                            className="cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            href="https://wa.me/79933561806"
                            target="_blank"
                        >
                            <WhatsAppIcon />
                        </motion.a>
                    </div>
                </div>  */}
            </div>
            <div className="flex flex-col gap-6">
                <p className="text-xs text-white">&copy;&nbsp;2023&nbsp;ИП Донцова А.В.</p>
                <p className="text-xs text-white">ИНН 026206137309</p>
                <p className="text-xs text-white">ОГРНИП 31302800005960</p>
            </div>
        </footer>
    );
}
