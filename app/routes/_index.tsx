import type { MetaFunction } from "@remix-run/node";
import { Organization } from "~/components/Organization";

export const meta: MetaFunction = () => {
  return [
    { title: "Feacheck" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div >
      <Organization />
    </div>
  );
}
