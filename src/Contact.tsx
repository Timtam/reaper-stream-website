import { useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useNavigate } from "react-router-dom"
import Head from "./Head"
import ResponseModal from "./ResponseModal"
import FA from "./FocusAnchor"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function Contact() {
    let navigate = useNavigate()
    let [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
    let recaptchaRef = useRef<ReCAPTCHA | null>(null)
    let [name, setName] = useState("")
    let [platform, setPlatform] = useState("Windows")
    let [text, setText] = useState("")
    let [response, setResponse] = useState({
        type: "" as "error" | "success" | "",
        message: "",
    })

    return (
        <>
            <Head title="Ask a question - REAPER Made Easy" />
            <FA title="Ask a Question!" />
            <ResponseModal
                response={response}
                onClose={(clean) => {
                    if (clean) {
                        navigate(`/`)
                    }

                    setResponse({
                        type: "",
                        message: "",
                    })
                }}
                onClosed={() => {
                    recaptchaRef.current?.reset()
                }}
            />
            <p>
                <strong>
                    If you cannot attend the live Q&A session, send us a
                    question and we will try to get to it
                </strong>
            </p>

            <Form aria-label="Question form">
                <fieldset>
                    <legend>Your information</legend>

                    <label htmlFor="name">Your Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        aria-required="true"
                        onChange={(e) => setName(e.currentTarget.value)}
                        value={name}
                    />

                    <p>
                        <strong>
                            Do you use Reaper and OSARA on Windows, Mac, or
                            Both?
                        </strong>
                    </p>

                    <label id="platform">Platform:</label>
                    <div role="radiogroup" aria-labelledby="platform">
                        <label>
                            <input
                                type="radio"
                                name="platform"
                                value="Windows"
                                onChange={(e) =>
                                    setPlatform(e.currentTarget.value)
                                }
                                checked={platform === "Windows"}
                            />{" "}
                            Windows
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="platform"
                                value="Mac"
                                onChange={(e) =>
                                    setPlatform(e.currentTarget.value)
                                }
                                checked={platform === "Mac"}
                            />{" "}
                            Mac
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="platform"
                                value="Both"
                                onChange={(e) =>
                                    setPlatform(e.currentTarget.value)
                                }
                                checked={platform === "Both"}
                            />{" "}
                            Both
                        </label>
                    </div>

                    <label htmlFor="message">Ask your question:</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        aria-required="true"
                        onChange={(e) => setText(e.currentTarget.value)}
                        value={text}
                    ></textarea>

                    <ReCAPTCHA
                        sitekey="6Lei01krAAAAAKW9r1SK1OIqiZ8wfkZEPiJi9iKY"
                        onChange={setRecaptchaToken}
                        ref={recaptchaRef}
                    />

                    <Button
                        disabled={
                            recaptchaToken === null ||
                            text === "" ||
                            name === ""
                        }
                        onClick={async () => {
                            let res = await fetch(
                                "https://api.staticforms.xyz/submit",
                                {
                                    method: "POST",
                                    body: JSON.stringify({
                                        subject:
                                            "Reaper Teacher form submission",
                                        recaptchaToken: recaptchaToken,
                                        name: name,
                                        apiKey: "sf_7je16hcna2jnbdhbnh9ai2af",
                                        $platform: platform,
                                        message: text,
                                    }),
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                },
                            )

                            let json = await res.json()

                            if (res.status === 200) {
                                setResponse({
                                    type: "success",
                                    message: "",
                                })
                            } else {
                                setResponse({
                                    type: "error",
                                    message: json.message,
                                })
                            }
                        }}
                    >
                        Send!
                    </Button>
                </fieldset>
            </Form>
        </>
    )
}
