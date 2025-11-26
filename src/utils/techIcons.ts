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
  if (key.includes("bitcoin") || key === "btc") return "bitcoin.svg";
  if (key.includes("xrp") || key.includes("ripple")) return "xrp.svg";
  if (key.includes("usdt") || key.includes("tether")) return "usdt.svg";
  if (key.includes("eth") || key.includes("ethereum")) return "eth.svg";
  if (key.includes("dash")) return "dash.svg";
  if (key.includes("ada") || key.includes("cardano")) return "ada.svg";
  if (key.includes("java")) return "java.svg";
  if (key.includes("c#") || key.includes("csharp") || key === "c#") return "csharp.svg";
  if (key.includes(".net") || key.includes("dotnet")) return "dotnetcore.svg";
  if (key.includes("iis")) return "iis.svg";
  if (key.includes("sql server") || key.includes("sqlserver")) return "sqlserver.svg";
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
