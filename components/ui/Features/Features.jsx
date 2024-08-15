import LayoutEffect from "@/components/LayoutEffect"
import SectionWrapper from "@/components/SectionWrapper"

const Features = () => {

    const featuresList = [
        {
            icon:
                <svg className="p-2" width="101px" height="101px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Warning / Shield_Check"> <path id="Vector" d="M15 9L11 13L9 11M20 10.165C20 16.7333 15.0319 19.6781 12.9258 20.6314L12.9231 20.6325C12.7016 20.7328 12.5906 20.7831 12.3389 20.8263C12.1795 20.8537 11.8215 20.8537 11.6621 20.8263C11.4094 20.7829 11.2972 20.7325 11.074 20.6314C8.9678 19.6781 4 16.7333 4 10.165V6.2002C4 5.08009 4 4.51962 4.21799 4.0918C4.40973 3.71547 4.71547 3.40973 5.0918 3.21799C5.51962 3 6.08009 3 7.2002 3H16.8002C17.9203 3 18.4796 3 18.9074 3.21799C19.2837 3.40973 19.5905 3.71547 19.7822 4.0918C20 4.5192 20 5.07899 20 6.19691V10.165Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>,
            title: "Ad Block",
            desc: "Ad-Free Browsing Say goodbye to annoying ads and pop-ups with our built-in ad blocker, providing you with a cleaner and more enjoyable browsing experience."
        },
        {
            icon:
                <svg className="p-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 10C14 9.44771 13.5523 9 13 9H12.5C9.46243 9 7 11.4624 7 14.5C7 17.5376 9.46243 20 12.5 20H17.5C20.5376 20 23 17.5376 23 14.5C23 12.0091 21.3441 9.90488 19.073 9.22823C18.5098 9.06042 18 9.52887 18 10.1166V10.1683C18 10.6659 18.3745 11.0735 18.8345 11.2634C20.1055 11.788 21 13.0395 21 14.5C21 16.433 19.433 18 17.5 18H12.5C10.567 18 9 16.433 9 14.5C9 12.567 10.567 11 12.5 11H13C13.5523 11 14 10.5523 14 10Z" fill="#ffffff"></path> <path d="M11.5 4C14.5376 4 17 6.46243 17 9.5C17 12.5376 14.5376 15 11.5 15H11C10.4477 15 10 14.5523 10 14C10 13.4477 10.4477 13 11 13H11.5C13.433 13 15 11.433 15 9.5C15 7.567 13.433 6 11.5 6H6.5C4.567 6 3 7.567 3 9.5C3 10.9605 3.89451 12.212 5.16553 12.7366C5.62548 12.9264 6 13.3341 6 13.8317V13.8834C6 14.4711 5.49024 14.9396 4.92699 14.7718C2.65592 14.0951 1 11.9909 1 9.5C1 6.46243 3.46243 4 6.5 4H11.5Z" fill="#ffffff"></path> </g></svg>,
            title: "Enhanced privacy",
            desc: "Secure Your Data Protect your personal information with our top-notch encryption, ensuring your online activities remain private and secure."
        },
        {
            icon:
                <svg className="p-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 18C2 17.0681 2 16.6022 2.15224 16.2346C2.35523 15.7446 2.74458 15.3552 3.23463 15.1522C3.60218 15 4.06812 15 5 15H19C19.9319 15 20.3978 15 20.7654 15.1522C21.2554 15.3552 21.6448 15.7446 21.8478 16.2346C22 16.6022 22 17.0681 22 18C22 18.9319 22 19.3978 21.8478 19.7654C21.6448 20.2554 21.2554 20.6448 20.7654 20.8478C20.3978 21 19.9319 21 19 21H5C4.06812 21 3.60218 21 3.23463 20.8478C2.74458 20.6448 2.35523 20.2554 2.15224 19.7654C2 19.3978 2 18.9319 2 18Z" stroke="#ffffff" stroke-width="1.5"></path> <path d="M2 12C2 11.0681 2 10.6022 2.15224 10.2346C2.35523 9.74458 2.74458 9.35523 3.23463 9.15224C3.60218 9 4.06812 9 5 9H19C19.9319 9 20.3978 9 20.7654 9.15224C21.2554 9.35523 21.6448 9.74458 21.8478 10.2346C22 10.6022 22 11.0681 22 12C22 12.9319 22 13.3978 21.8478 13.7654C21.6448 14.2554 21.2554 14.6448 20.7654 14.8478C20.3978 15 19.9319 15 19 15H5C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12Z" stroke="#ffffff" stroke-width="1.5"></path> <path d="M2 6C2 5.06812 2 4.60218 2.15224 4.23463C2.35523 3.74458 2.74458 3.35523 3.23463 3.15224C3.60218 3 4.06812 3 5 3H19C19.9319 3 20.3978 3 20.7654 3.15224C21.2554 3.35523 21.6448 3.74458 21.8478 4.23463C22 4.60218 22 5.06812 22 6C22 6.93188 22 7.39782 21.8478 7.76537C21.6448 8.25542 21.2554 8.64477 20.7654 8.84776C20.3978 9 19.9319 9 19 9H5C4.06812 9 3.60218 9 3.23463 8.84776C2.74458 8.64477 2.35523 8.25542 2.15224 7.76537C2 7.39782 2 6.93188 2 6Z" stroke="#ffffff" stroke-width="1.5"></path> <circle cx="5" cy="12" r="1" fill="#ffffff"></circle> <circle cx="5" cy="6" r="1" fill="#ffffff"></circle> <circle cx="5" cy="18" r="1" fill="#ffffff"></circle> </g></svg>,
            title: "Many servers",
            desc: "Global Server Network Access a vast network of servers worldwide, giving you the freedom to connect from anywhere and enjoy unrestricted internet."
        },
        {
            icon:
                <svg className="p-2" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M96 170c40.869 0 74-33.131 74-74 0-40.87-33.131-74-74-74-40.87 0-74 33.13-74 74 0 40.869 33.13 74 74 74Z"></path><path stroke="#ffffff" stroke-linecap="round" stroke-width="12" d="M96 46a50 50 0 1 1 0 100"></path><path stroke="#ffffff" stroke-linecap="round" stroke-width="12" d="M96 70a26.003 26.003 0 0 1 24.021 16.05 26.012 26.012 0 0 1 0 19.9 26.023 26.023 0 0 1-5.636 8.435A26.015 26.015 0 0 1 96 122"></path></g></svg>,
            title: "Tor Tunneling",
            desc: "Enhanced Anonymity Utilize Tor tunneling for an extra layer of anonymity, making it nearly impossible for anyone to track your online movements."
        },
        {
            icon:
                <svg className="p-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.34315 17.6569C5.22433 16.538 4.4624 15.1126 4.15372 13.5607C3.84504 12.0089 4.00346 10.4003 4.60896 8.93853C5.21446 7.47672 6.23984 6.22729 7.55544 5.34824C8.87103 4.46919 10.4177 4 12 4C13.5823 4 15.129 4.46919 16.4446 5.34824C17.7602 6.22729 18.7855 7.47672 19.391 8.93853C19.9965 10.4003 20.155 12.0089 19.8463 13.5607C19.5376 15.1126 18.7757 16.538 17.6569 17.6569" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12L16 10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>,
            title: "Unlimited speed",
            desc: "Blazing Fast Connections Experience lightning-fast internet speeds without any lag, perfect for streaming, gaming, and browsing."
        },
        {
            icon:
                <svg className="p-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H9.67452C10.1637 5 10.4083 5 10.6385 5.05526C10.8425 5.10425 11.0376 5.18506 11.2166 5.29472C11.4184 5.4184 11.5914 5.59135 11.9373 5.93726L12.0627 6.06274C12.4086 6.40865 12.5816 6.5816 12.7834 6.70528C12.9624 6.81494 13.1575 6.89575 13.3615 6.94474C13.5917 7 13.8363 7 14.3255 7H17.8C18.9201 7 19.4802 7 19.908 7.21799C20.2843 7.40973 20.5903 7.71569 20.782 8.09202C21 8.51984 21 9.0799 21 10.2V15.8C21 16.9201 21 17.4802 20.782 17.908C20.5903 18.2843 20.2843 18.5903 19.908 18.782C19.4802 19 18.9201 19 17.8 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>,
            title: "Cloud Storage",
            desc: "Secure Cloud Storage Save your important files securely in our free cloud storage, accessible anytime and from any device."
        },
    ]

    return (
        <SectionWrapper>
            <div id="features" className="custom-screen text-gray-300">
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-6"
                    }}
                >
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                            Start your new Anonymous life today
                        </h2>
                        <p className="mt-3">
                            ConSecure is a Next-generation VPN app, Easy to connect but also proffesional with many protocols and servers
                        </p>
                    </div>
                </LayoutEffect>
                <LayoutEffect
                    className="duration-1000 delay-500"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0"
                    }}
                >
                    <div className="relative mt-12">
                        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                featuresList.map((item, idx) => (
                                    <li key={idx} className="space-y-3 p-4 rounded-xl border border-gray-800"
                                        style={{
                                            background: "radial-gradient(157.73% 157.73% at 50% 110%, rgba(203, 213, 225, 0.16) 0%, rgba(203, 213, 225, 0) 100%)"
                                        }}
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-lg text-gray-50">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg text-gray-50 font-semibold">
                                            {item.title}
                                        </h3>
                                        <p>
                                            {item.desc}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </LayoutEffect>
            </div>
        </SectionWrapper>
    )
}

export default Features