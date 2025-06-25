import { forwardRef, useState } from "react"

interface FocusAnchorProps {
    title: string
}

const FocusAnchor = forwardRef<HTMLElement, FocusAnchorProps>(
    ({ title }: FocusAnchorProps, ref) => {
        let [opened, setOpened] = useState(false)

        return (
            <h3
                tabIndex={-1}
                ref={(e) => {
                    if (typeof ref === "function") ref(e)
                    else if (ref) ref.current = e

                    if (e && !opened) {
                        e.focus()
                        setOpened(true)
                    }
                }}
            >
                {title}
            </h3>
        )
    },
)

export default FocusAnchor
