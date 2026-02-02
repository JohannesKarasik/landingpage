'use client';

import SectionTitle from "@/components/section-title";
import {
  ZapIcon,
  CreditCardIcon,
  GiftIcon,
  IdCardIcon,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

import mockup1 from "@/app/mockup1.png";
import mockup2 from "@/app/mockup2.png";
import mockup3 from "@/app/mockup3.png";
import mockup4 from "@/app/mockup4.png";

type FeatureTab = "offers" | "financing" | "rewards" | "memberships";

export default function FeaturesSection() {
  const [isHover, setIsHover] = useState(false);
  const [activeTab, setActiveTab] = useState<FeatureTab>("offers");

  const mockupMap = {
    offers: mockup1,
    financing: mockup2,
    rewards: mockup3,
    memberships: mockup4,
  };

  const contentMap: Record<
    FeatureTab,
    { title: string; description: string }
  > = {
    offers: {
      title: "Sell more, while you sleep",
      description:
        "Let the Dermify AI algorithm send your patients carefully targeted offers and deals based on their browsing behaviour and personal data.",
    },
    financing: {
      title: "Remove price friction at checkout",
      description:
        "Offer flexible payment plans so more patients can say yes today, and you can increase average order value without extra admin.",
    },
    rewards: {
      title: "Turn visits into repeat business",
      description:
        "Reward loyal patients with points and perks that keep them coming back, increase retention, and boost lifetime value automatically.",
    },
    memberships: {
      title: "Lock in recurring revenue",
      description:
        "Launch memberships that bundle value, drive consistent bookings, and give patients a reason to stay on a plan month after month.",
    },
  };

  const statsMap: Record<FeatureTab, { stat1: string; text1: string; stat2: string; text2: string }> =
    {
    offers: {
        stat1: "+30%",
        text1: "More bookings from timely, personalized promotions",
        stat2: "+18%",
        text2: "Higher checkout conversion compared to standard campaigns",
        },
      financing: {
        stat1: "+42%",
        text1: "More patients completing checkout with payment plans",
        stat2: "+18%",
        text2: "Higher average order value from flexible financing",
      },
      rewards: {
        stat1: "+3.1x",
        text1: "More repeat bookings from loyalty points & perks",
        stat2: "+27%",
        text2: "Higher retention after introducing rewards",
      },
      memberships: {
        stat1: "+$",
        text1: "Predictable monthly revenue from recurring memberships",
        stat2: "+2.4x",
        text2: "More bookings per member vs non-members",
      },
    };

  const baseBtn =
    "w-[176px] group flex flex-col items-center justify-center gap-2 rounded-xl px-5 py-4 transition";

  // ✅ Make "inactive" truly borderless (matches the other buttons)
  const inactiveBtn = "hover:bg-gray-50";
  const inactiveSoft = "hover:bg-gray-50";
  const activeBtn = "border bg-white shadow-sm";

  const iconWrapBase = "flex h-9 w-9 items-center justify-center rounded-full";
  const iconActive = "bg-pink-100 text-pink-600";
  const iconInactive = "bg-gray-100 text-gray-500";

  const labelBase = "text-xs font-medium";
  const labelActive = "text-gray-900";
  const labelInactive = "text-gray-500";

  return (
    <section className="relative w-full overflow-hidden">
      {/* Top: tabs + centered mockup */}
      <div className="relative z-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-3 items-end gap-6 py-10">
            {/* LEFT TABS */}
            <div className="col-span-1 flex justify-end gap-3">
              {/* Automated Offers */}
              <button
                onClick={() => setActiveTab("offers")}
                className={[
                  baseBtn,
                  activeTab === "offers" ? activeBtn : inactiveBtn,
                ].join(" ")}
              >
                <div
                  className={[
                    iconWrapBase,
                    activeTab === "offers" ? iconActive : iconInactive,
                  ].join(" ")}
                >
                  <ZapIcon className="h-5 w-5" />
                </div>
                <span
                  className={[
                    labelBase,
                    activeTab === "offers" ? labelActive : labelInactive,
                  ].join(" ")}
                >
                  Automated Offers
                </span>
              </button>

              {/* Patient financing */}
              <button
                onClick={() => setActiveTab("financing")}
                className={[
                  baseBtn,
                  activeTab === "financing" ? activeBtn : inactiveSoft,
                ].join(" ")}
              >
                <div
                  className={[
                    iconWrapBase,
                    activeTab === "financing" ? iconActive : iconInactive,
                  ].join(" ")}
                >
                  <CreditCardIcon className="h-5 w-5" />
                </div>
                <span
                  className={[
                    labelBase,
                    activeTab === "financing" ? labelActive : labelInactive,
                  ].join(" ")}
                >
                  Patient financing
                </span>
              </button>
            </div>

            {/* CENTER MOCKUP */}
            <div className="col-span-1 flex justify-center">
              <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className={[
                  "relative -mb-72 md:-mb-[28rem] transition",
                  isHover ? "drop-shadow-[0_0_0_rgba(0,0,0,0)]" : "",
                ].join(" ")}
              >
                <Image
                  src={mockupMap[activeTab]}
                  alt="App mockup"
                  priority
                  className="h-auto w-[1040px] md:w-[1280px] select-none pointer-events-none"
                />
              </div>
            </div>

            {/* RIGHT TABS */}
            <div className="col-span-1 flex justify-start gap-3">
              {/* Rewards */}
              <button
                onClick={() => setActiveTab("rewards")}
                className={[
                  baseBtn,
                  activeTab === "rewards" ? activeBtn : inactiveSoft,
                ].join(" ")}
              >
                <div
                  className={[
                    iconWrapBase,
                    activeTab === "rewards" ? iconActive : iconInactive,
                  ].join(" ")}
                >
                  <GiftIcon className="h-5 w-5" />
                </div>
                <span
                  className={[
                    labelBase,
                    activeTab === "rewards" ? labelActive : labelInactive,
                  ].join(" ")}
                >
                  Rewards
                </span>
              </button>

              {/* Memberships */}
              <button
                onClick={() => setActiveTab("memberships")}
                className={[
                  baseBtn,
                  activeTab === "memberships" ? activeBtn : inactiveSoft,
                ].join(" ")}
              >
                <div
                  className={[
                    iconWrapBase,
                    activeTab === "memberships" ? iconActive : iconInactive,
                  ].join(" ")}
                >
                  <IdCardIcon className="h-5 w-5" />
                </div>
                <span
                  className={[
                    labelBase,
                    activeTab === "memberships" ? labelActive : labelInactive,
                  ].join(" ")}
                >
                  Memberships
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DARK SECTION */}
      <div className="relative bg-[#0F0F12]">
        <div className="pt-2 md:pt-14 pb-[8rem] md:pb-[10rem]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 md:grid-cols-3 md:px-8">
            <div className="md:pr-4">
              <h2 className="max-w-md text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl">
                {contentMap[activeTab].title}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-gray-300">
                {contentMap[activeTab].description}
              </p>
            </div>

            <div className="hidden md:block" />

            <div className="flex flex-col gap-10 md:pl-6">
              <div className="relative pl-6">
                <span className="absolute left-0 top-1 h-full w-px bg-pink-500" />
                <div className="text-2xl font-semibold text-white">
                  {statsMap[activeTab].stat1}
                </div>
                <p className="mt-1 text-sm text-gray-300">
                  {statsMap[activeTab].text1}
                </p>
              </div>

              <div className="relative pl-6">
                <span className="absolute left-0 top-1 h-full w-px bg-pink-500" />
                <div className="text-2xl font-semibold text-white">
                  {statsMap[activeTab].stat2}
                </div>
                <p className="mt-1 text-sm text-gray-300">
                  {statsMap[activeTab].text2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}