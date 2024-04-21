import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yazyhwunsvceubbnfjjo.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlhenlod3Vuc3ZjZXViYm5mampvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzMzkzMDMsImV4cCI6MjAyODkxNTMwM30.RSHs1oyO5ym1qVTdNp3OVH5TaXzDpmhqipT5OQJa3Po';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
