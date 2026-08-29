import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    return (
        <section className="footer-section">
            <img
                src="/images/footer-dip.png"
                alt=""
                className="w-full object-cover -translate-y-1"
            />
