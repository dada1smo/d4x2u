import { useRouteLoaderData } from "@remix-run/react";

import { Theme } from "~/models/theme.server";
import type { loader as rootLoader } from "~/root";

export function useTheme(): Theme {
  const rootLoaderData = useRouteLoaderData<typeof rootLoader>("root");
  const rootTheme = rootLoaderData?.theme ?? "system";

  return rootTheme;
}
