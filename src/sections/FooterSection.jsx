import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",