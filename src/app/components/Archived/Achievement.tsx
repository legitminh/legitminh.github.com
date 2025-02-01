import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export type MadeWithProps = {
  name: string;
  link?: string;
  icon?: string | ReactNode;
};

export type AchievementProps = {
  image: string;
  description: string;
  title: string;
  madeWith: (string | MadeWithProps)[];
  date: string;
  link?: string;
  emph?: boolean;
};

function MadeWith({ name, link, icon }: MadeWithProps) {
  let result = (
    <div className="flex items-center gap-0.5">
      <p className="text-xs text-slate-400">{name}</p>
      {icon && (
        <div className="flex items-center justify-center h-4 w-4">
          {typeof icon === "string" ? (
            <Image
              src={icon}
              alt={name}
              width={22}
              height={22}
              className="object-cover w-full h-full"
            />
          ) : (
            icon
          )}
        </div>
      )}
    </div>
  );
  if (link) result = <Link href={link}>{result}</Link>;
  return result;
}

function handleMadeWith(madeWith: (string | MadeWithProps)[]) {
  return madeWith.map((item, index) =>
    typeof item === "string" ? (
      <span key={index} className="text-xs text-slate-400">
        {`${item}${index !== madeWith.length - 1 ? "," : ""}`}
      </span>
    ) : (
      <div key={index} className="flex">
        <MadeWith {...item} />
        {index !== madeWith.length - 1 && (
          <span className="text-xs text-slate-400 -ml-1">, </span>
        )}
      </div>
    ),
  );
}

export default function Achievement({
  image,
  description,
  title,
  madeWith,
  date,
  link,
  emph = false,
}: AchievementProps) {
  let result = (
    <>
      <div className={`card ${emph && "emph"}`}>
        <div className="image">
          <Image
            src={image}
            alt={title}
            width={156}
            height={156}
            className="max-sm:w-full sm:h-full object-cover rounded-lg min-h-[10rem]"
          />
        </div>
        <div className="content">
          <div className="flex flex-col">
            <h3 className="text-2xl font-extrabold leading-snug">{title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex gap-2">
            <span className="text-xs text-slate-400 -mr-1">made with </span>
            {handleMadeWith(madeWith)}
            <div className="flex items-center mt-1">
              <svg
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2" cy="2" r="2" fill="#A0AEC0" />
              </svg>
            </div>
            <span className="text-xs text-slate-400">{date}</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card {
          @apply rounded-lg shadow-sm bg-white flex relative;
        }

        .image {
          @apply rounded-lg overflow-clip;
        }

        .content {
          @apply flex-1 flex flex-col justify-between;
        }

        .emph {
          @apply bg-gradient-to-br from-blue-100 to-indigo-100 shadow;
        }

        .emph h3 {
          @apply text-blue-600;
        }

        .emph p {
          @apply text-blue-400;
        }

        /* Small */
        @media (max-width: 639px) {
          .card {
            @apply h-80 w-full max-w-xs flex-col items-center gap-4 pb-5;
          }

          .image {
            @apply h-40 w-full;
          }

          .content {
            @apply px-5;
          }
        }
        /* Large */
        @media (min-width: 640px) {
          .card {
            @apply max-w-lg gap-4;
          }

          .content {
            @apply py-5;
          }

          .image {
            @apply min-h-full;
          }
        }
      `}</style>
    </>
  );
  if (link) result = <Link href={link}>{result}</Link>;
  return result;
}
