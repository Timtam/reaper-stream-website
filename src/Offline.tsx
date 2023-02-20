import Head from "./Head";

function Offline() {
  return (
    <>
      <Head title="REAPER Accessibility Meet-ups..." />
      <h1>We're not live, but there's still useful stuff here...</h1>
      <p>
        This is the landing page for Scott's meet-ups about REAPER
        accessibility. You're probably seeing this page instead of a live stream
        because there's nothing happening at the moment.
      </p>
      <p>
        If you're sure something is starting right now though, your browser
        might be displaying a cached version of the page by mistake. Hit
        refresh, that should get you back on track.
      </p>
      <h2>Next Meet-up: Saturday 25th February, 8PM UK, 3PM Eastern.</h2>
      <p>
        Join Scott and JennyK for "I'm Perplexed, What's Next?", an open Q&A for
        newcomers. Questions big and small about REAPER, OSARA or anything else
        around accessible recording are welcome.
      </p>
      <p>
        Once the Q&A starts, you'll be able to send us questions via text and
        listen for advice, or you can join us to chew the fat in real-time using
        a free accessible app called TeamTalk.
      </p>
      <p>
        <a href="/TTQuickstart">
          Here's a collection of TeamTalk tips,
        </a>{" "}
        useful nuggets whether you're a first-timer or you'd like to spruce up
        your settings.
      </p>
      <h2>
        If you can't make it when we're live, you can still send us a question.
      </h2>
      <p>
        There's no such thing as a single time that'll suit everyone all over
        the world, so to tide us over (just until time travel becomes
        affordable), we've got a form where you can send us a question.
      </p>
      <p>
        Please only send questions this way if you won't be able to attend live.
        We'll record the part of the meet-up where we answer questions sent in
        from people who couldn't make it, then post a recording on RWP soon
        after each meet-up.
      </p>
      <p>
        <a
          href="https://forms.office.com/r/T6wuYY7jE1"
          target="_blank"
          rel="noreferrer"
        >
          Send us a question.
        </a>
      </p>
    </>
  );
}

export default Offline;
