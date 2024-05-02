import { useEffect, useState } from "react"
import config from "./config.json"
import EventService from "./services/event.service"
import Live from "./Live"
import Loading from "./Loading"
import Offline from "./Offline"

function Home() {
    let eventService = new EventService()
    let [loading, setLoading] = useState(true)
    let [live, setLive] = useState(false)

    useEffect(() => {
        let streamCheck = async () => {
            try {
                let res = await fetch("https://laca.borris.me/status-json.xsl")
                let json = await res.json()
                if (
                    json.icestats.source.some((s: any) =>
                        s.listenurl.endsWith("reaperlive"),
                    )
                )
                    setLive(true)
                else setLive(false)
                setLoading(false)
            } catch (e) {
                setLive(false)
                setLoading(false)
            }
        }

        let interval = setInterval(streamCheck, 5000)

        streamCheck()

        return () => clearInterval(interval)
    }, [])

    if (loading) return <Loading />

    if (live) return <Live ytUrl={config.ytUrl} nextEvent={eventService.getNext()} />
    else return <Offline nextEvent={eventService.getNext()} />
}

export default Home
