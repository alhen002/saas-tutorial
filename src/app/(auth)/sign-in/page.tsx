import { Icons } from '@/components/Icons';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

function Page() {
  return (
    <>
      <div
        className={
          'container relative flex flex-col items-center justify-center pt-20 lg:px-0'
        }
      >
        <div
          className={
            'space-y6 mx-auto flex w-full flex-col justify-center sm:w-[350px]'
          }
        >
          <div
            className={
              'space- flex flex-col items-center space-y-2 text-center'
            }
          >
            <Icons.logo className={'h-36 w-36 text-2xl font-bold'} />
            <h1 className={'mt-6 text-2xl font-bold'}>Create an account</h1>
            <Link
              className={buttonVariants({ variant: 'link' })}
              href={'/sign-up'}
            >
              Still not have an account? Sign-up
              <ArrowRight className={'h-4 w-4'} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
