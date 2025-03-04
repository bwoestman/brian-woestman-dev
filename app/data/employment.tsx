export default [
  {
    company: "A2Z Sync",
    dates: ["2021", "2025"] as [string, string],
    titles: ["Senior Software Engineer", "Tech Lead"],
    description: {
      title: "Amazon Autos",
      content: (
        <>
          <p className="mt-2">
            Yep, we built and managed the handling for the big A. Each and every
            vehicle that is sold on Amazon leverages code I wrote; processing
            credit applications via third party lenders, generating contracts,
            and supplementing the sales workflows! Insane hours, insane
            attention to detail but we got it done on time with pizzazz.
          </p>

          <p className="mt-2">
            We still found time to maintain two In-House apps and roll out major
            updates including Typescript and Storybook integrations.
          </p>
          <aside className="m-3">
            <h4 className="mb-2 text-lg">What did my boss say?</h4>
            <p className="border-l-2 border-l-blue-400 pl-3">
              There aren’t too many projects that I feel like I really don’t
              need to get involved in but this is one of those that I know
              things are taken care of!
            </p>
          </aside>

          <ul className="m-3 list-disc">
            <li>Lead 10 person team of engineers</li>
            <li>
              Authored internal documentation about Accessibility, React, React
              Testing Library, coding standards and best practices.
            </li>
            <li>Created reactive and responsive web applications.</li>
            <li>Built and maintained React applications.</li>
            <li>Reduced developer downtime by improving localhost latency</li>
          </ul>
        </>
      ),
    },
  },
  {
    company: "Widen Enterprises",
    dates: ["2017", "2021"] as [string, string],
    titles: ["Software Engineer II"],
    description: {
      title: "Doin' that DAM thing!",
      content: (
        <>
          <ul className="m-3 list-disc">
            <li>
              Maintained a Digital Asset Management system used by 100, 000
              daily users and over 700 global brands.
            </li>
            <li>
              Contributed to the full lifecycle of 7-10 micro-applications;
              design, user testing, deployment, and iteration.
            </li>
            <li>
              Implemented REST APIs and Java SDKs, improving modularity and
              reusability across the platform.
            </li>
            <li>
              Led accessibility initiatives, ensuring AA compliance by enhancing
              UI components.
            </li>
            <li>
              Helped maintain In-House component UI library containing 200
              unique components.
            </li>
          </ul>
        </>
      ),
    },
  },
  {
    company: "5NINES",
    dates: ["2015", "2017"] as [string, string],
    titles: ["Software Engineer"],
    description: {
      title: "Wi-5 Captive Portal!",
      content: (
        <>
          <ul className="m-3 list-disc">
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
              Built and managed RADIUS servers to authenticate users and
              efficiently handle data collection.
            </li>
            <li>
              Developed custom WordPress themes and plugins, integrating
              client-requested features.
            </li>
          </ul>
        </>
      ),
    },
  },
];
