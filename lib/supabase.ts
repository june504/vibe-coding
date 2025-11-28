import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://efvpzotvvmambkracdym.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmdnB6b3R2dm1hbWJrcmFjZHltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzMDE0MzcsImV4cCI6MjA3OTg3NzQzN30.eXKw7RcIbNrOImFy7oNKLWE0ncRXO5RssJo4V1jkfbw';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
  console.error('URL:', supabaseUrl ? 'Set' : 'Missing');
  console.error('Key:', supabaseAnonKey ? 'Set' : 'Missing');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

