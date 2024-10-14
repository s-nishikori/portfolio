import { FC } from "react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
} from 'react-icons/ri'

import Link from "next/link"

interface socialProps {
  containerStyles: string,
  iconsStyles: string,
}

const icons = [
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <RiFacebookFill />,
  },
]

export const Socials: FC<socialProps> = (props) => {
  return (
    <div className={`${props.containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${props.iconsStyles}`}>
              {icon.name}
            </div>
          </Link>
        )
      })}
    </div>
  );
}