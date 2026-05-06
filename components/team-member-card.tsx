import Image from "next/image";
import type { TeamMember } from "@/lib/site-data";

type TeamMemberCardProps = {
  member: TeamMember;
  imageClassName?: string;
  bodyClassName?: string;
};

export function TeamMemberCard({ member, imageClassName, bodyClassName }: TeamMemberCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden bg-[var(--muted)]">
        <Image
          src={member.image}
          alt={member.imageAlt}
          width={960}
          height={720}
          className={
            imageClassName ??
            "h-56 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] md:h-60"
          }
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.08))]" />
      </div>
      <div className={bodyClassName ?? "flex flex-1 flex-col gap-4 p-5 md:p-6"}>
        <header className="border-b border-[var(--border)] pb-4">
          <h3 className="text-lg font-semibold tracking-tight text-[var(--ink)] md:text-xl">{member.name}</h3>
          <p className="mt-2 inline-flex rounded-full border border-[var(--brand-50)] bg-[var(--brand-50)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--brand)]">
            {member.role}
          </p>
        </header>
        <div className="flex flex-1 flex-col gap-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          {member.bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
