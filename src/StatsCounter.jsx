    import { useState, useEffect, useRef } from "react";
    import { useInView } from "framer-motion"; // Correctly import from 'framer-motion'

    export default function StatsCounter({ number, label }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null); // Ref for the element
    const isInView = useInView(ref, { once: true }); // Detect if the element is in view

    useEffect(() => {
        if (isInView) {
        let start = 0;
        const duration = 2000; // ms
        const increment = Math.ceil(number / (duration / 16)); // 60fps

        const timer = setInterval(() => {
            start += increment;
            if (start > number) {
            setCount(number);
            clearInterval(timer);
            } else {
            setCount(start);
            }
        }, 16);

        return () => clearInterval(timer);
        }
    }, [isInView, number]);

    return (
        <div ref={ref} className="text-center p-6 bg-white rounded-xl shadow-sm">
        <div className="relative">
            <div className="text-4xl font-bold text-primary mb-2 text-[#FF5A3C]">{count}</div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/10 rounded-full"></div>
        </div>
        <p className="text-gray-600">{label}</p>
        </div>
    );
    }
