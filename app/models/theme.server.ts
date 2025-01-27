import { createCookie } from "@remix-run/node";

export type Theme = "light" | "dark";

const cookie = createCookie("theme", {
  maxAge: 31_536_000,
});

export function validateTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

export async function parseTheme(request: Request) {
  const header = request.headers.get("Cookie");
  const vals = await cookie.parse(header);

  const theme = vals?.theme;
  if (validateTheme(theme)) {
    return theme;
  } else {
    return "dark";
  }
}

export function serializeTheme(theme: Theme) {
  return cookie.serialize({ theme });
}
