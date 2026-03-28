export async function GET() {
  return new Response(
    JSON.stringify({
      HELLO: process.env.HELLO ?? null,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
