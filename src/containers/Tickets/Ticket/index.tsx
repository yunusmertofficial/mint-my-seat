"use client";
import { useState, FC } from "react";
import { getTicketDetailsBySlug } from "@/utils/data";
import TicketSummary from "@/containers/Tickets/Ticket/TicketSummarySection";
import BreadcrumbHeaderSection from "@/containers/BreadcrumbHeaderSection";
import TabsSection from "@/containers/Tickets/Ticket/TabsSection";

const TicketContainer: FC = () => {
  const [selectedTicketType, setSelectedTicketType] = useState<string>("");
  const [selectedSection, setSelectedSection] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPriceTiers, setSelectedPriceTiers] = useState<
    Record<string, number>
  >({});

  const slug = "vip-ticket-jazz";
  const ticket = getTicketDetailsBySlug(slug);
  if (
    !ticket ||
    !ticket.event ||
    !ticket.event.subcategory ||
    !ticket.event.subcategory.category
  ) {
    return null;
  }

  const breadcrumbs = [
    { label: "Home", link: "/" },
    {
      label: ticket.event.subcategory.category.name,
      link: `/${ticket.event.subcategory.category.slug}`,
    },
    {
      label: ticket.event.subcategory.name,
      link: `/${ticket.event.subcategory.slug}`,
    },
    { label: ticket.event.name, link: `/${ticket.event.slug}` },
    { label: ticket.city.name, link: `/${ticket.city.slug}` },
    {
      label: `${ticket.name} - ${ticket.startTime.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}`,
    },
  ];

  return (
    <div className="min-h-screen">
      <BreadcrumbHeaderSection
        title={ticket.event.name}
        breadcrumbs={breadcrumbs}
        alt="Event"
        src="/ticket.webp"
      />
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-4 container mx-auto p-6">
        <div className="col-span-2 p-4">
          <TabsSection
            ticket={ticket}
            selectedTicketType={selectedTicketType}
            setSelectedTicketType={setSelectedTicketType}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedPriceTiers={selectedPriceTiers}
            setSelectedPriceTiers={setSelectedPriceTiers}
          />
        </div>
        <div className="p-4">
          <TicketSummary
            selectedPriceTiers={selectedPriceTiers}
            ticketTypes={ticket.ticketTypes}
            setSelectedPriceTiers={setSelectedPriceTiers}
          />
        </div>
      </div>
    </div>
  );
};

export default TicketContainer;
