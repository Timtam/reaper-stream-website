import Event from "./entities/event"
import humanizeDuration from "humanize-duration"
import { DateTime } from "luxon"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"

interface OfflineProps {
    nextEvent?: Event
}

function Offline({ nextEvent }: OfflineProps) {
    let [countdown, setCountdown] = useState(undefined as undefined | number)
    let [opened, setOpened] = useState(false)

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | undefined = undefined

        if (nextEvent) {
            if (nextEvent.date >= DateTime.now()) {
                interval = setInterval(() => {
                    setCountdown(nextEvent.date.diff(DateTime.now()).toMillis())
                }, 1000)
            }
        }

        return () => {
            if (interval) clearInterval(interval)
        }
    }, [nextEvent])

    return (
        <>
            <Head title="REAPER MADE Easy: Accessibility Meet-ups" />
            <h1
                tabIndex={-1}
                ref={(e) => {
                    if (e && !opened) {
                        e.focus()
                        setOpened(true)
                    }
                }}
            >
                Welcome to the live leg of REAPER Made Easy!
            </h1>
            <p>
                This is the landing page for meet-ups about
                REAPER accessibility. Keep reading for details of what's coming up.
            </p>
            {nextEvent && countdown ? (
                <p>
                    {nextEvent.title} will start in{" "}
                    {humanizeDuration(countdown, {
                        units: ["w", "d", "h", "m"],
                        round: true,
                    })}
                    .
                </p>
            ) : (
                ""
            )}
            {nextEvent && countdown ? (
                <h2>
                    Next Meet-up:{" "}
                    {nextEvent.date.toLocaleString(
                        {
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "2-digit",
                            timeZoneName: "short",
                        },
                        {
                            locale: "en",
                        },
                    )}
                </h2>
            ) : (
                ""
            )}
            {nextEvent && countdown ? <p>{nextEvent.description}</p> : ""}
            <p>
                <a
                    href="/REAPERMadeEasyNextEvent.ics"
                    target="_blank"
                    rel="noreferrer"
                >
                    Add the next meet-up to your calendar.
                </a>
                <a
                    href="/REAPERMadeEasyAllEvents.ics"
                    target="_blank"
                    rel="noreferrer"
                >
                    Add all planned events to your calendar.
                </a>
            </p>
            <h2>How to get involved...</h2>
            <p>
                We stream good quality audio in a bunch of places. Once a
                stream starts, there will be links to listen in most media
                players, you can chew the fat with us in real-time using a free
                accessible app called TeamTalk, and you'll be able to ask us
                questions in our YouTube chat.
            </p>
            <p>
                <Link to="/TTQuickstart">
                    Here's a collection of TeamTalk tips,
                </Link>{" "}
                useful nuggets of guidance whether you're a first-timer or you'd
                like to spruce up your settings.
            </p>
            <p>
                <a
                    href="https://reaperteacher.com/REAPER%20Made%20Easy%20-%20Join%20Live%20Streams.tt"
                    rel="noreferrer"
                >
                    Download our TeamTalk details.
                </a>
            </p>
            <h2>Send us something to listen to, get feedback.</h2>
            <p>
                During each Q&A session, we play a recent production or some work in progress and provide objective feedback. Send us a wave, flac or mp3 file using the link below.
            <p>
                <a
                    href="https://www.dropbox.com/request/mB2KhxVunzyItpkR0847"
                    target="_blank"
                    rel="noreferrer"
                >
                    Upload a file for feedback.
                </a>
            </p>
            <h2>Wanna send us a question in advance?</h2>
            <a
                href="https://form.nirandas.com/f/75NiYmSdU7UUDNpcFFY4"
                target="_blank"
                rel="noreferrer"
            >
                Click here to ask a question in advance if you can't join us live. We'll answer it during the session.
            </a>
            <h3>Study up while you're waiting...</h3>
            <p>
                <a
                    href="https://theglobalvoice.info/reaper"
                    target="_blank"
                    rel="noreferrer"
                >
                    Visit the REAPER Made Easy project for tutorials and
                    recordings of previous streams.
                </a>{" "}
            </p>
            <p>
                Thanks to our sponsorship from TGV Productions, all the
                educational goodies you'll find there are free for the taking.
            </p>
            {nextEvent && countdown ? (
                <p>
                    That's all for now. See ya in{" "}
                    {humanizeDuration(countdown, {
                        units: ["w", "d", "h", "m"],
                        round: true,
                    })}
                    {"!"}
                </p>
            ) : (
                ""
            )}
        </>
    )
}

export default Offline
