import { ReactNode } from 'react'
import Image from "next/image";
import Link from "next/link"; 
import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PrepAI - AI-Powered Interview Practice',
  description: 'Practice job interviews with AI and get instant feedback to improve your interview skills',
  keywords: ['interview practice', 'AI interview', 'job preparation', 'interview skills'],
  openGraph: {
    title: 'PrepAI - AI-Powered Interview Practice',
    description: 'Practice job interviews with AI and get instant feedback to improve your interview skills',
    url: 'https://interview-ai-ten-mu.vercel.app/',
    siteName: 'PrepAI',
    images: [
      {
        url: 'https://interview-ai-ten-mu.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PrepAI - AI Interview Practice',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrepAI - AI-Powered Interview Practice',
    description: 'Practice job interviews with AI and get instant feedback to improve your interview skills',
    images: ['https://interview-ai-ten-mu.vercel.app/og-image.jpg'],
  },
}

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if(!isUserAuthenticated) redirect('/sign-in');

  return (
    <div className='root-layout'>
        <nav>
            <Link href="/" className="flex items-center gap-2" >
                <Image src="/logo.svg" alt="logo" width={38} height={32} />
                <h2 className='text-primary-100'>PrepAI</h2>
            </Link>
        </nav>

        {children}
        <Analytics />
    </div>
  )
}

export default RootLayout