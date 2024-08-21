import { redirect } from "next/navigation"

import { getOrganizations } from "@/app/api/db/organizations"
import { auth } from "@/auth"

import { UserProfileSidebar } from "./UserProfileSidebar"

export async function ProfileSidebar() {
  const user = await auth()

  if (!user?.user.id) {
    return redirect("/dashbaord")
  }

  const organizations = await getOrganizations(user.user.id)

  return (
    <UserProfileSidebar
      organizations={organizations?.organizations.map(
        ({ organization }) => organization,
      )}
    />
  )
}
