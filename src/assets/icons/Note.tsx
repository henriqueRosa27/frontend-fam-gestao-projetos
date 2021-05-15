import { FC } from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

const NoteIcon: FC<SvgIconProps> = (props: SvgIconProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.627 15.87L16 23.5L12.25 24.25L13 20.5L20.631 12.87C21.0274 12.4729 21.5654 12.2498 22.1265 12.2498C22.6876 12.2498 23.2256 12.4729 23.622 12.87L23.631 12.878C24.4559 13.7054 24.4541 15.0448 23.627 15.87Z"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.24609 21.25H3.24609C2.41767 21.25 1.74609 20.5784 1.74609 19.75V3.25C1.74609 2.42157 2.41767 1.75 3.24609 1.75H18.2461C19.0745 1.75 19.7461 2.42157 19.7461 3.25V10"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.24609 6.25H15.2461"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.24609 10.75H15.2461"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.24609 15.25H13.7461"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export { NoteIcon };
