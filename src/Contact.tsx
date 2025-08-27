import { useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useNavigate } from "react-router-dom"
import Head from "./Head"
import ResponseModal from "./ResponseModal"
import FA from "./FocusAnchor"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const API_KEY = "sf_7je16hcna2jnbdhbnh9ai2af"

export default function Contact() {
    let navigate = useNavigate()
    let [name, setName] = useState("")
    let [platform, setPlatform] = useState("Windows")
    let [text, setText] = useState("")
    let [response, setResponse] = useState({
        type: "" as "error" | "success" | "",
        message: "",
    })
    let [altchaVerified, setAltchaVerified] = useState(false)

    useEffect(() => {
        import("altcha")

        // Listen for Altcha verification
        const interval = setInterval(() => {
            const widget = document.querySelector("altcha-widget")
            if (widget) {
                widget.addEventListener("statechange", (e) => {
                    // @ts-expect-error event type not typed
                    if (e.detail.state === "verified") {
                        setAltchaVerified(true)
                    }
                })
                clearInterval(interval)
            }
        }, 100)

        return () => clearInterval(interval)
    }, [setAltchaVerified])

    return (
        <>
            <Head title="Send us a question - REAPER Made Easy" />
            <FA title="Send us a Question!" />
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
                    question and we'll try to get to it.
                </strong>
            </p>
            <p>
                <strong>
                    We check questions sent in via this form while we're setting
                    up each session. If we're already on air, use YouTube chat
                    or TeamTalk to reach us instead.
                </strong>
            </p>

            <Form aria-label="Question form">
                <fieldset>
                    <legend>Your information</legend>

                    <p>
                        <strong>
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
                        </strong>
                    </p>

                    <p>
                        <strong>
                            <label htmlFor="message">Ask your question:</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                aria-required="true"
                                onChange={(e) => setText(e.currentTarget.value)}
                                value={text}
                            ></textarea>
                        </strong>
                    </p>

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

                    <altcha-widget
                        challengeurl={`https://www.staticforms.xyz/api/altcha/challenge?apiKey=${API_KEY}`}
                        name="altchaToken"
                        auto="onfocus"
                    />

                    <Button
                        disabled={!altchaVerified || text === "" || name === ""}
                        onClick={async () => {
                            let res = await fetch(
                                "https://api.staticforms.xyz/submit",
                                {
                                    method: "POST",
                                    body: JSON.stringify({
                                        subject:
                                            "Reaper Teacher form submission",
                                        altchaToken:
                                            document.forms[0].altchaToken.value,
                                        name: name,
                                        apiKey: API_KEY,
                                        $platform: platform,
                                        message: text,
                                    }),
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
                                    message: json.error,
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
