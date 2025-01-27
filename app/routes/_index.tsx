import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import UIButton from "~/ui/components/Button";
import UIThemeSwitch from "~/ui/components/ThemeSwitch";
import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  const user = useOptionalUser();

  return (
    <main>
      <UIButton>Teste</UIButton>
    </main>
  );
}
