'use client'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClient } from '@/utils/supabase/client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect, useState } from 'react'

export default function LoginPage() {
  const supabase = createClient()
  const [origin, setOrigin] = useState('')

  useEffect(() => {
    setOrigin(window.location.origin)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">LifeSOC</h1>
          <p className="mt-2 text-slate-600">
            Holistic Productivity & 8 Currencies Tracker
          </p>
        </div>

        <Card className="border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl text-center">Welcome Back</CardTitle>
          </CardHeader>
          <CardContent>
            <Auth
              supabaseClient={supabase}
              view="magic_link"
              appearance={{ 
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: '#2563eb',
                      brandAccent: '#1d4ed8',
                    },
                  },
                },
              }}
              theme="light"
              showLinks={true}
              providers={['google', 'github']}
              redirectTo={`${origin}/auth/callback`}
            />
          </CardContent>
        </Card>
        
        <p className="text-center text-xs text-slate-400">
          By signing in, you agree to track your 8 currencies and build a better life.
        </p>
      </div>
    </div>
  )
}
