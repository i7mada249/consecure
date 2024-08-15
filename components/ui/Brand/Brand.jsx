import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/logo.png"
        alt="logo"
        {...props}
        width={110}
        height={50}
        priority
    />
)
export default Brand