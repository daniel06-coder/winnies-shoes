
// import { adminDb } from "@/lib/firebaseAdmin";

// export async function POST(req) {
//   const { id, session } = await req.json();

//   const allowedEmails = [
//     "anyanwud898@gmail.com",
//     "winifredobianuju53@gmail.com",
//   ];
//   if (!session || !allowedEmails.includes(session.user.email)) {
//     return new Response("Unauthorized", { status: 401 });
//   }

//   await fetch("/api/deleteProduct", {
//     method: "POST",
//     body: JSON.stringify({ id: productId, session }),
//   });

//   await adminDb.collection("winnies-shoes").doc(id).delete();
//   return new Response(JSON.stringify({ success: true }));

// }
