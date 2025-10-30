"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const BackButton = ({ children = 'Назад', className = '' }: Props): React.ReactElement => {
  const router = useRouter();

  const onBack = (): void => {
    router.back();
  };

  return (
    <button type="button" className={className} onClick={onBack}>
      {children}
    </button>
  );
};

export default BackButton;
