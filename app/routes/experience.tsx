export default function Experience() {
  return (
    <section id="experience" className="p-3">
      <h2 className="text-mdxl">A2Z Sync</h2>
      <h3 className="text-4xl">Tech Lead</h3>
      <h3 className="text-3xl">Senior Engineer</h3>
      <time dateTime="2025-09">2021 - 2025</time>
      <article>
        <h2 className="text-lg">Summary</h2>
        <p>
          Amazon Auto launch! Yep, we built and managed the handling for the big
          A. Each and every vehicle that is sold on Amazon leverages code I
          wrote; processing credit applications via third party lenders! Insane
          hours, insane attention to details but we got it done on time with
          pizzazz.
        </p>
        <aside>
          <p>What did the boss think of my work?</p>
          <p>
            "There aren’t too many projects that I feel like I really don’t need
            to get involved in but this is one of those that I know things are
            taken care of!"
          </p>
        </aside>

        <p>
          We found time to maintain two In-House apps and roll out major updates
          including Typescript and Storybook integrations.
        </p>
      </article>
      <h3>The bullets</h3>
      <ul className="list-disc">
        <li>Lead 10 person team of engineers</li>
        <li>
          Authored internal documentation about Accessibility, React, React
          Testing Library, coding standards and best practices.
        </li>
        <li>Created reactive and responsive web applications.</li>
        <li>Built and maintained React applications.</li>
        <li>Reduced developer downtime by improving localhost latency</li>
      </ul>

      <article>
        <h3>Widen Enterprises</h3>
        <h4>Software Engineer II</h4>
        <time dateTime="2021-09">October 2017 - September 2021</time>
        <li>
          Maintained a Digital Asset Management system used by 100, 000 daily
          users and over 700 global brands.
        </li>
        <li>
          Contributed to the full lifecycle of 7-10 micro-applications; design,
          user testing, deployment, and iteration.
        </li>
        <li>
          Implemented REST APIs and Java SDKs, improving modularity and
          reusability across the platform.
        </li>
        <li>
          Led accessibility initiatives, ensuring AA compliance by enhancing UI
          components.
        </li>
        <li>
          Helped maintain In-House component UI library containing 200 unique
          components.
        </li>
      </article>

      <article>
        <header></header>
        <h3>5NINES</h3>
        <h4>Software Engineer</h4>
        <time dateTime="2017-10">October 2015 - October 2017</time>
        <li>
          Built administrative dashboards to enable client management and
          real-time data visualization.
        </li>
        <li>
          Developed RESTful APIs to authenticate 1, 000 monthly users,
          implementing robust unit and acceptance testing.
        </li>
        <li>
          Built captive portal application to support 4 clients' network
          hardware for hotels, concert venues, and workspaces.
        </li>
        <li>
          Built and managed RADIUS servers to authenticate users and efficiently
          handle data collection.
        </li>
        <li>
          Developed custom WordPress themes and plugins, integrating
          client-requested features.
        </li>
      </article>
    </section>
  );
}
