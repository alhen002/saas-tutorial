'use client';

import { useEffect, useRef, useState } from 'react';
import { PRODUCT_CATEGORIES } from '@/config';
import NavItem from '@/components/NavItem';
import { useOnClickOutside } from '@/hooks/useClickOutside';

function NavItems() {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleFunction = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
      }
    };

    document.addEventListener('keydown', handleFunction);

    return () => {
      document.removeEventListener('keydown', handleFunction);
    };
  }, [setActiveIndex]);

  useOnClickOutside(navRef, () => {
    setActiveIndex(null);
  });

  return (
    <div className={'flex h-full gap-4'} ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, index) => {
        function handleOpen() {
          if (activeIndex === index) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        }

        const isOpen = index === activeIndex;
        const isAnyOpen = activeIndex !== null;
        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
}

export default NavItems;
