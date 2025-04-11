import { Appearance, useAppearance } from '@/hooks/use-appearance';
import { cn } from '@/lib/utils';
import { Monitor, Moon, Sun } from 'lucide-react';
import { HTMLAttributes, useCallback, useEffect, useState } from 'react';

const THEME_CYCLE: Appearance[] = ['light', 'dark', 'system'];
const DEFAULT_THEME: Appearance = 'light';

type ThemeIconMap = Record<Appearance, typeof Sun | typeof Moon | typeof Monitor>;
const THEME_ICON_MAP: ThemeIconMap = {
    light: Sun,
    dark: Moon,
    system: Monitor,
};

interface AppearanceToggleProps extends HTMLAttributes<HTMLButtonElement> {
   
    iconClassName?: string;
}

export default function AppearanceToggle({ className = true, iconClassName, ...props }: AppearanceToggleProps) {
    const { appearance = DEFAULT_THEME, updateAppearance } = useAppearance();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => setIsMounted(true), []);

    const getNextTheme = useCallback((currentTheme: Appearance) => {
        const currentIndex = THEME_CYCLE.indexOf(currentTheme);
        return THEME_CYCLE[(currentIndex + 1) % THEME_CYCLE.length];
    }, []);

    const handleToggle = useCallback(() => {
        const nextTheme = getNextTheme(appearance);
        updateAppearance?.(nextTheme);
    }, [appearance, getNextTheme, updateAppearance]);

    const CurrentIcon = THEME_ICON_MAP[appearance];
    const nextTheme = getNextTheme(appearance);
    const ariaLabel = `${appearance} theme (switch to ${nextTheme})`;

    if (!isMounted) return null;

    return (
        <button
            type="button"
            aria-label={ariaLabel}
            onClick={handleToggle}
            className={cn(
                'flex items-center gap-2 rounded-lg p-2',
                'transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800',
                'focus:ring-2 focus:ring-neutral-400 focus:outline-none dark:focus:ring-neutral-600',
                className,
            )}
            {...props}
        >
            <CurrentIcon className={cn('h-5 w-5 transition-transform hover:scale-110', iconClassName)} aria-hidden="true" />
        </button>
    );
}
