# Kando Platform Architecture

## Overview
Kando is a bilingual (Persian/English) Work OS + Knowledge OS platform with RTL/LTR support from day one.

## Tech Stack
- **Frontend**: Next.js 15+, React 19+, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Supabase (PostgreSQL + Auth + Storage)
- **State Management**: Zustand, TanStack Query
- **Database**: PostgreSQL via Supabase
- **Authentication**: Supabase Auth with JWT
- **Real-time**: Supabase Realtime
- **File Storage**: Supabase Storage

## Project Structure
```
kando-platform/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/             # Authentication routes
│   │   ├── (dashboard)/        # Main app routes
│   │   ├── api/                # API routes
│   │   └── layout.tsx          # Root layout
│   ├── components/
│   │   ├── ui/                 # Base UI components
│   │   ├── layout/             # Layout components
│   │   ├── forms/              # Form components
│   │   └── features/           # Feature-specific components
│   ├── lib/
│   │   ├── supabase/           # Supabase client & utils
│   │   ├── utils/              # Utility functions
│   │   ├── hooks/              # Custom hooks
│   │   └── validations/        # Zod schemas
│   ├── stores/                 # Zustand stores
│   ├── types/                  # TypeScript types
│   ├── i18n/                   # Internationalization
│   │   ├── locales/            # Translation files
│   │   ├── config.ts           # i18n configuration
│   │   └── utils.ts            # i18n utilities
│   └── config/                 # App configuration
├── public/                     # Static assets
├── supabase/                   # Supabase migrations & types
└── tests/                      # Test files
```

## Core Principles
1. **Bilingual First**: Persian (fa-IR, RTL) and English (en-US, LTR) support built-in
2. **Multi-tenancy**: Strict isolation between organizations/workspaces
3. **Type Safety**: Full TypeScript coverage
4. **Accessibility**: WCAG 2.1 AA compliance
5. **Performance**: Optimized for 200+ users per workspace
6. **Security**: Row-level security (RLS) at database level

## Directory Conventions
- All components are server components by default
- Client components use 'use client' directive
- API routes follow RESTful conventions
- Database migrations in /supabase/migrations
- Types co-located with features or in /src/types

## Environment Variables
Required environment variables (see .env.example):
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- DATABASE_URL
