// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jbsyypfzsdobpzbwnazc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impic3l5cGZ6c2RvYnB6YnduYXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3MzQxMjgsImV4cCI6MjA2NzMxMDEyOH0.SwiW9dKTcSdg8i6Yc35O7rO4oghzxYMWJEQN5Xq_raY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);