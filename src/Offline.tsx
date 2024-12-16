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
                This is the landing page for meet-ups and live streams about
                REAPER accessibility. Nobody is streaming at the moment, but
                keep reading for details of the next event.
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
            <h2>IMPORTANT: the address of our TeamTalk channel has changed.</h2>
            <p>
                If you enjoy joining us on TeamTalk during the Q&A meet-ups,
                you'll either need to grab a new TT file or manually update host
                to tt.reaperteacher.com. The easiest way to update is to grab
                the file below.
            </p>
            <p>
                <a
                    href="https://reaperteacher.com/REAPER%20Made%20Easy%20-%20Join%20Live%20Streams.tt"
                    rel="noreferrer"
                >
                    Download new TeamTalk details!
                </a>
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
                We stream decent quality audio in a bunch of places. Once a
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
            <h2>Wanna send us something to play during the end of year wrap up?</h2>
            <p>Share your favourite thing you made with REAPER this year, we'll play a bunch of productions and give you a shout out. Feel free to upload a text file with any details you want people to know about what you've sent in.</p>
            <p>
                <a
                    href="https://www.dropbox.com/request/mB2KhxVunzyItpkR0847"
                    target="_blank"
                    rel="noreferrer"
                >
                    Upload something for us to play.
                </a>
            </p>
            <h2>Wanna send us a comment in advance?</h2>
            <a
                href="https://forms.office.com/r/T6wuYY7jE1"
                target="_blank"
                rel="noreferrer"
            >
                Click here to leave us a comment if you can't join us live, we'll read some of them out during the stream.
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
