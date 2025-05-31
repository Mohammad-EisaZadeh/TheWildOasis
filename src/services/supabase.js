import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wvgulpngadweglxloutx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2Z3VscG5nYWR3ZWdseGxvdXR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwOTg4NDUsImV4cCI6MjA2MzY3NDg0NX0.4o6GiqGjz8yZIjzreX4jWu2ST7vksmA4eoJqct16P6s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
