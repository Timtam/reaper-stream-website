import humanizeDuration from "humanize-duration";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";

interface OfflineProps {
  nextStream?: string;
}

function Offline({ nextStream }: OfflineProps) {
  let [countdown, setCountdown] = useState(undefined as undefined | number);
  let [opened, setOpened] = useState(false);

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
      <Head title="REAPER MADE Easy: Accessibility Meet-ups" />
      <h1
        tabIndex={-1}
        ref={(e) => {
          if (e && !opened) {
            e.focus();
            setOpened(true);
          }
        }}
      >
        Welcome to the live leg of REAPER Made Easy!
      </h1>
      <p>
        This is the landing page for meet-ups and live streams about REAPER
        accessibility. Nobody is streaming at the moment, but keep reading for
        details of the next event.
      </p>
      {nextStream && countdown ? (
        <p>
           A live Q&A with Scott and JennyK will be starting in
          {humanizeDuration(countdown, {
            units: ["w", "d", "h", "m"],
            round: true,
          })}
        </p>
      ) : (
        ""
      )}
      <p>
        This page should automatically update when we're live, but
        if you're sure something's starting right about now, you might want to
        hit refresh every few minutes, just to give any stray
        internet gremlins a bonk on the noggin and get your browser back on track.
      </p>
      <h2>Next Meet-up: Saturday December 16th, 8PM UK, 3PM Eastern, 12PM Pacific.</h2>
      <p>
        Scott and JennyK will be online for a couple of hours, busting their guts to answer your questions about REAPER, OSARA, anything around accessible recording and production. It's a loose and friendly hang where we all learn together. Any amount of experience is welcome, and as usual, newcomers get our top priority.
      </p>
      <p>
        <a href="/REAPERMadeEasyMeet-ups.ics" target="_blank" rel="noreferrer">
          Add the meet-up to your calendar.
        </a>
      </p>
      <p>
        Once the stream starts, there will be links to an accessible text chat
        where you can send us questions, and you'll be able to listen for
        answers right here in your browser. Or if you'd prefer to chew the fat
        with us in real-time, you can do that using a free accessible app called
        TeamTalk.
      </p>
      <p>
        <Link to="/TTQuickstart">Here's a collection of TeamTalk tips,</Link>{" "}
        useful nuggets of guidance whether you're a first-timer or you'd like to spruce up
        your settings.
      </p>
      <h2>
        Even if you can't make the live session, you can still send us a
        question.
      </h2>
      <p>
        There's no such thing as a single time that'll suit everyone all over
        the world, so to tide us over (just until time travel becomes
        affordable), we've got a form where you can send us a question.
      </p>
      <p>
        Please only use the form if you won't be able to attend live. We'll record the part of the meet-up where we answer questions  that have been sent in from people who couldn't make it along, then post a recording on RWP soon after.
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
      <h3>Study up while you're waiting...</h3>
      <p>
        <a
          href="https://theglobalvoice.info/reaper"
          target="_blank"
          rel="noreferrer"
        >
          Visit the REAPER Made Easy project for tutorials and recordings of
          previous streams.
        </a>{" "}
      </p>
      <p>
        With sponsorship from TGV Productions, all the educational goodies you'll find there are free
        for the taking.
      </p>
      {nextStream && countdown ? (
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
  );
}

export default Offline;
