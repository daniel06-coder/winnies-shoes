import { auth } from "@/auth";
import { adminDb } from "@/lib/firebaseAdmin";

export async function POST(req) {
  const session = await auth();

  // 🔒 Only you + your mom
  const allowedEmails = ["anyanwud898@gmail.com", "winifredobianuju53@gmail.com"];

  if (!session || !allowedEmails.includes(session.user.email)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = await req.json();

  await adminDb.collection("winnies-shoes").add({
    ...body,
    createdAt: new Date(),
  });

  return Response.json({ success: true });
}
