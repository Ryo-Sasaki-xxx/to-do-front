'use client';
import Link from 'next/link';
import React from 'react';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { Button } from '../ui/button';
import { useTodo } from '@/features/TodoList/hooks/useTodo';

interface Nav {
  href: string;
  label: string;
}

const NAV_ITEMS: Nav[] = [
  {
    href: '/dashboard',
    label: 'ささりょう',
  },
  {
    href: '/todo',
    label: 'まえひろ',
  },
];

export const Header = () => {
  const { isActive } = useCustomRouter();
  const { handleClickAdd } = useTodo();

  return (
    <header className={'flex gap-5 p-4'}>
      {NAV_ITEMS.map((item) => (
        <Link
          href={item.href}
          key={item.href}
          className={isActive(item.href) ? 'text-sky-400' : 'text-[#333]'}
        >
          {item.label}
        </Link>
      ))}
      <Button
        onClick={() =>
          handleClickAdd({ title: 'ジャガイモ', status: 'working' })
        }
      >
        ボタン
      </Button>
    </header>
  );
};
