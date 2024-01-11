import * as React from "react"

function SvgCopyright(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={16}
            width={16}
            viewBox="0 0 512 512"
            {...props}
        >
            <path
                fill="currentColor"
                d="M256 48a208 208 0 110 416 208 208 0 110-416zm0 464a256 256 0 100-512 256 256 0 100 512zm-56.6-199.4c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181 131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"
            />
        </svg>
    )
}

export default SvgCopyright
