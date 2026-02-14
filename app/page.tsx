'use client'

import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Home() {
  const [user, setUser] = useState<any>(null)
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [bookmarks, setBookmarks] = useState<any[]>([])

  // Get session on load
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      setUser(data.session?.user ?? null)
    }

    getSession()

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
      }
    )

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  // Fetch bookmarks when user logs in
  useEffect(() => {
    if (user) {
      fetchBookmarks()
    }
  }, [user])

  const fetchBookmarks = async () => {
    const { data } = await supabase
      .from('bookmarks')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    setBookmarks(data || [])
  }

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  const logout = async () => {
    await supabase.auth.signOut()
  }

  const saveBookmark = async () => {
    if (!url) {
      alert('Please enter a URL')
      return
    }

    await supabase.from('bookmarks').insert([
      {
        user_id: user.id,
        url,
        title,
      },
    ])

    setUrl('')
    setTitle('')
    fetchBookmarks()
  }

  const deleteBookmark = async (id: string) => {
    await supabase.from('bookmarks').delete().eq('id', id)
    fetchBookmarks()
  }

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[420px]">

        <h1 className="text-3xl font-bold mb-6 text-center">
          📚 Smart Bookmark
        </h1>

        {!user ? (
          <button
            onClick={loginWithGoogle}
            className="w-full bg-red-500 hover:bg-red-600 transition text-white py-2 rounded-lg"
          >
            🔐 Login with Google
          </button>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-600">
                {user.email}
              </p>

              <button
                onClick={logout}
                className="text-sm bg-gray-500 hover:bg-gray-600 transition text-white px-3 py-1 rounded-md"
              >
                Logout
              </button>
            </div>

            {/* Add Bookmark Section */}
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Enter website URL..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="text"
                placeholder="Enter title (optional)..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <button
                onClick={saveBookmark}
                className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-lg"
              >
                Save Bookmark
              </button>
            </div>

            {/* Bookmark List */}
            <div className="mt-6">
              <h2 className="font-semibold mb-3">
                Your Bookmarks
              </h2>

              {bookmarks.length === 0 && (
                <p className="text-gray-500 text-sm">
                  No bookmarks added yet.
                </p>
              )}

              {bookmarks.map((b) => (
                <div
                  key={b.id}
                  className="border rounded-lg p-3 mb-3 flex justify-between items-center hover:shadow-md transition"
                >
                  <div className="max-w-[250px]">
                    <p className="font-medium truncate">
                      {b.title || 'No Title'}
                    </p>

                    <a
                      href={b.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm underline break-words"
                    >
                      {b.url}
                    </a>
                  </div>

                  <button
                    onClick={() => deleteBookmark(b.id)}
                    className="bg-red-500 hover:bg-red-600 transition text-white px-3 py-1 rounded-md text-sm"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  )
}
