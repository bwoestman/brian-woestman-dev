import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import type { Route } from "./+types/home";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import Experience from "./experience";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Brian Woestman - Dev" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="grid">
      <section className="p-3">
        <h1 className="text-4xl font-bold">Brian Woestman</h1>
        <h2 className="text-2xl">Frontend Developer </h2>
        <article className="p-2">
          <p>
            Stinky cat leave fur on owners clothes yet refuse to come home when
            humans are going to bed; stay out all night then yowl like i am
            dying at 4am please stop looking at your phone and pet me. Kitty
            power in the middle of the night i crawl onto your chest and purr
            gently to help you sleep. Human is behind a closed door, emergency!
            abandoned! meeooowwww!!!
          </p>
          <p className="pt-2">Feel free to reach out!</p>
        </article>
      </section>
      <img src="/assets/wall-burst.png" alt="" />
      <section className="p-3">
        <Experience />
      </section>
    </main>
  );
}
