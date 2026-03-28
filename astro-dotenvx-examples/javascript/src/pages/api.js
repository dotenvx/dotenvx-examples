export async function GET() {
  return new Response(
    JSON.stringify({
      ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY ?? null,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
