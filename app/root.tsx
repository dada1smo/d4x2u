import archivoFont from "@fontsource/archivo/latin.css";
import theme from "@radix-ui/themes/styles.css";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { getUser } from "~/session.server";
import ThemeProvider from "~/ui/providers/ThemeProvider";

import { parseTheme } from "./models/theme.server";
import UIThemeSwitch from "./ui/components/ThemeSwitch";
import { useTheme } from "./ui/hooks/use-theme";
import globalStyles from "./ui/styles/global.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: theme },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: archivoFont },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: globalStyles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json(
    {
      user: await getUser(request),
      theme: await parseTheme(request),
    },
    { headers: { Vary: "Cookie" } },
  );
};

export default function App() {
  const theme = useTheme();

  return (
    <html lang="en" className={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider>
          <UIThemeSwitch />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </ThemeProvider>
      </body>
    </html>
  );
}

// export default function App() {
//   const theme = useTheme();

//   return (
//     <Document theme={theme}>
//       <Outlet />
//     </Document>
//   );
// }

// export function ErrorBoundary() {
//   return (
//     <Document>
//       <GeneralErrorBoundary />
//     </Document>
//   );
// }
