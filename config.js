// Supabase Configuration
// REPLACE THESE VALUES WITH YOUR ACTUAL SUPABASE KEYS
const SUPABASE_URL = 'https://slpenauzgilgswecawsq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNscGVuYXV6Z2lsZ3N3ZWNhd3NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4MzkyODcsImV4cCI6MjA4MzQxNTI4N30.Mc7tyKpmu08ecO6ynYMwMf_BJxU-19TPfCrT0GAGWDA';

// Initialize the client
const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
