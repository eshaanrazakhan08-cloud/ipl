import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vlrgfrhmzbvsoeuwusso.supabase.co";
const supabaseKey = "sb_publishable_6kD84iH9y3sC0XTBShx3SA_nmYz8KRr";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);