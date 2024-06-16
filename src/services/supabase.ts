import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = import.meta.env.VITE_REACT_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_REACT_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase URL or key.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
