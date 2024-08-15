import { useRef, useState } from "react"
import LayoutEffect from "@/components/LayoutEffect";

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <LayoutEffect
            className="duration-1000 delay-300"
            isInviewState={{
                trueState: "opacity-1",
                falseState: "opacity-0"
            }}
        >
            <div
                className="space-y-3 mt-5 overflow-hidden border-b border-gray-600 duration-1000 delay-300"
                key={idx}
                onClick={handleOpenAnswer}
            >
                <h4 className="cursor-pointer pb-5 flex items-center justify-between mt-5 text-gray-300 duration-1000 delay-300">
                    {faqsList.q}
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        )
                    }
                </h4>
                <div
                    ref={answerElRef} className="duration-300"
                    style={state ? { height: answerH } : { height: '0px' }}
                >
                    <div>
                        <p className="text-gray-500">
                            {faqsList.a}
                        </p>
                    </div>
                </div>
            </div>
        </LayoutEffect>
    )
}

export default () => {

    const faqsList = [
        {
            q: "How does the VPN protect my privacy?",
            a: "Our VPN uses advanced encryption protocols to secure your data, ensuring that your online activities remain private and protected from prying eyes."
        },
        {
            q: "Will using the VPN slow down my internet speed?",
            a: "No, our VPN is designed to provide blazing fast connections, so you can enjoy streaming, gaming, and browsing without any noticeable lag."
        },
        {
            q: "How many servers does your VPN offer?",
            a: " We offer a vast network of servers in multiple countries, allowing you to connect from virtually anywhere and enjoy unrestricted internet access."
        },
        {
            q: "What is Tor tunneling and how does it enhance my anonymity?",
            a: "Tor tunneling routes your internet traffic through multiple servers, adding an extra layer of anonymity and making it nearly impossible for anyone to track your online movements."
        },
        {
            q: "Is there a limit to the free cloud storage provided?",
            a: "Our VPN includes free cloud storage to save your important files securely. While there is a generous limit, you can always upgrade for additional storage if needed."
        }
    ]

    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                    Frequently Asked Questions
                </h1>
                <p className="mt-5 text-gray-300">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}