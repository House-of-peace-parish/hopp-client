"use client";

import dynamic from "next/dynamic";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const StoreProvider = dynamic(() => import("@/store/StoreProvider"), { ssr: false })

export default function StoreProviderClient({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
            easing: 'ease-in-sine',
            offset: 100
        })
    }, []);

    return <StoreProvider>{children}</StoreProvider>;
}