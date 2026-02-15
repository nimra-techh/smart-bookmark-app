import { supabase } from '@/lib/supabaseClient'

async function testConnection() {
  const { data, error } = await supabase.from('bookmarks').select('*').limit(1)

  if (error) {
    console.error('❌ Supabase error:', error.message)
  } else {
    console.log('✅ Supabase connected! Sample data:', data)
  }
}

testConnection()
