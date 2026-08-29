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

            <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
                <div className="overflow-hidden z-10">
                    <h1 className="general-title text-center text-milk py-5">
                        #CHUGRESPONSIBLY
                    </h1>
                </div>

                {isMobile ? (
                    <img
                        src="/images/footer-drink.png"
                        className="absolute top-0 object-contain"
                    />
                ) : (
                    <video
                        src="/videos/splash.mp4"
                        autoPlay
                        playsInline
                        muted
                        className="absolute top-0 object-contain mix-blend-lighten"
                    />
                )}

                <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
                    <div className="social-btn">
                        <img src="./images/yt.svg" alt="" />