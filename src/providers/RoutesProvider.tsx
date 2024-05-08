import { Routes } from "react-router-dom";

export const RoutesProvider = ({ children }: { children: React.ReactNode }) => {
  return <Routes>{children}</Routes>;
};
