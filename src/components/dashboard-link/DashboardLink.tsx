import { cn } from '@/lib/utils'
import { ArrowRight, ChartBar } from 'lucide-react'
import Link from 'next/link'
import { ReactElement } from 'react'

export const DashboardLink = (): ReactElement => {
  return (
    <Link
      href="/dashboard"
      className={cn(
        "mt-4",
        "flex flex-row gap-2 px-4 py-2 bg-neutral-50 rounded-lg",
        "text-ls-slate-600 hover:text-blue-500 transition-colors",
        "focus-visible:outline-4 outline-ls-green-500/50",
      )}
    >
      <span className="flex items-center gap-2">
        <ChartBar className="w-5 h-5" />
      </span>
      <span className="text-base">Dashboard</span>
      <span className="flex items-center ml-auto">
        <ArrowRight className="w-5 h-5" />
      </span>
    </Link>
  )
}