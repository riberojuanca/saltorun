import { revalidatePath, revalidateTag } from "next/cache";

export async function GET() {
  revalidateTag("csv");
  return Response.json({ revalidated: true });
}
