import humanizeDuration from "humanize-duration";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";

interface OfflineProps {
  nextStream?: string;
}

function Offline({ nextStream }: OfflineProps) {
  let [countdown, setCountdown] = useState(undefined as undefined | number);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined = undefined;

    if (nextStream) {
      let targetDate = Date.parse(nextStream);
      if (targetDate - Date.now() >= 0) {
        interval = setInterval(() => {
          setCountdown(targetDate - Date.now());
        }, 1000);
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [nextStream]);

  return (
    <>
      <Head title="REAPER Accessibility Meet-ups..." />
      {nextStream && countdown ? (
        <p>
          <h1>Next Q&A session starts in{" "}
          {humanizeDuration(countdown, {
            units: ["w", "d", "h", "m"],
            round: true,
          })}</h1>
        </p>
      ) : (
        ""
      )}
      <p>
        This is the landing page for meet-ups about REAPER
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
        newcomers.
		</p>
		<p>
		Questions big and small about REAPER, OSARA or anything 
        around accessible recording are welcome.
      </p>
      <p>
        Once the Q&A starts, this page will automagically change. There will be links to an accessible text chat where you can send us questions and you'll be able to listen for answers right here in your browser. Or if you'd prefer chewing the fat with us in real-time, you can do that using
        a free accessible app called TeamTalk.
      </p>
      <p>
        <Link to="/TTQuickstart">Here's a collection of TeamTalk tips,</Link>{" "}
        useful nuggets whether you're a first-timer or you'd like to spruce up
        your settings.
      </p>
      <h2>
        Even if you can't make the live session, you can still send us a question.
      </h2>
      <p>
        There's no such thing as a single time that'll suit everyone all over
        the world, so to tide us over (just until time travel becomes
        affordable), we've got a form where you can send us a question.
      </p>
      <p>
        Please only use the form if you won't be able to attend live.
        We'll record the part of the meet-up where we answer questions that have been sent in
        from people who couldn't make it along, then post a recording on RWP soon
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
