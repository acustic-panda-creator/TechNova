
import { createClient } from
  "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://ddrdzlskddzqsvzmdkue.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_wzYocR5xl7DVIwCTjSK3Sg_rugBAVL2";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
