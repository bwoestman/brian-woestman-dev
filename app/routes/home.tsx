import type { Route } from "./+types/home";
import confetti from "canvas-confetti";
import ExperienceCard from "~/components/ExperienceCard";
import employmentData from "../data/employment";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Brian Woestman - Dev" },
    { name: "description", content: "Welcome!" },
  ];
}

export default function Home() {
  useEffect(() => {
    confetti({ origin: { y: 0.7 } });
  }, []);

  return (
    <main className="grid">
      <section className="3 m-5">
        <h1 className="text-4xl font-bold sm:text-5xl">Brian Woestman</h1>
        <h2 className="text-2xl">Senior Software Engineer</h2>
        <h3 className="text-lg">Tech Lead</h3>

        <article className="mt-3">
          <p>
            Full stack engineer with a decade of experience continuously
            delivering performant, scalable and maintainable software. At A2Z
            Sync I just wrapped up the launch of Amazon Autos, amplifying the
            car buying experience to a new level!
          </p>
        </article>

        <div>
          <p className="mt-3 text-lg">Let's build something together!</p>
          <img
            className="mx-auto mt-3 h-auto"
            src="/assets/wall-burst.png"
            alt="Brian bursting through the wall!"
          />
        </div>

        {employmentData.map((job) => (
          <ExperienceCard {...{ ...job }} />
        ))}
      </section>
    </main>
  );
}
