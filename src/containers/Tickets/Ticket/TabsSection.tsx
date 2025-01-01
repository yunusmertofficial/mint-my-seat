import React from "react";
import Image from "next/image";
import AboutEvent from "./components/AboutEvent";
import Tickets from "./components/Tickets";
import { Ticket } from "@/types/model";
import Tabs from "@/components/Tabs";

function TabsSection({
  ticket,
  selectedTicketType,
  setSelectedTicketType,
  selectedSection,
  setSelectedSection,
  selectedCategory,
  setSelectedCategory,
  selectedPriceTiers,
  setSelectedPriceTiers,
}: {
  ticket: Ticket;
  selectedTicketType: string;
  setSelectedTicketType: (value: string) => void;
  selectedSection: string;
  setSelectedSection: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  selectedPriceTiers: Record<string, number>;
  setSelectedPriceTiers: (tiers: Record<string, number>) => void;
}) {
  const tabs = [
    {
      id: "aboutEvent",
      label: "About the Event",
      component: <AboutEvent description={ticket?.event?.description || ""} />,
    },
    {
      id: "seatingPlan",
      label: "Seating Plan",
      component: (
        <div className="relative bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Seating Plan</h2>
          <div className="relative w-full h-96 bg-gray-100 overflow-hidden border rounded-lg">
            <Image
              src={ticket.seatingPlanImageUrl}
              alt="Seating Plan"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      ),
    },
    {
      id: "tickets",
      label: "Tickets",
      component: (
        <Tickets
          ticketTypes={ticket.ticketTypes}
          selectedTicketType={selectedTicketType}
          setSelectedTicketType={setSelectedTicketType}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedPriceTiers={selectedPriceTiers}
          setSelectedPriceTiers={setSelectedPriceTiers}
        />
      ),
    },
  ];

  return <Tabs tabs={tabs} />;
}

export default TabsSection;
