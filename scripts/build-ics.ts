import Event from "../src/entities/event"
import EventService from "../src/services/event.service"
import ical, { ICalCalendarMethod, ICalAlarm } from "ical-generator"
import { writeFileSync } from "fs"
import { getVtimezoneComponent } from "@touch4it/ical-timezones"

const main = () => {
    const generateCalendar = (e: Event[]): ReturnType<typeof ical> => {
        let cal = ical({
            name: "REAPER Made Easy Meet-ups",
        })
        cal.method(ICalCalendarMethod.PUBLISH)
        cal.timezone({
            name: "Europe/London",
            generator: getVtimezoneComponent,
        })

        e.forEach((e) => {
            cal.createEvent({
                start: e.date,
                end: e.date.plus(e.duration),
                summary: e.title,
                description: e.description,
                location: "https://www.reaperteacher.com/",
                url: "https://www.reaperteacher.com/",
                busystatus: "BUSY",
                class: "PUBLIC",
                organizer: {
                    name: "Scott Chesworth",
                    email: "scottchesworth@gmail.com",
                },
                status: "CONFIRMED",
                timezone: "Europe/London",
                transparency: "OPAQUE",
                alarms: [
                    {
                        trigger: 3600,
                    },
                ],
            })
        })

        return cal
    }

    const eventService = new EventService()

    if (eventService.getNext() !== undefined) {
        writeFileSync(
            "./public/REAPERMadeEasyNextEvent.ics",
            generateCalendar([eventService.getNext()]).toString(),
            {
                encoding: "utf-8",
            },
        )
    }

    writeFileSync(
        "./public/REAPERMadeEasyAllEvents.ics",
        generateCalendar(eventService.getAll()).toString(),
        {
            encoding: "utf-8",
        },
    )
}

main()
