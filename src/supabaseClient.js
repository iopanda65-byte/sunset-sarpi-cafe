import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pnyopezugqqeyjyuiyuo.supabase.co';
const supabaseAnonKey = 'აქ_ჩააფეისტე_შენი_გრძელი_anon_public_key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);