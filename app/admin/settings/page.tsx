import { Metadata } from 'next'
import { Separator } from '@/components/ui/separator'
import { ProfileForm } from '@/components/profile-form'

export const metadata: Metadata = {
  title: 'Settings',
  description: 'Manage your account settings',
}

export default function SettingsPage() {
  return (
    <div className="space-y-6 p-10 pb-16">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set preferences.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
            <a
              href="#"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              Profile
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-md bg-muted px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              Account
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              Appearance
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              Notifications
            </a>
          </nav>
        </aside>
        <div className="flex-1 lg:max-w-2xl">
          <ProfileForm />
        </div>
      </div>
    </div>
  )
}

