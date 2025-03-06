import type { Route } from "./+types/home";
import confetti from "canvas-confetti";
import ExperienceCard from "~/components/ExperienceCard";
import employmentData from "../data/employment";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Brian Woestman - Dev" },
    { name: "description", content: "Welcome!" },
  ];
}

const colors = [
  "#2323ff",
  "#eb00be",
  "#ff0079",
  "#ff6f47",
  "#ffbd3a",
  "#f9f871",
];

export default function Home() {
  useEffect(() => {
    confetti({
      angle: -45,
      spread: 120,
      origin: { x: 0, y: 0 },
      colors,
      scalar: 1.2,
    });
    confetti({
      angle: -90,
      spread: 120,
      origin: { x: 0.5, y: 0 },
      colors,
    });
    confetti({
      angle: -135,
      spread: 120,
      origin: { x: 1, y: 0 },
      colors,
    });
  }, []);

  return (
    <main className="m-auto grid max-w-screen-lg">
      <section className="m-5">
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl font-bold sm:text-5xl">Brian Woestman</h1>
            <h2 className="text-lg sm:text-2xl">Senior Software Engineer</h2>
          </div>
          <div className="flex flex-col justify-around">
            <a href="https://www.linkedin.com/in/bdub1897/">
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
            <a href="https://github.com/bwoestman">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
          </div>
        </div>

        <article className="mt-3 sm:grid sm:grid-cols-2">
          <div className="mt-5">
            <p>
              Full stack engineer with a decade of experience continuously
              delivering performant, scalable and maintainable software. At A2Z
              Sync I just wrapped up the launch of Amazon Autos, amplifying the
              car buying experience to a new level!
            </p>
            <p className="mt-8 text-center text-lg sm:text-left">
              Let's build something together!
            </p>
          </div>

          <img
            className="mt-3"
            src="/assets/wall-burst.png"
            alt="Brian bursting through the wall!"
          />
        </article>
        {employmentData.map((job) => (
          <ExperienceCard key={job.company} {...{ ...job }} />
        ))}
      </section>
    </main>
  );
}
