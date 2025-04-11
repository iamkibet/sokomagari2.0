'use client';

import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { ArrowRight, BadgeCheck, Medal, Menu, ShieldCheck, Star } from 'lucide-react';
import * as React from 'react';

interface NavigationProps {
    mobile?: boolean;
}

export function Navigation({ mobile = false }: NavigationProps) {
    if (mobile) {
        return (
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="md:hidden">
                        <Menu className="h-4 w-4" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <nav className="flex h-full flex-col gap-6 pt-6">
                        <MobileNavItem title="Vehicles" href="/vehicles">
                            <MobileSubItem href="/vehicles/suvs">SUVs & 4x4s</MobileSubItem>
                            <MobileSubItem href="/vehicles/sedans">Sedans</MobileSubItem>
                            <MobileSubItem href="/vehicles/vans">Vans & Pickups</MobileSubItem>
                            <MobileSubItem href="/vehicles/luxury">Luxury Vehicles</MobileSubItem>
                        </MobileNavItem>

                        <MobileNavItem title="Bikes" href="/bikes">
                            <MobileSubItem href="/bikes/mountain">Mountain Bikes</MobileSubItem>
                            <MobileSubItem href="/bikes/road">Road Bikes</MobileSubItem>
                            <MobileSubItem href="/bikes/electric">Electric Bikes</MobileSubItem>
                            <MobileSubItem href="/bikes/vintage">Vintage Classics</MobileSubItem>
                        </MobileNavItem>

                        <MobileNavItem title="About Us" href="/about">
                            <MobileSubItem href="/about">Our Story</MobileSubItem>
                            <MobileSubItem href="/leadership">Leadership</MobileSubItem>
                            <MobileSubItem href="/careers">Careers</MobileSubItem>
                            <MobileSubItem href="/press">Press Center</MobileSubItem>
                        </MobileNavItem>

                        <div className="mt-auto border-t pt-4">
                            <div className="flex flex-col gap-2 text-sm">
                                <Link href="/finance" className="px-4 py-2">
                                    Financing Options
                                </Link>
                                <Link href="/value-my-car" className="px-4 py-2">
                                    Instant Valuation
                                </Link>
                                <Link href="/news" className="px-4 py-2">
                                    News & Reviews
                                </Link>
                            </div>
                        </div>
                    </nav>
                </SheetContent>
            </Sheet>
        );
    }

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* Vehicles Dropdown */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="hover:text-primary font-semibold uppercase">Vehicles</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid gap-6 p-6 md:w-[800px] lg:grid-cols-[300px_1fr]">
                            <div className="group relative row-span-2 overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src="/images/image1.webp"
                                    alt="Featured Vehicle"
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-neutral-900/80 to-transparent p-6">
                                    <h3 className="mb-2 text-2xl font-bold text-white">Trusted Car Marketplace</h3>
                                    <p className="mb-4 text-sm text-neutral-200">Kenya's #1 platform for quality vehicles</p>
                                    <a
                                        href="/sell-vehicle"
                                        className="bg-primary inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                                    >
                                        Sell Your Car Now
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-muted-foreground mb-2 text-sm font-semibold">Shop By Type</h4>
                                    <ul className="space-y-2">
                                        <ListItem href="/vehicles/suvs">SUVs & 4x4s</ListItem>
                                        <ListItem href="/vehicles/sedans">Sedans</ListItem>
                                        <ListItem href="/vehicles/vans">Vans & Pickups</ListItem>
                                        <ListItem href="/vehicles/luxury">Luxury Vehicles</ListItem>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-muted-foreground mb-2 text-sm font-semibold">Quick Links</h4>
                                    <ul className="space-y-2">
                                        <ListItem href="/buy">Buy a Vehicle</ListItem>
                                        <ListItem href="/sell">Sell Your Vehicle</ListItem>
                                        <ListItem href="/finance">Financing Options</ListItem>
                                        <ListItem href="/value-my-car">Instant Valuation</ListItem>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-span-full mt-4 border-t pt-4">
                                <div className="text-muted-foreground flex items-center justify-between text-sm">
                                    <div className="flex items-center space-x-4">
                                        <ShieldCheck className="h-5 w-5 text-green-600" />
                                        <span>200,000+ Verified Vehicles</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <BadgeCheck className="h-5 w-5 text-blue-600" />
                                        <span>5-Star Rated Service</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Bikes Dropdown */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="hover:text-primary font-medium uppercase">Bikes</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid gap-6 p-6 md:w-[800px] lg:grid-cols-[300px_1fr]">
                            <div className="group relative row-span-2 overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src="/images/image2.jpg"
                                    alt="Featured Bike"
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-neutral-900/80 to-transparent p-6">
                                    <h3 className="mb-2 text-2xl font-bold text-white">Ride Your Dream Bike</h3>
                                    <p className="mb-4 text-sm text-neutral-200">Kenya's largest selection of quality two-wheelers</p>
                                    <a
                                        href="/sell-bike"
                                        className="bg-primary inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                                    >
                                        Sell Your Bike Fast
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-muted-foreground mb-2 text-sm font-semibold">Shop By Type</h4>
                                    <ul className="space-y-2">
                                        <ListItem href="/bikes/mountain">Mountain Bikes</ListItem>
                                        <ListItem href="/bikes/road">Road Bikes</ListItem>
                                        <ListItem href="/bikes/electric">Electric Bikes</ListItem>
                                        <ListItem href="/bikes/vintage">Vintage Classics</ListItem>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-muted-foreground mb-2 text-sm font-semibold">Services</h4>
                                    <ul className="space-y-2">
                                        <ListItem href="/buy-bikes">Buy a Bike</ListItem>
                                        <ListItem href="/sell-bike">Sell Your Bike</ListItem>
                                        <ListItem href="/bike-financing">Easy Financing</ListItem>
                                        <ListItem href="/bike-valuation">Free Valuation</ListItem>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-span-full mt-4 border-t pt-4">
                                <div className="text-muted-foreground flex items-center justify-between text-sm">
                                    <div className="flex items-center space-x-4">
                                        <ShieldCheck className="h-5 w-5 text-green-600" />
                                        <span>50,000+ Verified Listings</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <BadgeCheck className="h-5 w-5 text-blue-600" />
                                        <span>Test Ride Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* About Us Dropdown */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="hover:text-primary uppercase">About Us</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid gap-6 p-6 md:w-[800px] lg:grid-cols-[300px_1fr]">
                            <div className="space-y-4 border-r pr-6">
                                <h3 className="text-lg font-bold">Our Story</h3>
                                <p className="text-muted-foreground text-sm">
                                    Founded in 2010, connecting over 1 million buyers and sellers annually.
                                </p>
                                <div className="flex items-center space-x-4">
                                    <Medal className="h-8 w-8 text-amber-500" />
                                    <div>
                                        <div className="font-medium">2023 Best Auto Platform</div>
                                        <div className="text-muted-foreground text-xs">Kenya Business Awards</div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-muted-foreground mb-2 text-sm font-semibold">Our Company</h4>
                                    <ul className="space-y-2">
                                        <ListItem href="/about">About Us</ListItem>
                                        <ListItem href="/leadership">Leadership Team</ListItem>
                                        <ListItem href="/careers">Careers</ListItem>
                                        <ListItem href="/press">Press Center</ListItem>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-muted-foreground mb-2 text-sm font-semibold">Connect</h4>
                                    <ul className="space-y-2">
                                        <ListItem href="/contact">Contact Us</ListItem>
                                        <ListItem href="/blog">Blog</ListItem>
                                        <ListItem href="/investors">Investors</ListItem>
                                        <ListItem href="/partners">Partnerships</ListItem>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-span-full mt-4 border-t pt-4">
                                <div className="text-muted-foreground flex items-center justify-between text-sm">
                                    <div className="flex items-center space-x-4">
                                        <ShieldCheck className="h-5 w-5 text-green-600" />
                                        <span>Secure Transactions</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <Star className="h-5 w-5 text-yellow-500" />
                                        <span>4.9/5 Customer Rating</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* News Link */}
                <NavigationMenuItem>
                    <Link href="/news">
                        <NavigationMenuLink className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium uppercase transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50">
                            News & Reviews
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

// Mobile Components
const MobileNavItem = ({ title, href, children }: { title: string; href: string; children?: React.ReactNode }) => (
    <div className="flex flex-col gap-2">
        <Link href={href} className="hover:bg-accent flex items-center justify-between rounded-md px-4 py-2 text-sm font-medium">
            {title}
            <ArrowRight className="h-4 w-4" />
        </Link>
        <div className="border-accent ml-4 flex flex-col border-l-2">{children}</div>
    </div>
);

const MobileSubItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} className="text-muted-foreground hover:bg-accent hover:text-foreground rounded-md px-4 py-2 text-sm">
        {children}
    </Link>
);

// ListItem Component
const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(({ className, title, children, ...props }, ref) => (
    <li>
        <NavigationMenuLink asChild>
            <a
                ref={ref}
                className={cn(
                    'block space-y-1 rounded-md p-3 text-sm no-underline transition-colors',
                    'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                    'outline-none select-none',
                    className,
                )}
                {...props}
            >
                <div className="leading-none font-medium">{title}</div>
                {children && <p className="text-muted-foreground line-clamp-2 leading-snug">{children}</p>}
            </a>
        </NavigationMenuLink>
    </li>
));
ListItem.displayName = 'ListItem';
