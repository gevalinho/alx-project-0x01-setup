import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company }) => {
  const imageUrl = `https://i.pravatar.cc/150?u=${username}`;
  const xUrl = `https://twitter.com/${username}`;
  const linkedinUrl = `https://${website}`;

  return (
    <li className="bg-white p-4 rounded-lg shadow">
      <img
        alt={name}
        src={imageUrl}
        className="aspect-3/2 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
      />
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600">{company?.name}</p>
      <p className="text-xs text-gray-500">{email}</p>
      <p className="text-xs text-gray-500">{phone}</p>
      <ul className="mt-4 flex gap-x-4">
        <li>
          <a href={xUrl} className="text-gray-400 hover:text-gray-500">
            Twitter
          </a>
        </li>
        <li>
          <a href={linkedinUrl} className="text-gray-400 hover:text-gray-500">
            Website
          </a>
        </li>
      </ul>
    </li>
  );
};

export default UserCard;
