import Image from "next/image";
import { profile } from "../../data/portfolio";

export const Profile = () => {
  return (
    <section className="group flex flex-col items-center gap-6 sm:flex-row">
      <div className="relative shrink-0">
        <div className="relative h-32 w-32 overflow-hidden rounded-full bg-gray-200 shadow-md ring-4 ring-blue-100/80 transition-[transform,box-shadow,ring-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:shadow-lg group-hover:ring-blue-200/90">
          <Image
            src={profile.avatarUrl}
            alt={profile.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority
          />
        </div>
      </div>
      <div className="text-center sm:text-left">
        <h2 className="heading-accent text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-blue-950">
          {profile.name}
        </h2>
        <p className="mt-1 text-lg text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
          {profile.role}
        </p>
        <p className="mt-3 leading-relaxed text-gray-700">{profile.bio}</p>
      </div>
    </section>
  );
};
