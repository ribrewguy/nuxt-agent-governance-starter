import { defineConfig } from '@playwright/test'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import net from 'node:net'
import dotenv from 'dotenv'
import type { ConfigOptions } from '@nuxt/test-utils/playwright'

const envPath = process.env.E2E_ENV_PATH
  || process.env.DOTENV_CONFIG_PATH
  || path.resolve(process.cwd(), '.env')

dotenv.config({ path: envPath })

const preferredPort = Number(process.env.E2E_PORT || '3001')

const isPortOpen = (port: number, hostname: string) => new Promise<boolean>((resolve) => {
  const server = net.createServer()
  server.once('error', () => resolve(false))
  server.once('listening', () => {
    server.close(() => resolve(true))
  })
  server.listen(port, hostname)
})

const findOpenPort = async (start: number, attempts: number, hostname: string) => {
  for (let offset = 0; offset < attempts; offset += 1) {
    const port = start + offset
    if (await isPortOpen(port, hostname)) {
      return port
    }
  }
  return start
}

const port = await findOpenPort(preferredPort, 20, '127.0.0.1')

export default defineConfig<ConfigOptions>({
  testDir: 'tests/e2e',
  timeout: 60_000,
  expect: {
    timeout: 15_000
  },
  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  nuxt: {
    rootDir: fileURLToPath(new URL('.', import.meta.url)),
    port
  }
})
