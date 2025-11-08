"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-padding-x mx-auto flex max-w-6xl items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/NomadCare Logo with Abstract Symbol.png" alt="NomadCare" width={260} height={80} className="h-20 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#problem" className="text-sm text-muted-foreground hover:text-foreground transition">
            Problem
          </Link>
          <Link href="#solution" className="text-sm text-muted-foreground hover:text-foreground transition">
            Solution
          </Link>
          <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
            Features
          </Link>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Request a Demo</Button>
      </div>
    </nav>
  )
}
