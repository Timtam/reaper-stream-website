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
            <p>
                This page should automatically update when we're live, but if
                you're sure something's starting right about now, you might want
                to hit refresh every few minutes, just to give any stray
                internet gremlins a bonk on the noggin and get your browser back
                on track.
            </p>
            <h2>
                Next Meet-up:{" "}
                {nextEvent.date.toLocaleString(DateTime.DATETIME_FULL, {
                    locale: "en",
                })}
            </h2>
            <p>
                Scott and JennyK will be online for a couple of hours being as
                useful as we can. As always it will be mildly chaotic, hopefully
                helpful , and if nothing else, rather entertaining.
            </p>
            <p> </p>
            <p>
                <a
                    href="/REAPERMadeEasyNextEvent.ics"
                    target="_blank"
                    rel="noreferrer"
                >
                    Add the meet-up to your calendar.
                </a>
                <a
                    href="/REAPERMadeEasyAllEvents.ics"
                    target="_blank"
                    rel="noreferrer"
                >
                    Add all planned events to your calendar.
                </a>
            </p>
            <p>
                Once the stream starts, there will be a link to an accessible
                text chat in your browser. Or if you'd prefer to chew the fat
                with us in real-time, you can do that using a free accessible
                app called TeamTalk.
            </p>
            <p>
                <Link to="/TTQuickstart">
                    Here's a collection of TeamTalk tips,
                </Link>{" "}
                useful nuggets of guidance whether you're a first-timer or you'd
                like to spruce up your settings.
            </p>
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
