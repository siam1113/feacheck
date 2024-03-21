import { Project } from "~/components/Project";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({
  params,
}: LoaderFunctionArgs) => {
  return params.orgId;
};

export default function Projects() {
  const orgId = useLoaderData<typeof loader>();
  console.log(orgId);
  return (
    <div >
      <Project orgId={orgId} />
    </div>
  );
}
