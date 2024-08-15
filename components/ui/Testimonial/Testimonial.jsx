import SectionWrapper from "@/components/SectionWrapper"
import GradientWrapper from "@/components/GradientWrapper"
import user1 from "@/public/testimonial/user1.png"
import user2 from "@/public/testimonial/user1.png"
import user3 from "@/public/testimonial/user1.png"
import user4 from "@/public/testimonial/user1.png"
import user5 from "@/public/testimonial/user1.png"
import user6 from "@/public/testimonial/user1.png"
import Image from "next/image"
import LayoutEffect from "@/components/LayoutEffect"

const Testimonial = () => {

    const testimonials = [
        {
            avatar: user1,
            name: "John Smith",
            title: "Software Developer",
            quote: "“This VPN has been a game-changer for me. The security and speed are unmatched, making it perfect for my development work.”"
        },
        {
            avatar: user2,
            name: "Emily Johnson",
            title: "Graphic Designer",
            quote: "“I love how easy it is to use this VPN. It keeps my data safe while I work on client projects from anywhere.”"
        },
        {
            avatar: user3,
            name: "Michael Brown",
            title: "IT Consultant",
            quote: "“As an IT consultant, I need reliable security. This VPN provides top-notch protection and seamless connectivity.”"
        },
        {
            avatar: user4,
            name: "Sarah Davis",
            title: "Digital Marketer",
            quote: "“This VPN has been essential for my remote work. It ensures my online activities are secure and private.”"
        },
        {
            avatar: user5,
            name: "David Wilson",
            title: "Network Engineer",
            quote: "“The performance and security of this VPN are outstanding. It’s a must-have for anyone in the tech industry.”"
        },
        {
            avatar: user6,
            name: "Jessica Martinez",
            title: "Freelance Writer",
            quote: "“I travel frequently for work, and this VPN gives me peace of mind knowing my data is always protected.”"
        },
    ]

    return (
        <SectionWrapper>
            <div id="testimonials" className="custom-screen text-gray-300">
                <div className="max-w-2xl text-center md:mx-auto">
                    <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                        ConSecure is essential for you.
                    </h2>
                </div>
                <GradientWrapper wrapperClassName="max-w-sm h-40 top-12 inset-x-0" className="mt-12">
                    <LayoutEffect
                        className="duration-1000 delay-300"
                        isInviewState={{
                            trueState: "opacity-1",
                            falseState: "opacity-0 translate-y-12"
                        }}
                    >
                        <ul className="grid gap-6 duration-1000 delay-300 ease-in-out sm:grid-cols-2 lg:grid-cols-3">
                            {
                                testimonials.map((item, idx) => (
                                    <li key={idx} className="p-4 rounded-xl border border-gray-800"
                                        style={{
                                            backgroundImage: "radial-gradient(100% 100% at 50% 50%, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0) 100%)"
                                        }}
                                    >
                                        <figure className="flex flex-col justify-between gap-y-6 h-full">
                                            <blockquote className="">
                                                <p className="">
                                                    {item.quote}
                                                </p>
                                            </blockquote>
                                            <div className="flex items-center gap-x-4">
                                                <Image
                                                    src={item.avatar}
                                                    alt={item.name}
                                                    className="w-14 h-14 rounded-full object-cover"
                                                />
                                                <div>
                                                    <span className="block text-gray-50 font-semibold">{item.name}</span>
                                                    <span className="block text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ))
                            }
                        </ul>
                    </LayoutEffect>
                </GradientWrapper>
            </div>
        </SectionWrapper>
    )
}

export default Testimonial