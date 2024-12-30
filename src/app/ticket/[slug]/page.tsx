"use client";
import { useState } from "react";
import Image from "next/image";

export default function EventPage() {
  // State'ler
  const [activeTab, setActiveTab] = useState("aboutEvent");
  const [selectedType, setSelectedType] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Veri yapısı
  const ticketOptions = [
    {
      id: 1,
      type: "General Sale - Field",
      sections: [
        {
          name: "Diamond Circle",
          categories: [
            { name: "Early Entry", price: 150 },
            { name: "Standard Entry", price: 120 },
          ],
        },
        {
          name: "Standard Section",
          categories: [
            { name: "Early Entry", price: 100 },
            { name: "Standard Entry", price: 80 },
          ],
        },
      ],
    },
    {
      id: 2,
      type: "VIP",
      sections: [
        {
          name: "Diamond Circle",
          categories: [
            { name: "Early Entry", price: 200 },
            { name: "Standard Entry", price: 180 },
          ],
        },
        {
          name: "Standard Section",
          categories: [
            { name: "Early Entry", price: 180 },
            { name: "Standard Entry", price: 160 },
          ],
        },
      ],
    },
  ];

  const tabs = [
    { id: "aboutEvent", label: "About the Event" },
    { id: "seatingPlan", label: "Seating Plan" },
    { id: "tickets", label: "Tickets" },
    { id: "seatSelection", label: "Seat Selection" },
  ];

  // Seçilen tipin veri yapısı
  const selectedTypeData = ticketOptions.find(
    (ticket) => ticket.type === selectedType
  );

  // Seçilen bölümün veri yapısı
  const selectedSectionData =
    selectedTypeData?.sections.find(
      (section) => section.name === selectedSection
    ) || null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://via.placeholder.com/1920x500"
            alt="Event Banner"
            layout="fill"
            objectFit="cover"
            priority
            className="opacity-50"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-64 sm:h-80 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Beartooth Tickets
          </h1>
          <p className="text-gray-300 mt-3 text-sm sm:text-base">
            Home / Music Tickets / Hard Rock/Metal / Beartooth Tickets
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-6 mt-6 flex flex-wrap gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-3 px-4 rounded-lg shadow transition ${
              activeTab === tab.id
                ? "bg-blue-600 text-white font-semibold"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-6 py-8">
        {/* About the Event */}
        {activeTab === "aboutEvent" && (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Event Information</h2>
            <p className="text-gray-700 leading-relaxed">
              Beartooth is one of the most electrifying bands in the metal scene
              today. Join us for an unforgettable night of music and energy. The
              concert will be held at Stadium X on January 15, 2024.
            </p>
          </div>
        )}

        {/* Seating Plan */}
        {activeTab === "seatingPlan" && (
          <div className="relative w-full h-96 bg-white shadow rounded-lg overflow-hidden">
            <Image
              src="https://via.placeholder.com/600x400"
              alt="Seating Plan"
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}

        {/* Tickets */}
        {activeTab === "tickets" && (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Select Your Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-2">
                  Ticket Type
                </label>
                <select
                  className="border rounded-lg px-4 py-2"
                  value={selectedType}
                  onChange={(e) => {
                    setSelectedType(e.target.value);
                    setSelectedSection(""); // Reset section and category when type changes
                    setSelectedCategory("");
                  }}
                >
                  <option value="">Select Ticket Type</option>
                  {ticketOptions.map((ticket) => (
                    <option key={ticket.id} value={ticket.type}>
                      {ticket.type}
                    </option>
                  ))}
                </select>
              </div>

              {selectedTypeData && (
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600 mb-2">
                    Section / Block
                  </label>
                  <select
                    className="border rounded-lg px-4 py-2"
                    value={selectedSection}
                    onChange={(e) => {
                      setSelectedSection(e.target.value);
                      setSelectedCategory(""); // Reset category when section changes
                    }}
                  >
                    <option value="">Select Section</option>
                    {selectedTypeData.sections.map((section) => (
                      <option key={section.name} value={section.name}>
                        {section.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {selectedSectionData && (
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600 mb-2">
                    Category
                  </label>
                  <select
                    className="border rounded-lg px-4 py-2"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">Select Category</option>
                    {selectedSectionData.categories.map((category) => (
                      <option key={category.name} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Pricing Display */}
            {selectedCategory && selectedSectionData && (
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3">Pricing</h3>
                {selectedSectionData.categories
                  .filter((category) => category.name === selectedCategory)
                  .map((category) => (
                    <div
                      key={category.name}
                      className="border rounded-lg p-4 bg-white hover:shadow-lg transition"
                    >
                      <h4 className="font-bold text-xl">${category.price}</h4>
                      <p className="text-gray-500 mt-1">{selectedType}</p>
                      <p className="text-gray-500">{selectedSection}</p>
                      <p className="text-gray-500">{category.name}</p>
                      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        Select
                      </button>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}

        {/* Seat Selection */}
        {activeTab === "seatSelection" && (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Select Your Seat</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-100 border rounded-lg p-4 text-center hover:shadow-lg transition"
                >
                  <p className="font-bold">Row 1, Seat {index + 1}</p>
                  <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Select
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
