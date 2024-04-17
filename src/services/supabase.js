import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.SUPABASE_URL;
// const supabaseKey = import.meta.env.SUPABASE_KEY;
// export const supabase = createClient(supabaseUrl, supabaseKey);
export const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_KEY
);
