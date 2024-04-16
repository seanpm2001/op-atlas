"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export default function Welcome() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [currIndex, setCurrIndex] = useState(0)
  const router = useRouter()

  const onNext = () => {
    if (!carouselApi) return

    if (carouselApi.canScrollNext()) {
      carouselApi.scrollNext()
      setCurrIndex((i) => i + 1)
    } else {
      router.push("/dashboard")
    }
  }

  const isLastCard = carouselApi && !carouselApi.canScrollNext()

  return (
    <div className="flex flex-col items-center pt-20 pb-4 bg-backgroundSecondary min-h-lvh">
      <div className="bg-background w-2/3 p-16 text-center rounded-3xl items-center flex flex-col gap-6">
        <div className="py-0.5 px-2 bg-backgroundSecondary rounded-full">
          Welcome
        </div>
        <Carousel setApi={setCarouselApi}>
          <CarouselContent>
            <WelcomeCard card="intro" />
            <WelcomeCard card="projects" />
            <WelcomeCard card="funding" />
          </CarouselContent>
        </Carousel>
        <Dots total={3} current={currIndex} />
        <button
          className={`py-2 px-4 rounded-md ${
            isLastCard ? "bg-optimismRed text-white" : "bg-backgroundSecondary"
          }`}
          onClick={onNext}
        >
          {isLastCard ? "Let’s go" : "Next"}
        </button>
      </div>
    </div>
  )
}

function Dots({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex gap-3">
      {Array.from(Array(total).keys()).map((_, i) => (
        <div
          key={i}
          className={`w-2.5 h-2.5 rounded-full ${
            current === i ? "bg-foreground" : "bg-backgroundSecondary"
          }`}
        />
      ))}
    </div>
  )
}

const CARD_DETAILS = {
  intro: {
    title: "Welcome to your Optimist profile!",
    description:
      "This is where you’ll manage your projects and apply for Retro Funding.",
  },
  projects: {
    title: "Add or join projects",
    description:
      "In projects you can add team members, add code repos, and verify your onchain contracts.",
  },
  funding: {
    title: "Apply for Retro Funding",
    description:
      "Once you’ve setup your projects, you can apply for Retro Funding.",
  },
}

function WelcomeCard({ card }: { card: keyof typeof CARD_DETAILS }) {
  return (
    <CarouselItem>
      <div className="flex flex-col gap-6 items-center text-center">
        <div className="bg-backgroundaccent w-1/2 rounded-xl h-36"></div>
        <div className="flex flex-col gap-3">
          <div className="text-lg font-semibold">
            {CARD_DETAILS[card].title}
          </div>
          <div className="text-lg">{CARD_DETAILS[card].description}</div>
        </div>
      </div>
    </CarouselItem>
  )
}
