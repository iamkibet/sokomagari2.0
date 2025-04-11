import AppLogo from '@/components/app-logo';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Navigation } from '@/components/navigation';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { UserCircle } from 'lucide-react';
import { ReactNode } from 'react';
import AppearanceToggleTab from '../components/appearance-tabs';

interface GuestLayoutProps {
    children: ReactNode;
    title?: string;
}

const GuestLayout = ({ children }: GuestLayoutProps) => {
    const { auth } = usePage<SharedData>().props;

    return (
        <div className="flex min-h-screen flex-col">
            {/* Header */}
            <header className="bg-background sticky top-0 z-50 shadow-sm">
                <MaxWidthWrapper>
                    <div className="flex h-16 items-center justify-between">
                        {/* Mobile Navigation */}
                        <div className="md:hidden">
                            <Navigation mobile />
                        </div>

                        {/* Logo */}
                        <a href="/" className="flex items-center gap-2">
                            <AppLogo />
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden flex-1 items-center justify-center md:flex">
                            <Navigation />
                        </nav>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-4">
                            <AppearanceToggleTab />
                            <a href={auth?.user ? '/dashboard' : '/login'} aria-label={auth?.user ? 'View dashboard' : 'Sign in'}>
                                <UserCircle className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>

            {/* Main Content */}
            <main className="flex-1">
                <MaxWidthWrapper className="py-8">{children}</MaxWidthWrapper>
            </main>

            {/* Footer */}
            <footer className="bg-background mt-auto border-t dark:border-gray-800">
                <MaxWidthWrapper>
                    <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-3 lg:grid-cols-4">
                        {/* Brand Info */}
                        <div className="space-y-4">
                            <AppLogo  />
                            <p className="text-muted-foreground text-sm">Kenya's Leading Automotive Marketplace</p>
                            <div className="flex items-center space-x-4">
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-facebook"
                                    >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-twitter"
                                    >
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-instagram"
                                    >
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-2">
                            <h3 className="text-md font-semibold">Services</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/buy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                        Buy a Vehicle
                                    </a>
                                </li>
                                <li>
                                    <a href="/sell" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                        Sell Your Vehicle
                                    </a>
                                </li>
                                <li>
                                    <a href="/finance" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                        Financing
                                    </a>
                                </li>
                                <li>
                                    <a href="/value" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                        Instant Valuation
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="space-y-2">
                            <h3 className="text-md font-semibold">Company</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/careers" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="/press" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                        Press
                                    </a>
                                </li>
                                <li>
                                    <a href="/partners" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                        Partners
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="space-y-2">
                            <h3 className="text-md font-semibold">Support</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/help" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t py-6 text-center dark:border-gray-800">
                        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Sokomagari. All rights reserved.</p>
                        <p className="text-muted-foreground mt-1 text-sm">Proudly Kenyan 🇰🇪</p>
                    </div>
                </MaxWidthWrapper>
            </footer>
        </div>
    );
};

export default GuestLayout;
