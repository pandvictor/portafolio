import { TechStack } from "../types/types";

const DEFAULT_ICON = "javascript.svg";

const mapNameToIcon = (name?: string) => {
  const key = (name || "").toLowerCase();
  if (key.includes("react native")) return "react.svg";
  if (key.includes("react")) return "react.svg";
  if (key.includes("expo")) return "expo.svg";
  if (key.includes("redux")) return "redux.svg";
  if (key.includes("rtk") || key.includes("query")) return "rtk-query.svg";
  if (key.includes("jira")) return "jira.svg";
  if (key.includes("gitlab")) return "gitlab.svg";
  if (key.includes("git")) return "git.svg";
  if (key.includes("mongo")) return "mongodb.svg";
  if (key.includes("scrum") || key.includes("agile")) return "scrum.svg";
  if (key.includes("android")) return "android.svg";
  if (key.includes("aws")) return "aws.svg";
  if (key.includes("ios")) return "ios.svg";
  if (key.includes("docker")) return "docker.svg";
  if (key.includes("kubernetes")) return "kubernetes.svg";
  if (key.includes("mysql")) return "mysql-database.svg";
  if (key.includes("node")) return "nodejs.svg";
  if (key.includes("typescript") || key === "ts") return "typescript.png";
  if (key.includes("javascript")) return "javascript.svg";
  return DEFAULT_ICON;
};

export const resolveTechIcon = (name?: string, explicitIcon?: string) => {
  if (explicitIcon) return explicitIcon;
  return mapNameToIcon(name);
};

export const resolveTechIconFromStack = (tech: TechStack) =>
  resolveTechIcon(tech.name, tech.icon);
