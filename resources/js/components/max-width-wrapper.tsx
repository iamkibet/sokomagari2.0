import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';

interface MaxWidthWrapperProps {
    className?: string;
    children: ReactNode;
}

const MaxWidthWrapper: FC<MaxWidthWrapperProps> = ({ className, children }) => {
    return <div className={cn('mx-auto w-full px-4 lg:max-w-[1300px] xl:max-w-[1400px]', className)}>{children}</div>;
};

export default MaxWidthWrapper;
