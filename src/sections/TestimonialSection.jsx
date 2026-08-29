import { useGSAP } from "@gsap/react"
import { cards } from "../constants"
import gsap from "gsap"

const TestimonialSection = () => {


    useGSAP(() => {
        gsap.set('.testimonials-section', {
            marginTop: "-100vh",
        });

        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.testimonials-section',
                scrub: true,
                start: 'top bottom',
                end: '200% top'
            }
        });

        titleTl
            .to('.testimonials-section .first-title', {
                xPercent: 75
            }, "<")
            .to('.testimonials-section .sec-title-one', {
                xPercent: -30
            }, "<")
            .to('.testimonials-section .sec-title-two', {
                xPercent: 30
            }, "<")
            .to('.testimonials-section .third-title', {
                xPercent: -75
            }, "<")



        const pintTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.testimonials-section',
                scrub: true,
                start: 'top top',
                end: '150% top',
                pin: true
            }
        });

        pintTl.from('.vd-card', {
            yPercent: 150,
            stagger: 0.2,
            ease: "power1.inOut",

        })
    });



    return (
        <section className="testimonials-section">
            <div className="absolute size-full flex flex-col items-center pt-0 -mt-10">
                <h1 className="text-black first-title">What's</h1>

                {/* Combined row container */}
                <div className="flex flex-row items-center text-light-brown">
                    <h1 className="sec-title-one">Every</h1>
                    <h1 className="sec-title-two">one</h1>
                </div>

                <h1 className="text third-title">talking</h1>
            </div>

            <div className="pin-box h-screen w-full flex items-center justify-center">
                {cards.map((vid, index) => (
                    <div
                        key={index}
                        className={`vd-card ${vid.translation} ${vid.rotation}`}>

                        <video src={vid.src} playsInline muted loop autoPlay className="size-full object-cover" />
                    </div>
                ))}
            </div>

        </section>
    )
}