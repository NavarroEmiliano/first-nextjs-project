import Image from "next/image";
import { User } from "../types/user.type";
import BuildingIcon from "./icons/BuildingIcon";
import LinkIcon from "./icons/LinkIcon";
import LocationIcon from "./icons/LocationIcon";
import TwitterIcon from "./icons/TwitterIcon";

interface Props {
  user: User;
}

const validateAndFormatUrl = (url: string) => {
  if (!url.startsWith("https://")) {
    return `https://${url}`;
  }
  return url;
};

const UserCardInfo = ({ user }: Props) => {
  return (
    <article className="flex flex-wrap gap-y-8 rounded-2xl bg-slate-900 p-4 text-white">
      <div className="flex flex-auto">
        <div className="h-24 w-24 min-w-20 flex-none overflow-hidden rounded-full">
          <Image
            src={user.avatar_url}
            width={96}
            height={96}
            alt={`profile img user ${user.name}`}
          />
        </div>
        <div className="flex flex-col justify-center pl-4 md:grid md:grid-cols-2 md:items-center">
          <p className="text-2xl font-semibold">{user.name}</p>
          <p className="text-blue-700 md:text-right">@{user.login}</p>
          <p>
            {new Date(user.created_at || "").toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-8 md:pl-28">
        <p
          className={`leading-8 tracking-wider ${user.bio ?? "text-gray-500"}`}
        >
          {user.bio ?? "Without bio"}
        </p>
        <div className="flex justify-around rounded-xl bg-slate-950 p-4">
          <article>
            <p>Repos</p>
            <p className="text-center font-bold">{user.public_repos}</p>
          </article>
          <article>
            <p>Followers</p>
            <p className="text-center font-bold">{user.followers}</p>
          </article>
          <article>
            <p>Following</p>
            <p className="text-center font-bold">{user.following}</p>
          </article>
        </div>
        <div className="flex flex-col gap-2 md:grid md:grid-cols-2">
          <article className="flex items-center gap-2">
            <i>
              <LocationIcon className="h-4 w-4 fill-white" />
            </i>
            <p className={`${user.location ?? "text-gray-500"}`}>
              {user.location || "Not available"}
            </p>
          </article>
          <article className="flex items-center gap-2">
            <i>
              <LinkIcon className="h-4 w-4 fill-white" />
            </i>
            {user.blog ? (
              <a className="truncate" href={validateAndFormatUrl(user.blog)}>
                {user.blog}
              </a>
            ) : (
              <p className="text-gray-500">Not available </p>
            )}
          </article>
          <article className="flex items-center gap-2">
            <i>
              <TwitterIcon className="h-4 w-4 fill-white" />
            </i>
            {user.twitter_username ? (
              <a href={`https://x.com/${user.twitter_username}`}>
                {user.twitter_username}
              </a>
            ) : (
              <p className="text-gray-500">Not available </p>
            )}
          </article>
          <article className="flex items-center gap-2">
            <i>
              <BuildingIcon className="h-4 w-4 fill-white" />
            </i>
            <p className={`${user.company ?? "text-gray-500"}`}>
              {user.company ?? "Not available"}
            </p>
          </article>
        </div>
      </div>
    </article>
  );
};

export default UserCardInfo;
