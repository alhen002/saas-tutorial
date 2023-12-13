'use client';
import { Icons } from '@/components/Icons';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from '@/lib/validators/account-credentials-validator';
import { trpc } from '@/trpc/client';

function Page() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const { mutate, isLoading } = trpc.auth.createPayloadUser.useMutation({});
  function onSubmit({ email, password }: TAuthCredentialsValidator) {
    mutate({ email, password });
  }

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
              href={'/sign-in'}
            >
              Already have an account? Sign-in
              <ArrowRight className={'h-4 w-4 gap-1.5'} />
            </Link>
          </div>
          <div className={'mt-6 grid gap-6'}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={'grid gap-2'}>
                <div className={'grid gap-1 py-2'}>
                  <Label htmlFor={'email'}>Email</Label>
                  <Input
                    {...register('email')}
                    className={cn({
                      'focus-visible:ring-red-500': errors.password,
                    })}
                    placeholder={'you@example.com'}
                  />
                  {errors.email?.message && (
                    <p className={'mt-3 text-red-500'}>
                      {errors.email.message}
                    </p>
                  )}
                </div>{' '}
                <div className={'grid gap-1 py-2'}>
                  <Label htmlFor={'password'}>Password</Label>
                  <Input
                    {...register('password')}
                    className={cn({
                      'focus-visible:ring-red-500': errors.password,
                    })}
                    type={'password'}
                    placeholder={'password'}
                  />
                  {errors.password?.message && (
                    <p className={'mt-3 text-red-500'}>
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <Button>Sign Up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
