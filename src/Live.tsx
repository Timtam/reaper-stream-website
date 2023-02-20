import Head from "./Head";

interface LiveProps {
  ytUrl: string;
}

function Live({ ytUrl }: LiveProps) {
  return (
    <>
      <Head title="REAPER Accessibility Q&A for newcomers" />
      <h1>We're online! All systems are go (so far as we know)</h1>
      <p>
        Welcome to February's edition of I'm Perplexed, What's Next? If you're
        new to REAPER, this is where you can ask questions. Whatever is on your
        mind, be it questions big or small, if it's about REAPER, OSARA or
        accessible recording then we'll be happy to help.
      </p>
      <p>
        Jumping by heading will move through the various ways you can get in on
        the action.
      </p>
      <h2>First, let's get the stream going</h2>
      <p>Choose how you want to listen:</p>
      <p>
        <a
          href="https://laca.borris.me/reaperlive"
          target="_blank"
          rel="noreferrer"
        >
          Listen to the stream on mobile.
        </a>
      </p>
      <p>
        <a href="https://laca.borris.me/reaperlive.m3u">
          Open the stream in your default media player.
        </a>
      </p>
      <p>
        If neither of those links work for you, copy the line below and paste it
        into the stream/location field of your favourite media player. We've
        checked Foobar2000, VLC and Winamp, any of those should work.
      </p>
      <p>https://laca.borris.me/reaperlive</p>
      <h2>Wanna ask us a question?</h2>
      <p>
        The easiest way to get a question to us is by using the accessible chat
        right here in your browser
      </p>
      <p>
        <a
          href="https://chat.toni-barth.online/reaper"
          target="_blank"
          rel="noreferrer"
        >
          Join the text chat to type questions
        </a>
      </p>
      <p>
        If you've got a microphone hooked up or your device has one in-built
        (laptops, phones and such), you can also hop on TeamTalk with us in
        three easy-ish steps. Here's how:
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
        <li>
          If you're on a mobile device, search your Appstore for TeamTalk.
        </li>
        <li>
          Once you've got TeamTalk installed,{" "}
          <a
            href="https://reaperteacher.com/REAPER%20Made%20Easy%20-%20Join%20Live%20Streams.tt"
            rel="noopener"
          >
            Click here to get a TT file that'll drop you straight into the
            channel with us.
          </a>
        </li>
      </ol>
	  <p>
	  Are you scrambling to figure out TeamTalk at the last minute? We've got your back, Jack!
	  </p>
	  <p>
	  <a href="/TTQuickstart">Here's a collection of TeamTalk tips,</a>
	  </p>
      <h2>We're live on YouTube as well!</h2>
      <p>
        We're streaming audio live on YouTube as a backup. It has a longer delay, but hey, if none of the options above have worked
        out for you, this one probably will.
      </p>
      <p>
        Note that at the moment,
        we don't monitor YouTube live chat for questions. Please use the chat option further
        up the page instead.
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
	  <h3>Hungry for more?</h3>
      <p>
        <a
          href="https://theglobalvoice.info/reaper"
          target="_blank"
          rel="noreferrer"
        >
          Visit the REAPER Made Easy project for more educational goodies. They're all free for
          the taking!
        </a>{" "}
      </p>
      <h3>Credits and Support</h3>
      <p>
        Huge thanks to TGV Productions for sponsoring these sessions, to
        Toni Barth for the back-end bolstering, to Patrick Perdue for the
        Icecast stream, and to Day Garwood for the TeamTalk server. You wouldn't
        be hearing us today without support from
        these people, the fineest of folk.
      </p>
    </>
  );
}

export default Live;
