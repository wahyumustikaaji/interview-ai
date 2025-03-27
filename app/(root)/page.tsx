import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'
import { getCurrentuser, getInterviewByUserId, getLatestInterview } from '@/lib/actions/auth.action'

const HomePage = async () => {
  const user = await getCurrentuser();

  const [userInterviews, latesInterviews] = await Promise.all([
    await getInterviewByUserId(user?.id!),
    await getLatestInterview({userId: user?.id!})
  ]);

  const hasPastInterviews = userInterviews?.length! > 0;

  const hasUpcomingInterviews = latesInterviews?.length! > 0; 

  return (
    <>
    <section className='card-cta'>
      <div className='flex flex-col gap-6 max-w-lg'>
        <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
        <p className='text-lg'>
          Practice on real Interview questions & get instant feedback.
        </p>
        <Button asChild className='btn-primary max-sm:w-full'>
          <Link href='/interview'>Start an Interview</Link>
        </Button>
      </div>

      <Image src="/robot.png" alt="robot-dude" width={400} height={400} className='max-sm:hidden'></Image>
    </section>

    <section className='flex flex-col gap-6 mt-8'>
      <h2>Your Interviews</h2>
      <div className='interviews-section'>
        {
        hasPastInterviews ? (
          userInterviews?.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))) : (
          <p>You haven&apos;t taken any interviews yet</p>
        )}
      </div>
    </section>

    <section className='flex flex-col gap-6 mt-8'>
      <h2>Take an Interviews</h2>
      <div className='interviews-section'>
      {
        hasUpcomingInterviews ? (
          latesInterviews?.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))) : (
          <p>There are no new interviews avalilabe</p>
        )}
      </div>
    </section>
    </>
  )
}

export default HomePage