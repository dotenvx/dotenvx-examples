import { config } from '@dotenvx/dotenvx'

config()

console.log('HELLO:', process.env.HELLO)
