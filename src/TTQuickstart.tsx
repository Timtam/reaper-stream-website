import Head from "./Head"

function TTQuickstart() {
    return (
        <>
            <Head title="TeamTalk Quickstart" />
            <h1
                tabIndex={-1}
                ref={(e) => {
                    if (e) e.focus()
                }}
            >
                Tips for getting TeamTalk up and running
            </h1>
            <p>
                You're welcome to join us on TeamTalk during meet-ups. That way,
                you can chat with us using your voice and we'll likely be able
                to get deeper into the nitty gritty of what you're working
                toward.
            </p>
            <p>
                If you don't already have TeamTalk, it's available for Windows,
                Mac, iOS, Android and Linux. Follow the steps below to get up
                and going.
            </p>
            <h2>Mobile Platforms:</h2>
            <p>
                Search for TeamTalk in whichever App Store you use, or if you're
                browsing this page on your device right now, here are links for
                the big two.
            </p>
            <p>
                <a href="https://apps.apple.com/id/app/teamtalk-5/id1069487751">
                    TeamTalk on Apple's App Store
                </a>
            </p>
            <p>
                <a href="https://play.google.com/store/apps/details?id=dk.bearware.gui&hl=en_GB&gl=US&pli=1">
                    TeamTalk on Google Play.
                </a>
            </p>
            <p>
                Once you've got TeamTalk installed on your device, come back to
                this page and{" "}
                <a href="tt://tt.reaperteacher.com?tcpport=50000&udpport=50000&encrypted=0&channel=%2FREAPER%20Live%20Meet-up%2F">
                    hit this link to join us in the channel.
                </a>
            </p>
            <h3>Tips for Improving Audio using TeamTalk on Mobile:</h3>
            <p>
                These tips were kindly contributed by our guy Piotr who uses
                iOS. So far as we know they hold up for Android too, but feel
                free to set us straight with more info if there are
                Android-specific things we should know.
            </p>
            <p>
                Keep in mind that the tweaks below are entirely optional. This
                is a Q&A for folks who are learning the ropes and nobody is
                gonna be judging your TeamTalk audio. :)
            </p>
            <ol>
                <li>
                    If you're using a Bluetooth headset, you can turn on the
                    option to use A2DP mode in TeamTalk settings. This will
                    persuade TeamTalk to send the highest quality audio your
                    headset can provide.
                </li>
                <li>
                    If you want to send stereo audio, make sure the voice
                    preprocessing switch is off. This will turn off noise
                    reduction and echo cancellation, so probably best not use it
                    if you're joining us from your phone in a busy Starbucks.
                </li>
            </ol>
            <h2>Desktop Platforms (Windows, Mac and um, perhaps Linux?)</h2>
            <ol>
                <li>
                    <a
                        href="https://bearware.dk/?page_id=353"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Download and install TeamTalk (the page will open in a
                        new tab).
                    </a>
                </li>
                <li>
                    You can choose which microphone TeamTalk should use by going
                    to the Client menu, then Sound Configuration, then Input
                    Devices.
                </li>
                <li>
                    To choose which output to use (ideally headphones or a
                    headset), it's the Client menu again, Sound Configuration,
                    Output Devices.
                </li>
                <li>
                    You can set your nickname by hitting F5. Probably best to
                    use your actual name here so we can recognize you.
                </li>
                <li>
                    Once you've chosen those things, switch back to this page
                    and{" "}
                    <a
                        href="https://reaperteacher.com/REAPER%20Made%20Easy%20-%20Join%20Live%20Streams.tt"
                        rel="noreferrer"
                    >
                        Click here to get a TT file that'll drop you straight
                        into the channel with us.
                    </a>
                </li>
                <li>
                    When you're online, you can check what your own audio sounds
                    like by moving to your name in the users list and pressing
                    Control+4 on the top number row (Command+4 on Mac). It's a
                    toggle, just press it again to stop hearing yourself.
                </li>
                <li>
                    If you find that you're only audible on one side, take one
                    more trip into the Client menu, Sound Configuration, go down
                    to Enable Echo Cancellation and hit Enter.
                </li>
                <li>
                    To toggle your microphone on and off, hit Control+Shift+A
                    (that's Command+Shift+A on Mac). Feel free to keep your mic
                    on when we're taking/answering your questions, then please
                    turn yourself off whenever you're settling in to listen for
                    a spell. It's easier for everyone if we all do our bit to
                    keep the stream relatively clean.
                </li>
            </ol>
            <h2>Manual Server Settings for TeamTalk Aficionados:</h2>
            <p>
                If you've already got your config sorted and you'd prefer to add
                the server we meet on manually, use these details.
            </p>
            <p>Host: tt.reaperteacher.com</p>
            <p>Ports: 50000</p>
            <p>Channel: REAPER Live Meet-up</p>
            <p>
                If you're running a standard install (IE not portable), here's a
                link that should drop you straight into the channel, respecting
                your existing settings:
            </p>
            <p>
                <a href="tt://tt.reaperteacher.com?tcpport=50000&udpport=50000&encrypted=0&channel=%2FREAPER%20Live%20Meet-up%2F">
                    Join the REAPER Live Meet-up channel using your existing
                    settings
                </a>
            </p>
            <h2>Still Stuck? No Worries.</h2>
            <p>
                Feel free to post on RWP or the WhatsApp group a couple days
                ahead of the Q&A. Also, hosts usually show up half an hour early
                give or take, we're happy to help whenever we're around.
            </p>
            <p>
                <a href="https://reaperteacher.com">
                    Go back to the landing page
                </a>
            </p>
        </>
    )
}

export default TTQuickstart
