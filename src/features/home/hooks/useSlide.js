import { useEffect } from "react";
import { useState } from "react";
import { movies } from "../../../data/movies";
function useSlide() {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % 4);
        }, 3000);
        return () => clearTimeout(timer);
    }, [currentIndex]);
    return [currentIndex, setCurrentIndex];
}

export default useSlide;