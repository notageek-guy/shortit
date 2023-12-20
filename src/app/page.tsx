import UrlShortner from "@/components/providers/shortner-provider";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  // const session = await getAuthSession();
  // if (!session?.user) {
  //   redirect("/auth");
  // }

  return <UrlShortner />;
}
