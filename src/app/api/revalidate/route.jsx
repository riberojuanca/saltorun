import GeneralMujeres from "@/app/tables/mujeres/GeneralMujeres/page";
import { revalidateTag } from "next/cache";

export async function GET() {
  revalidateTag("csv");
  return Response.json({ revalidated: true });
}
