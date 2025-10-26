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
                This is the landing page for meet-ups about REAPER
                accessibility. Keep reading for details of what's coming up.
            </p>
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
                We stream good quality audio in a bunch of places. Once a stream
                starts, there will be links to listen in most media players, you
                can chew the fat with us in real-time using a free accessible
                app called TeamTalk, or you can ask us questions in
                our YouTube chat, too.
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
                During each meet-up, we play a recent production or some
                work in progress and provide objective feedback. Send us a wave,
                flac or mp3 file using the link below.
                If there's anything you want us to know about what we're listening to, upload a text file as well.
            </p>
            <p>
                <a
                    href="https://www.dropbox.com/request/mB2KhxVunzyItpkR0847"
                    target="_blank"
                    rel="noreferrer"
                >
                    Upload files for feedback.
                </a>
            </p>
            <h2>Wanna send us a question in advance?</h2>
            <Link to="/contact">
                Click here to ask a question in advance if you can't join us
                live. Time permitting, we'll try to answer on the next meet-up.
            </Link>
            <h3>Study up while you're waiting...</h3>
            <p>
                <a
                    href="https://theglobalvoice.info/reaper"
                    target="_blank"
                    rel="noreferrer"
                >
                    Visit our page on The Global Voice's site for demos, deep
                    dives and artist spotlights.
                </a>{" "}
            </p>
            <p>
                All the educational goodies you'll find there are free for the taking, thanks to sponsorship from TGV Productions and attendees who send us support.
            </p>
            <h3>Can you help us keep REAPER Made Easy going?</h3>
            <p>
                Any support you can send in goes toward paying Q&A hosts a reasonable hourly rate. We pay guest trainers who contribute to deep-dive sessions fairly as well.
                If you can’t support financially, spreading the word that this resource is here is also much appreciated.
            </p>
            <p>
                <a
                    href="https://paypal.me/TGVTraining"
                    target="_blank"
                    rel="noreferrer"
                >
                    Help prop us up with PayPal.
                </a>{" "}
            </p>
            <p>
                <a
                    href="https://https://www.theglobalvoice.info/reaper/supporters/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Here's some other fine folk who have helped us along.
                </a>{" "}
            </p>
            <p>
                Thanks in advance for all support, however you get involved.
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
