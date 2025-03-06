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

export default function Home() {
  useEffect(() => {
    confetti({ origin: { y: 0.7 } });
  }, []);

  return (
    <main className="m-auto grid max-w-screen-lg">
      <section className="m-5">
        <div className="flex justify-around">
          <div>
            <h1 className="text-4xl font-bold sm:text-5xl">Brian Woestman</h1>
            <h2 className="text-2xl">Senior Software Engineer</h2>
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
