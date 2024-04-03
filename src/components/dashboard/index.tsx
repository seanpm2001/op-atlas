"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import ApplyRetroFundingRoundInfoBanner from "./ApplyRetroFundingRoundInfoBanner"
import UserProjectStatusDetailCard from "./UserProjectStatusDetailCard"
// import AddFirstProjectSection from "./AddFirstProjectSection"
import AddProjectDialogue from "./AddProjectDialogue"
import ProfileDetailCard from "./ProfileDetailCard"

const Dashboard = () => {
  const router = useRouter()
  const [openDialog, setOpenDialog] = useState(false)

  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleButtonClick = () => {
    router.push("/projects/new")
  }

  return (
    <div className="h-full bg-secondary flex items-center justify-center py-10">
      <div className="card w-3/4 mx-auto p-16 flex flex-col gap-12">
        <ProfileDetailCard
          profileImageUrl=""
          userFullName="Shaun Lind 🐰🥕"
          userBio="Addicted to coffee and good design."
          userName="shadcn"
          fca="0xD7ce...3765"
          email=""
        />
        <ApplyRetroFundingRoundInfoBanner />

        <div>
          <h3 className="text-foreground">Your Projects</h3>
          <div className="card flex flex-col gap-6 mt-6">
            {/* this component will be shown when user don't have any project yet */}
            {/* <AddFirstProjectSection onButtonClick={handleOpenDialog} /> */}
            <UserProjectStatusDetailCard
              projectAvatar=""
              projectName="project 1"
              projectProgress={13}
            />
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <Button variant="secondary" onClick={handleOpenDialog}>
            Add
          </Button>
          <Button variant="secondary">Join</Button>
        </div>
      </div>
      <AddProjectDialogue
        open={openDialog}
        onOpenChange={(open) => setOpenDialog(open)}
        handleButtonClick={handleButtonClick}
      />
    </div>
  )
}

export default Dashboard