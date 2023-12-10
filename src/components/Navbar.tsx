import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Link from 'next/link';
import { Icons } from '@/components/Icons';
function Navbar() {
  return (
    <div className={'sticky inset-x-0 top-0 z-50 h-16 bg-white'}>
      <header className={'relative bg-white'}>
        <MaxWidthWrapper>
          <div className={'border-b border-gray-200'}>
            <div className={'flex h-16 items-center'}>
              {/*TODO: MOBILE NAV*/}
              <div className={'ml-4 flex lg:ml-0'}>
                <Link href={'/'}>{<Icons.logo className={'h-10 w-10'} />}</Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}

export default Navbar;
