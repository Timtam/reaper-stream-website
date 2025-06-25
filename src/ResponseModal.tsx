import { useEffect, useState } from "react"
import Modal from "react-bootstrap/Modal"

function ResponseModal({
    response,
    onClose,
    onClosed,
}: {
    response: {
        type: "error" | "success" | ""
        message: string
    }
    onClose: (clean: boolean) => void
    onClosed: () => void
}) {
    let [show, setShow] = useState(false)

    useEffect(() => setShow(response.type !== ""), [response])

    return (
        <Modal
            restoreFocus={false}
            show={show}
            onExited={onClosed}
            onHide={() => {
                if (response.type === "error") onClose(false)
                else onClose(true)
                setShow(false)
                response = {
                    type: "",
                    message: "",
                }
            }}
        >
            {response.type !== "" ? (
                <>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {response.type === "success"
                                ? "Question received, hurray!"
                                : "Error while submitting your question!"}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {response.type === "success" ? (
                            <p>
                                Thanks alot, we'll cover your question in the
                                next Q&A session.
                            </p>
                        ) : (
                            <p>
                                An error occurred. Please try again later or get
                                in touch to receive further support. The error
                                is: {response.message}
                            </p>
                        )}
                    </Modal.Body>
                </>
            ) : (
                ""
            )}
        </Modal>
    )
}

export default ResponseModal
