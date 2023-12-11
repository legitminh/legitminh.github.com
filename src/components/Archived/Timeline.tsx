import { ReactNode } from "react";

export type TimelineProps = {
  children: ReactNode;
  className?: string;
};

export default function Timeline({ children, className }: TimelineProps) {
  return (
    <>
      <div className={`timeline ${className}`}>{children}</div>
      <style jsx global>{`
        /* extend the last line */
        .timeline .item:last-child::before {
          bottom: -1rem;
        }
        .timeline .item:first-child {
          margin-top: 3rem;
        }
      `}</style>
    </>
  );
}
