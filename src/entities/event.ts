import { DateTime, Duration } from "luxon"

export default interface Event {
    date: DateTime
    duration: Duration
    title: string
    description: string
}
