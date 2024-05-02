import config from "../config.json"
import { DateTime, Duration } from "luxon"
import Event from "../entities/event"

export default class EventService {
    events: Event[]

    constructor() {
        let now = DateTime.now()

        this.events = config.events
            .map((e) => {
                return {
                    date: DateTime.fromISO(e.date),
                    duration: Duration.fromISOTime(e.duration),
                    title: e.title,
                    description: e.description,
                } as Event
            })
            .filter((e) => e.date.plus({ hours: 4 }) >= now)
            .sort((a, b) => a.date.diff(b.date).toMillis())
    }

    getNext(): Event | undefined {
        return this.events.at(0)
    }

    getAll(): Event[] {
        return this.events
    }
}
