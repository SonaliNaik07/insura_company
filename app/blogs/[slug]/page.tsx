"use client"; // This directive tells Next.js to render this component on the client, allowing the use of hooks like useEffect and useState.

import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// ⬇️ GLOBAL BLOG SIDEBAR (your blue one with social icons & recent posts)
import BlogSidebar from "@/components/global/BlogSidebar";

// --- Theme Colors ---
const BRAND_BLUE = "bg-[#0047b3]";
const CONSISTENT_IMAGE_COLOR = "3b82f6"; // Medium Blue

// --- Type Definitions ---
interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What are the free things to do in Dubai on the UAE National Day?",
    answer:
      "You can enjoy the fireworks, stroll through Al Seef, walk around Downtown Dubai, or visit beaches like Kite Beach at no cost. The city feels lively with music, lights, and cultural shows happening in public spaces.",
  },
  {
    id: 2,
    question: "What are the fun UAE National Day activities for students?",
    answer:
      "Students usually take part in flag-making, cultural dress-up days, themed art activities, and school parades. Many schools also host small performances, quizzes, and storytelling sessions about UAE heritage.",
  },
  {
    id: 3,
    question: "What are the best Turkish breakfast spots in the UAE?",
    answer:
      "Popular choices include Bosporus, Kaftan, HuqqA, and Günaydin, known for their fresh simit, cheeses, and warm spreads. These places offer a cosy ambience and generous breakfast platters that feel close to authentic Turkish dining.",
  },
  {
    id: 4,
    question: "Is 5000 AED a good salary in Dubai?",
    answer:
      "It can be manageable for a single person with a simple lifestyle, especially if accommodation is shared. However, living costs are high, so budgeting becomes essential to stay comfortable.",
  },
  {
    id: 5,
    question: "What do people do in Dubai for fun?",
    answer:
      "People enjoy beaches, malls, desert trips, cafes, theme parks, and long coastal drives. Weekends often include exploring new food spots, attending events, and spending time outdoors in cooler months.",
  },
];

// -----------------------------------------------------------------------------
// --- TABLE OF CONTENTS ---
// -----------------------------------------------------------------------------
export const TableOfContents: React.FC = () => {
  const contents = [
    {
      id: "main",
      title: "15 Fun Things To Do in Dubai on the UAE National Holiday",
      url: "#15_Fun_Things_To_Do_in_Dubai_on_the_UAE_National_Holiday",
      children: [
        {
          id: "history",
          title: "History Behind the UAE National Day Celebration",
          url: "#History_Behind_the_UAE_National_Day_Celebration",
          children: [],
        },
        {
          id: "things-to-do",
          title: "Things to Do in Dubai on the UAE National Holiday",
          url: "#Things_to_Do_in_Dubai_on_the_UAE_National_Holiday",
          children: [
            { id: "1", title: "1. Global Village", url: "#1_Global_Village" },
            { id: "2", title: "2. Al Qudra Cycle Track", url: "#2_Al_Qudra_Cycle_Track" },
            { id: "3", title: "3. Flag Garden at Kite Beach", url: "#3_Flag_Garden_at_Kite_Beach" },
            { id: "4", title: "4. Sheikh Zayed Grand Mosque", url: "#4_Sheikh_Zayed_Grand_Mosque" },
            { id: "6", title: "6. Camping", url: "#6_Camping" },
            { id: "7", title: "7. Kayaking in Hatta", url: "#7_Kayaking_in_Hatta" },
            { 
              id: "8", 
              title: "8. Road trips around the Emirates", 
              url: "#8_Road_trips_around_the_Emirates",
              children: [
                { id: "8a", title: "Popular Directions for a Quick Drive", url: "#Popular_Directions_for_a_Quick_Drive" },
                { id: "8b", title: "Best Spots to Explore", url: "#Best_Spots_to_Explore" },
                { id: "8c", title: "Practical Tips for a Smooth Road Trip", url: "#Practical_Tips_for_a_Smooth_Road_Trip" },
              ]
            },
            { id: "9", title: "9. Hiking trails", url: "#9_Hiking_trails" },
            { id: "10", title: "10. Winter Garden at Habtoor Palace", url: "#10_Winter_Garden_at_Habtoor_Palace" },
            { id: "11", title: "11. Desert Safari", url: "#11_Desert_Safari" },
            { id: "12", title: "12. A calm morning at the beach", url: "#12_A_calm_morning_at_the_beach" },
            { id: "13", title: "13. Market hopping", url: "#13_Market_hopping" },
            { id: "14", title: "14. Staycation", url: "#14_Staycation" },
            { id: "15", title: "15. Military shows and parades", url: "#15_Military_shows_and_parades" },
          ],
        },
        {
          id: "conclusion",
          title: "Conclusion",
          url: "#Conclusion",
          children: [
            { id: "faq", title: "Frequently Asked Questions", url: "#Frequently_Asked_Questions" },
          ],
        },
      ],
    },
  ];

  const renderList = (items: any[]) => (
    <ol className="list-none pl-0 space-y-1 text-sm">
      {items.map((item) => (
        <li
          key={item.id}
          className="text-gray-700 hover:text-emerald-600 transition duration-100"
        >
          <a href={item.url} className="block">
            {item.title}
          </a>
          {item.children && item.children.length > 0 && (
            <ul className="list-none pl-4 pt-1 space-y-1 text-xs">
              {item.children.map((subItem: any) => (
                <li
                  key={subItem.id}
                  className="text-gray-600 hover:text-emerald-500"
                >
                  <a href={subItem.url} className="block">
                    {subItem.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );

  return (
    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 mb-8 shadow-sm">
      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
        <h3 className="font-semibold text-gray-800">Table of Contents</h3>
        <button className="text-gray-500 hover:text-emerald-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M7 10h10M7 14h10M7 18h10" />
          </svg>
        </button>
      </div>
      <div className="pt-4">{renderList(contents[0].children)}</div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// --- FAQ ACCORDION ---
// -----------------------------------------------------------------------------
export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div id="Frequently_Asked_Questions" className="mt-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

      <div className="space-y-0 rounded-lg overflow-hidden">
        {faqData.map((item) => (
          <div key={item.id} className="border-b border-white/40 last:border-b-0">
            {/* QUESTION BLOCK */}
            <button
              onClick={() => toggleAccordion(item.id)}
              className={`w-full text-left flex justify-between items-center py-4 px-5 
              bg-[#003980] transition duration-300`}
            >
              <span className="flex items-center gap-3 text-yellow-300 font-semibold text-base md:text-lg">
                <span className="text-xl font-bold">
                  {openId === item.id ? "−" : "+"}
                </span>
                {item.question}
              </span>

              {openId === item.id ? (
                <ChevronUp className="text-yellow-300" size={20} />
              ) : (
                <ChevronDown className="text-yellow-300" size={20} />
              )}
            </button>

            {/* ANSWER BLOCK */}
            <div
              className={`overflow-hidden transition-all duration-300 bg-white text-gray-800 ${
                openId === item.id ? "max-h-96 p-4" : "max-h-0 p-0"
              }`}
            >
              <p className="text-sm leading-relaxed">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// --- MAIN CONTENT WITH ALL SECTIONS ---
// -----------------------------------------------------------------------------
export const MainContent: React.FC = () => {
  return (
    
    <div className="flex-1 bg-white p-6 md:p-8 rounded-xl shadow-lg">
      {/* Main Title */}
      <h1
        id="15_Fun_Things_To_Do_in_Dubai_on_the_UAE_National_Holiday"
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
      >
        15 Fun Things To Do in Dubai on the UAE National Holiday
      </h1>

      {/* Main Image Block 1 */}
      <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden mb-8 relative shadow-lg">
        <img
          src={`https://placehold.co/1200x320/${CONSISTENT_IMAGE_COLOR}/ffffff?text=Dubai+Skyline+with+Fireworks`}
          alt="Dubai Skyline with National Day Fireworks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-end justify-center pb-4">
          <div className="bg-white/90 p-3 rounded-lg shadow-lg text-lg font-bold text-gray-900 border-2 border-emerald-500">
            15 Fun Things To Do in Dubai on the UAE National Holiday
          </div>
        </div>
      </div>

      {/* Intro Text */}
      <p className="text-gray-700 leading-relaxed mb-6">
        The UAE National Holiday is almost here, and the rush to plan something fun always hits at the last minute. Many people start searching for{" "}
        <span className="font-semibold">things to do in Dubai</span>, only to realise that everything feels either too crowded, confusing, or not worth the stress. We have been through that same holiday panic, standing with our family in a packed parking lot thinking, "We should have planned this day better." So this time, instead of letting the day slip by, we are keeping it simple.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        A national holiday gives you the perfect chance to enjoy the city without overthinking. If you still haven't decided what to do, this guide will save you time and help you pick plans that actually feel enjoyable. And if you're travelling over the long weekend, knowing the{" "}
        <a
          href="https://insura.ae/travel-insurance/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-emerald-600 hover:underline"
        >
          best travel insurance company
        </a>{" "}
        to rely on adds an extra layer of comfort. Now let's walk through the best and easiest options Dubai offers on this special day.
      </p>

      {/* History Section */}
      <h2
        id="History_Behind_the_UAE_National_Day_Celebration"
        className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
      >
        History Behind the UAE National Day Celebration
      </h2>

      <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden mb-8 relative shadow-lg">
        <img
          src={`https://placehold.co/1200x320/${CONSISTENT_IMAGE_COLOR}/ffffff?text=Family+in+Desert`}
          alt="Family enjoying National Day in the desert"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-end justify-center pb-4">
          <div className="bg-white/90 p-3 rounded-lg shadow-lg text-lg font-bold text-gray-900 border-2 border-emerald-500">
            History Behind the UAE National Day Celebration
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        UAE National Day carries a meaning that people here understand without needing long explanations. It marks the union of the seven emirates and reminds everyone why this country feels stable, welcoming, and full of opportunities.
      </p>
      <ul className="list-disc ml-6 space-y-3 text-gray-700 leading-relaxed mb-8">
        <li>It honours the formation of the UAE in 1971 and celebrates unity, growth, and national pride.</li>
        <li>People who live here value the safety, comfort, and sense of belonging the country offers.</li>
        <li>Many families take this day to slow down and appreciate the life they built here.</li>
        <li>You see it in the crowds, the colours, and the way strangers turned into one big community for a day.</li>
        <li>
          Each year, as the streets are adorned with flags and the city is illuminated in red, green, white, and black, it appears as though Dubai is celebrating alongside you.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-8">
        This shared energy naturally leads to the excitement of exploring different things to do in Dubai, especially when the city comes alive in its full festive spirit.
      </p>

      {/* Things to Do Section */}
      <h2
        id="Things_to_Do_in_Dubai_on_the_UAE_National_Holiday"
        className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
      >
        Things to Do in Dubai on the UAE National Holiday
      </h2>

      <p className="text-gray-700 leading-relaxed mb-8">
        Here are clear, easy picks for the long weekend, real suggestions you can use right away. Each mini-guide shows what to expect, a quick tip, and a short real-life note so you don't waste time deciding. These are the top things to do in Dubai that locals pick when they want a simple, fun day out.
      </p>

      {/* Table of Contents */}
      <TableOfContents />

      {/* 1. Global Village */}
      <h3 id="1_Global_Village" className="text-xl font-bold text-gray-800 mt-12 mb-4">
        1. Global Village
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Global Village packs food, live shows and family rides in one evening. Arrive late afternoon, plan one or two country pavilions, and save dinner for a street-food stall you can't resist.
      </p>
      <p className="text-sm font-medium text-emerald-700 bg-emerald-50 p-3 rounded-lg mb-8">
        <strong>Tip:</strong> Buy tickets online and aim for early evening to beat the worst queues.
      </p>

      {/* 2. Al Qudra Cycle Track */}
      <h3 id="2_Al_Qudra_Cycle_Track" className="text-xl font-bold text-gray-800 mt-12 mb-4">
        2. Al Qudra Cycle Track
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Al Qudra is one of those early-morning spots where the desert feels open, calm, and almost untouched. When you start your ride at dawn, the air stays cool, and the quiet stretch of road makes the whole experience feel lighter. The paved track runs long enough for both beginners and regular cyclists, which is why many families pick it for a quick holiday activity.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">What to expect</h4>
          <ul className="list-disc ml-4 space-y-1 text-sm text-gray-700">
            <li>Smooth, well-marked cycling paths with no traffic</li>
            <li>Quiet surroundings ideal for short or long rides</li>
            <li>A safe area where even kids can cycle comfortably</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Before you go</h4>
          <ul className="list-disc ml-4 space-y-1 text-sm text-gray-700">
            <li>Carry water, basic snacks, and a small repair kit</li>
            <li>Keep your phone charged; signals may drop in a few sections</li>
            <li>Stretch lightly before starting so your legs don't tighten up</li>
          </ul>
        </div>
      </div>
      <p className="text-sm text-emerald-700 mb-2">
        <strong>Health check reminder:</strong> A quick medical checkup helps you avoid strain during long rides. Many{" "}
        <a
          href="https://insura.ae/health-insurance/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline hover:text-emerald-800"
        >
          health insurance in Dubai UAE
        </a>{" "}
        plans offer free checkups before travelling or doing high-energy activities.
      </p>
      <p className="text-sm font-medium text-emerald-700 bg-emerald-50 p-3 rounded-lg">
        <strong>Extra tip:</strong> Start as early as possible. The sunrise here is worth seeing.
      </p>

      {/* 3. Flag Garden at Kite Beach */}
      <h3 id="3_Flag_Garden_at_Kite_Beach" className="text-xl font-bold text-gray-800 mt-12 mb-4">
        3. Flag Garden at Kite Beach
      </h3>
      <p className="text-gray-700 leading-relaxed mb-8">
        Kite Beach's flag garden is simple, photo-ready, and relaxed, perfect for kids and quick family photos. Go later in the afternoon, stroll the shore, then grab a coffee from a nearby kiosk. It's one of those low-effort things to do in Dubai that still feels special.
      </p>

      {/* 4. Sheikh Zayed Grand Mosque */}
      <h3 id="4_Sheikh_Zayed_Grand_Mosque" className="text-xl font-bold text-gray-800 mt-12 mb-4">
        4. Sheikh Zayed Grand Mosque
      </h3>
      <p className="text-gray-700 leading-relaxed mb-8">
        Even though it's in Abu Dhabi, many families include the mosque on a holiday itinerary for its calm and architecture. Dress modestly, go in the morning, and keep the visit short if you're with kids. This quiet stop balances the louder festival-type activities.
      </p>

      {/* 6. Camping */}
      <h3 id="6_Camping" className="text-xl font-bold text-gray-800 mt-12 mb-4">
        6. Camping
      </h3>
      <p className="text-gray-700 leading-relaxed mb-8">
        Book a family-friendly campsite or go self-driving to a safe desert spot for a simple night under the sky. Pack warm layers for after-sunset chill and basic first aid. A small stove, marshmallows, and a game make it an effortless memory-maker.
      </p>

      {/* 7. Kayaking in Hatta */}
      <h3 id="7_Kayaking_in_Hatta" className="text-xl font-bold text-gray-800 mt-12 mb-4">
        7. Kayaking in Hatta
      </h3>
      <p className="text-gray-700 leading-relaxed mb-8">
        Hatta Kayak offers calm paddling in mountain-framed waters perfect for beginners and families. Book morning slots for cooler temps and clearer views. The scenery gives a proper break from city noise and is one of the best nearby things to do in Dubai for nature lovers.
      </p>

      {/* 8. Road trips around the Emirates */}
      <h3 id="8_Road_trips_around_the_Emirates" className="text-xl font-bold text-gray-800 mt-12 mb-4">
        8. Road trips around the Emirates
      </h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        A short road trip is one of the easiest things to do in Dubai when you want a break from routine. The Emirates offer clean highways, steady routes, and views that shift from beaches to mountains within an hour.
      </p>

      <h4 id="Popular_Directions_for_a_Quick_Drive" className="text-lg font-semibold text-gray-800 mb-3 mt-8">
        Popular Directions for a Quick Drive
      </h4>
      <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-8 text-sm">
        <li>Abu Dhabi to Dubai: around eighty-two minutes across 139 kilometers.</li>
        <li>Sharjah to Dubai: about twenty-six minutes, ideal for daily travel.</li>
        <li>Ras Al Khaimah to Dubai: roughly seventy-five minutes over 114 kilometers.</li>
        <li>Muscat to Dubai: about four-and-a-half hours with scenic open roads.</li>
        <li>Ajman to Dubai: around forty-three minutes, common for office commuters.</li>
        <li>Fujairah to Dubai: around seventy-five minutes across 121 kilometres with mountain views.</li>
      </ul>

      <h4 id="Best_Spots_to_Explore" className="text-lg font-semibold text-gray-800 mb-3 mt-8">
        Best Spots to Explore
      </h4>
      <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-8 text-sm">
        <li>Fujairah coastlines</li>
        <li>Ras Al Khaimah hills</li>
        <li>Liwa</li>
      </ul>

      <h4 id="Practical_Tips_for_a_Smooth_Road_Trip" className="text-lg font-semibold text-gray-800 mb-3 mt-8">
        Practical Tips for a Smooth Road Trip
      </h4>
      <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-8 text-sm">
        <li>Plan fuel and rest stops before you leave, especially for longer routes.</li>
        <li>Share your drive if you're travelling with family to avoid fatigue.</li>
        <li>Keep a playlist and snack box ready to make the journey more enjoyable.</li>
        <li>Carry basic medical items such as bandages, pain relief, and hygiene essentials.</li>
        <li>Use breathable clothing that suits the weather so you stay comfortable throughout the day.</li>
        <li>
          Keep important travel documents like your passport, a passport photo, and valid{" "}
          <a
            href="https://insura.ae/car-insurance/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-emerald-800"
          >
            car insurance in Dubai UAE
          </a>{" "}
          for hassle-free movement.
        </li>
        <li>Carry some cash for small purchases in areas where card machines may not work.</li>
      </ul>

      {/* 9. Hiking trails */}
      <h3 id="9_Hiking_trails" className="text-xl font-bold text-gray-800 mt-12 mb-4">
        9. Hiking trails
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Choose short, marked routes in Hatta or Ras Al Khaimah for a safe, energising hike. Wear proper shoes, start early, and take water. Even a one-hour walk clears the head and gives a real sense of achievement.
      </p>
      <h4 className="font-semibold text-gray-800 mb-2 mt-6">Best hiking spots</h4>
      <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4 text-sm">
        <li><strong>Hatta Wadi Hub – Hatta:</strong> Short, marked trails for beginners and families.</li>
        <li><strong>Jebel Jais's Lower Trails – Ras Al Khaimah:</strong> Ideal for moderate walkers.</li>
        <li><strong>Wadi Shawka Dam Trails – Ras Al Khaimah:</strong> Great for sunrise hikes.</li>
        <li><strong>Mleiha Fossil Rock Trails – Sharjah:</strong> Mix of soft sand and rocky patches.</li>
      </ul>
      <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-8 text-sm">
        <li>A quick full-body medical checkup with your{" "}
          <a
            href="https://insura.ae/individual-medical-insurance/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-emerald-800"
          >
            individual medical insurance in Dubai UAE
          </a> before hiking is a must.</li>
        <li>Wear proper shoes because rocky paths can get tricky.</li>
        <li>Carry enough water and start early to stay comfortable.</li>
        <li>Stick to marked routes for safety.</li>
      </ul>

      {/* 10-15 Remaining items (shortened for space - expand as needed) */}
      <h3 id="10_Winter_Garden_at_Habtoor_Palace" className="text-xl font-bold text-gray-800 mt-12 mb-4">
        10. Winter Garden at Habtoor Palace
      </h3>
      <p className="text-gray-700 leading-relaxed mb-8">
        This festive market combines food stalls, lights, and strolls in a compact, comfortable venue. It's ideal if you prefer warm, decorated spaces over open-air crowds.
      </p>

      <h3 id="11_Desert_Safari" className="text-xl font-bold text-gray-800 mt-12 mb-4">
        11. Desert Safari
      </h3>
      <p className="text-gray-700 leading-relaxed mb-8">
        Pick a reputable operator for dune drives, short camel rides and an evening show. If you travel with children, choose gentler packages and tell the operator ahead.
      </p>

      <h3 id="12_A_calm_morning_at_the_beach" className="text-xl font-bold text-gray-800 mt-12 mb-4">
        12. A calm morning at the beach
      </h3>
      <p className="text-gray-700 leading-relaxed mb-8">
        Sunrises at JBR or Kite Beach provide quiet sand, cool air, and calm water for toddlers. Pack a light breakfast and a sunshade.
      </p>

      <h3 id="13_Market_hopping" className="text-xl font-bold text-gray-800 mt-12 mb-4">
        13. Market hopping
      </h3>
      <p className="text-gray-700 leading-relaxed mb-8">
        Visit Al Fahidi Markets, local pop-ups or seasonal bazaars for crafts, treats, and small gifts. Keep cash for quick buys and small vendors.
      </p>

      <h3 id="14_Staycation" className="text-xl font-bold text-gray-800 mt-12 mb-4">
        14. Staycation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Book a nearby hotel with family packages, kids' pools or brunch deals. A well-chosen staycation gives hotel comforts and a fresh living-room-free perspective. If you have relatives or friends visiting, this is also the point where{" "}
        <a
          href="https://insura.ae/inbound-travel-insurance/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-emerald-600 hover:underline"
        >
          inbound travel insurance in Dubai UAE
        </a>{" "}
        becomes helpful.
      </p>

      <h3 id="15_Military_shows_and_parades" className="text-xl font-bold text-gray-800 mt-12 mb-4">
        15. Military shows and parades
      </h3>
      <p className="text-gray-700 leading-relaxed mb-12">
        Official parades and shows offer a direct patriotic experience. Please refer to the local municipality's announcements for the timings, and plan to arrive early. These events are one of the most memorable{" "}
        <a
          href="https://insura.ae/best-things-to-buy-in-dubai/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-emerald-600 hover:underline"
        >
          things to do in Dubai
        </a>{" "}
        if you want a genuine National Day atmosphere.
      </p>

      {/* Conclusion */}
      <h2 id="Conclusion" className="text-2xl md:text-3xl font-bold text-gray-800 mt-12 mb-6">
        Conclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        The UAE National Holiday comes once a year, but the memories we create on this day stay with us for a long time. Throughout this guide, we walked through different things to do in Dubai that match every mood, whether you want adventure, calm, family time, food, culture, or just a quiet escape.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        Living in the UAE already feels special, and days like this remind us how lucky we are to explore such a warm, safe, and exciting country. Dubai keeps offering new places and experiences every year, and using this guide makes it easy to enjoy them your way.
      </p>
      <p className="text-gray-700 leading-relaxed mb-12">
        So go ahead, plan your day, celebrate the spirit of the UAE and experience the best things to do in Dubai this National Holiday. If you loved this guide or tried any of the activities, share your experience or ask for more suggestions.
      </p>

      {/* FAQ Section */}
      <FaqAccordion />

      {/* Tags Section */}
      <div className="mt-12 pt-6 border-t border-gray-200 flex items-center space-x-3">
        <span className="text-lg font-semibold text-gray-800">Tags:</span>
        <a
          href="https://insura.ae/tag/15-fun-things-to-do-in-dubai-on-the-uae-national-holiday/"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-3 py-1 text-sm rounded-full text-white font-medium ${BRAND_BLUE}`}
        >
          15 Fun Things To Do in Dubai on the UAE National Holiday
        </a>
      </div>
    </div>
  );
};

// Main App Component / Page
export default function App() {
  // Load Font Awesome and the Inter font by injecting link tags into the head.
  useEffect(() => {
    // 1. Load Font Awesome CSS for social icons (still safe to keep)
    const faLink = document.createElement("link");
    faLink.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    faLink.rel = "stylesheet";
    document.head.appendChild(faLink);

    // 2. Load Inter Font Link
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    // Apply font-family to the body to ensure all Tailwind 'font-sans' classes use 'Inter'
    document.body.style.fontFamily = "'Inter', sans-serif";

    // Cleanup function to remove the injected elements on component unmount
    return () => {
      if (document.head.contains(faLink)) document.head.removeChild(faLink);
      if (document.head.contains(fontLink)) document.head.removeChild(fontLink);
      document.body.style.fontFamily = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans p-4 sm:p-8">
      
      {/* Minimal Wrapper to showcase the main article content and sidebar */}
      <div className="max-w-7xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 p-4 bg-white rounded-lg shadow-md">
          Article Components Showcase (Standalone View)
        </h1>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main article should take more width */}
          <div className="w-full lg:w-[70%]">
            <MainContent />
          </div>

          {/* Sidebar should take less width */}
          <div className="w-full lg:w-[30%]">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
