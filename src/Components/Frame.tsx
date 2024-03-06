import { FC, ReactNode } from "react";

type FrameProps = {
  center?: boolean;
  children?: ReactNode;
};
const Frame: FC<FrameProps> = ({ children, center }) => {
  return <main className={`frame ${center ? "frame--center" : ""}`}>{children}</main>;
};
export default Frame;
