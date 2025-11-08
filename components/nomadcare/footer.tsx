"use client";

import React from "react"


export default function Footer() {
  return (
    <footer className="border-t border-border bg-card container-padding-x py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">NomadCare</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered voice interpreter for safer, more inclusive telemedicine.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Features
                </a>
              </li>{/* 
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Integrations
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  About
                </a>
              </li>{/* 
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Careers
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Terms
                </a>
              </li>{/* 
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Compliance
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 py-8 border-t border-b border-border">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-lg">
                🇺🇸
              </span>
              <h4 className="font-semibold text-sm">US Address</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              473 Mundet Place Ste US707918
              <br />
              Hillside, New Jersey, 07205
              <br />
              United States
            </p>
          </div>
          <div
            onClick={()=>{
                window.location.href="https://www.nomadcare.eu"
            }}
            className="cursor-pointer"
            >
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-lg">
                🇪🇺
              </span>
              <h4 className="font-semibold text-sm">EU Address</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              UBI Medical, EM506
              <br />
              6200-284 Covilhã, Castelo Branco
              <br />
              Portugal
            </p>
          </div>
        </div>
        <div className="pt-8">
          <p className="text-sm text-muted-foreground text-center">© 2025 NomadCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
