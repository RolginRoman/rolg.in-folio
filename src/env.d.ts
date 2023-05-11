/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly R_BASE_URL: string;
  readonly R_HOSTNAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
