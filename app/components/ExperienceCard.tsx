import classNames from "classnames";
import type { PropsWithChildren, ReactNode } from "react";

type ExperienceCardProps = {
  company: string;
  titles: string[];
  dates: [string, string];
  description: {
    title: string;
    content: ReactNode;
  };
};

export default function ({
  company,
  titles,
  dates,
  description,
}: PropsWithChildren<ExperienceCardProps>) {
  const [startDate, endDate] = dates;

  return (
    <article className="mt-5">
      <h2 className="text-mdxl">{company}</h2>

      {titles.map((title, index) => (
        <h3 className={classNames("text-2xl", { "text-4xl": index === 0 })}>
          {title}
        </h3>
      ))}

      <time dateTime="2025-09">{`${startDate} - ${endDate}`}</time>
      <article>
        <h4 className="text-lg">{description.title}</h4>
        {description.content}
      </article>
    </article>
  );
}
