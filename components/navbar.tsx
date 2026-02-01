"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Server, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                            <Server className="h-6 w-6 text-primary" />
                            <span className="font-bold text-xl tracking-tight">CloudHost</span>
                        </Link>
                        <div className="hidden md:ml-6 md:flex md:space-x-8">
                            <Link href="/products" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                                Products
                            </Link>
                            <Link href="/features" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                                Features
                            </Link>
                            <Link href="/pricing" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                                Pricing
                            </Link>
                            <Link href="/about" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                                About
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/login">
                            <Button variant="ghost">Log in</Button>
                        </Link>
                        <Link href="/register">
                            <Button>Get Started</Button>
                        </Link>
                    </div>
                    <div className="-mr-2 flex items-center md:hidden">
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <Link href="/products" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-muted-foreground hover:bg-muted hover:border-primary hover:text-primary">
                            Products
                        </Link>
                        <Link href="/features" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-muted-foreground hover:bg-muted hover:border-primary hover:text-primary">
                            Features
                        </Link>
                        <Link href="/pricing" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-muted-foreground hover:bg-muted hover:border-primary hover:text-primary">
                            Pricing
                        </Link>
                    </div>
                    <div className="pt-4 pb-4 border-t border-border">
                        <div className="flex items-center px-4 space-x-4">
                            <Link href="/login" className="w-full">
                                <Button variant="outline" className="w-full">Log in</Button>
                            </Link>
                            <Link href="/register" className="w-full">
                                <Button className="w-full">Get Started</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
