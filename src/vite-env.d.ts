/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_REACT_SUPABASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
