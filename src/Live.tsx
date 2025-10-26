import Event from "./entities/event"
import { Link } from "react-router-dom"
import Head from "./Head"

interface LiveProps {
    ytUrl: string
    nextEvent?: Event
}

function Live({ ytUrl, nextEvent }: LiveProps) {
    return (
        <>
            <Head title="REAPER Made Easy is live right now" />
            <h1
                tabIndex={-1}
                ref={(e) => {
                    if (e) e.focus()
                }}
            >
                We're online! All systems are go (so far as we know)
            </h1>
            <p>{nextEvent?.title} is underway!</p>
            <p>
                Jumping by heading will move through the various ways you can
                get in on the action.
            </p>
            <h2>Listen in your browser or a media player:</h2>
            <p>
                <a
                    href="https://laca.borris.me/reaperlive"
                    target="_blank"
                    rel="noreferrer"
                >
                    Listen to the stream in your browser, usually best option on
                    mobile devices.
                </a>
            </p>
            <p>
                <a href="https://laca.borris.me/reaperlive.m3u">
                    Open the stream in your default media player, usually best
                    on desktop.
                </a>
            </p>
            <p>
                If neither of those links work for you, copy the line below and
                paste it into the stream/location field of your favourite media
                player. We've checked Foobar2000, VLC and Winamp, any of those
                should work.
            </p>
            <p>https://laca.borris.me/reaperlive</p>
            <h2>Wanna ask us a question?</h2>
            <p>
                We're taking questions via YouTube chat (text only), or via
                TeamTalk (text and voice).
            </p>
            <p>
                If you've got a microphone hooked up or your device has one
                in-built (laptops, phones and such), you can hop on TeamTalk
                with us in three easy-ish steps. Here's how:
            </p>
            <ol>
                <li>
                    If you're using Windows or Mac,{" "}
                    <a
                        href="https://bearware.dk/?page_id=353"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Download and install TeamTalk.
                    </a>
                </li>
                <li>On a mobile device, search your Appstore for TeamTalk.</li>
                <li>
                    Once you've got TeamTalk installed,{" "}
                    <a href="tt://tt.reaperteacher.com?tcpport=50000&udpport=50000&encrypted=0&channel=%2FREAPER%20Live%20Meet-up%2F">
                        Hit this link to join us in the REAPER Live Meet-up
                        channel.
                    </a>
                </li>
                <li>
                    Or if you prefer,
                    <a
                        href="https://reaperteacher.com/REAPER%20Made%20Easy%20-%20Join%20Live%20Streams.tt"
                        rel="noreferrer"
                    >
                        Download our TeamTalk details.
                    </a>
                </li>
            </ol>
            <p>
                Are you scrambling to figure out TeamTalk at the last minute?
                We've got your back, Jack!
            </p>
            <p>
                <Link to="/TTQuickstart">
                    Here's a collection of TeamTalk tips,
                </Link>
            </p>
            <h2>We're live on YouTube as well!</h2>
            <p>
                Feel fre to type questions in the YouTube chat, Shay will be
                watching.
            </p>
            <iframe
                width="560"
                height="315"
                src={ytUrl}
                title="Listen live using YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <h2>Wanna send us something to listen to on air?</h2>
            <p>Please only send one submission per person, per stream.</p>
            <p>
                <a
                    href="https://www.dropbox.com/request/mB2KhxVunzyItpkR0847"
                    target="_blank"
                    rel="noreferrer"
                >
                    Upload work in progress or a recent production if you want
                    our feedback.
                </a>
            </p>
            <h3>Can you help us keep these meet-ups going?</h3>
            <p>
                Any support you can send in goes toward paying Q&A hosts a reasonable hourly rate.
                If you can’t support financially, spreading the word that this resource is here is also much appreciated.
            </p>
            <p>
                <a
                    href="https://paypal.me/TGVTraining"
                    target="_blank"
                    rel="noreferrer"
                >
                    Chuck us some change on PayPal if you can.
                </a>{" "}
            </p>
            <h3>Hungry for more?</h3>
            <p>
                <a
                    href="https://theglobalvoice.info/reaper"
                    target="_blank"
                    rel="noreferrer"
                >
                    Visit the REAPER Made Easy project for more educational
                    goodies. They're all free for the taking!
                </a>{" "}
            </p>
            <h3>Shout-outs to some fine folk</h3>
            <p>
                Huge thanks to TGV Productions for sponsoring these sessions, to
                Toni Barth for the back-end bolstering, to Patrick Perdue for
                the Icecast stream, and to Day Garwood for the TeamTalk server.
            <p>
                <a
                    href="https://https://www.theglobalvoice.info/reaper/supporters/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Here's all our community supporters.
                </a>{" "}
            </p>
                You wouldn't be hearing us today without sponsorship and support
                from these people.
            </p>
        </>
    )
}

export default Live
