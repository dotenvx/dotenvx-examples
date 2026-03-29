export async function register() {
  const { config } = await import('@dotenvx/dotenvx')

  const vercelEnv = process.env.VERCEL_ENV
  if (vercelEnv === 'production') {
    config({ path: ['.env.production', '.env'] })
  } else {
    config({ path: ['.env'] })
  }
}
