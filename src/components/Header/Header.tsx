import { FC } from "react";

type HeaderProps = unknown;

const Header: FC<HeaderProps> = () => {
  return (
    <div className="mx-auto w-1/2 h-8 bg-black text-blue-700 ">
      <h1 className="flex items-center justify-center">Aboba</h1>
    </div>
  );
};

export { Header };
