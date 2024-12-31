"use client";
import { useState, FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";

// Types
interface PriceTier {
  _id: string;
  name: string;
  price: number;
}

interface Category {
  _id: string;
  name: string;
  priceTiers: PriceTier[];
}

interface Section {
  _id: string;
  name: string;
  categories: Category[];
}

interface TicketType {
  _id: string;
  name: string;
  sections: Section[];
}

interface Breadcrumb {
  label: string;
  link?: string;
}

interface Ticket {
  name: string;
  slug: string;
  date: Date;
  seatingPlanImage: string;
  ticketTypes: TicketType[];
  city: {
    name: string;
    slug: string;
  };
  event: {
    name: string;
    description: string;
    slug: string;
    subCategory: {
      name: string;
      slug: string;
      description: string;
      category: {
        name: string;
        slug: string;
        description: string;
      };
    };
  };
}

interface DropdownProps {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultOption: string;
}

interface Tab {
  id: string;
  label: string;
  component: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

const Tabs: FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div>
      <div className="flex flex-wrap gap-4 mt-6">
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
      <div className="py-8">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
    </div>
  );
};

const AboutEvent: FC<{ description: string }> = ({ description }) => (
  <div className="bg-white shadow rounded-lg p-6">
    <h2 className="text-2xl font-bold mb-4">Event Information</h2>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </div>
);

const PricingCard: FC<{
  tierName: string;
  price: number;
  tierId: string;
  selectedPriceTiers: Record<string, number>;
  setSelectedPriceTiers: (tiers: Record<string, number>) => void;
}> = ({
  tierName,
  price,
  tierId,
  selectedPriceTiers,
  setSelectedPriceTiers,
}) => {
  const quantity = selectedPriceTiers[tierId] || 0;

  const handleAdd = () => {
    setSelectedPriceTiers({
      ...selectedPriceTiers,
      [tierId]: (selectedPriceTiers[tierId] || 0) + 1,
    });
  };

  const handleRemove = () => {
    if (quantity === 1) {
      const updatedTiers = { ...selectedPriceTiers };
      delete updatedTiers[tierId];
      setSelectedPriceTiers(updatedTiers);
    } else {
      setSelectedPriceTiers({
        ...selectedPriceTiers,
        [tierId]: quantity - 1,
      });
    }
  };

  return (
    <div className="border rounded-lg p-4 bg-white hover:shadow-lg transition flex flex-col items-center space-y-4">
      <div className="text-center">
        <h4 className="font-semibold text-lg text-gray-800">{tierName}</h4>
        <h3 className="font-bold text-xl text-blue-600 mt-3">
          ₺{price.toFixed(2)}
        </h3>
      </div>
      <div className="flex items-center space-x-2">
        {quantity > 0 && (
          <>
            <button
              onClick={handleRemove}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${
                quantity > 1
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-red-600 hover:bg-red-700"
              } transition`}
            >
              {quantity > 1 ? <FaMinus /> : <FaTrashAlt />}
            </button>
            <span className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 font-bold rounded-full">
              {quantity}
            </span>
          </>
        )}
        <button
          onClick={handleAdd}
          className="w-10 h-10 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full transition"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

const Dropdown: FC<DropdownProps> = ({
  label,
  options,
  value,
  onChange,
  defaultOption,
}) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-600 mb-2">{label}</label>
    <select
      className="border rounded-lg px-4 py-2"
      value={value}
      onChange={onChange}
    >
      <option value="">{defaultOption}</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const Header: FC<{ title: string; breadcrumbs: Breadcrumb[] }> = ({
  title,
  breadcrumbs,
}) => (
  <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white">
    <div className="absolute inset-0">
      <Image
        src="/ticket.webp"
        alt="Event Banner"
        layout="fill"
        objectFit="cover"
        priority
        className="opacity-60 filter blur-sm"
      />
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center h-64 sm:h-80 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
      <p className="text-gray-300 mt-3 text-sm sm:text-base">
        {breadcrumbs.map((crumb, index) => (
          <span key={`${crumb.label}-${index}`}>
            {crumb.link ? (
              <Link href={crumb.link} className="underline hover:text-blue-400">
                {crumb.label}
              </Link>
            ) : (
              crumb.label
            )}
            {index < breadcrumbs.length - 1 && " / "}
          </span>
        ))}
      </p>
    </div>
  </div>
);

const Tickets: FC<{
  ticketTypes: TicketType[];
  selectedTicketType: string;
  setSelectedTicketType: (value: string) => void;
  selectedSection: string;
  setSelectedSection: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  selectedPriceTiers: Record<string, number>;
  setSelectedPriceTiers: (tiers: Record<string, number>) => void;
}> = ({
  ticketTypes,
  selectedTicketType,
  setSelectedTicketType,
  selectedSection,
  setSelectedSection,
  selectedCategory,
  setSelectedCategory,
  selectedPriceTiers,
  setSelectedPriceTiers,
}) => {
  const selectedTypeData = ticketTypes.find(
    (ticketType) => ticketType._id === selectedTicketType
  );

  const selectedSectionData =
    selectedTypeData?.sections.find(
      (section) => section._id === selectedSection
    ) || null;

  const selectedCategoryData =
    selectedSectionData?.categories.find(
      (category) => category._id === selectedCategory
    ) || null;

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Select Your Tickets</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Dropdown
          label="Ticket Type"
          value={selectedTicketType}
          onChange={(e) => {
            setSelectedTicketType(e.target.value);
            setSelectedSection("");
            setSelectedCategory("");
          }}
          defaultOption="Select Ticket Type"
          options={ticketTypes.map((ticketType) => ({
            value: ticketType._id,
            label: ticketType.name,
          }))}
        />

        {selectedTypeData && (
          <Dropdown
            label="Section"
            value={selectedSection}
            onChange={(e) => {
              setSelectedSection(e.target.value);
              setSelectedCategory("");
            }}
            defaultOption="Select Section"
            options={selectedTypeData.sections.map((section) => ({
              value: section._id,
              label: section.name,
            }))}
          />
        )}

        {selectedSectionData && (
          <Dropdown
            label="Category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            defaultOption="Select Category"
            options={selectedSectionData.categories.map((category) => ({
              value: category._id,
              label: category.name,
            }))}
          />
        )}
      </div>

      {selectedCategoryData && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedCategoryData.priceTiers.map((priceTier) => (
            <PricingCard
              key={priceTier._id}
              tierId={priceTier._id}
              tierName={priceTier.name}
              price={priceTier.price}
              selectedPriceTiers={selectedPriceTiers}
              setSelectedPriceTiers={setSelectedPriceTiers}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const TicketSummary: FC<{
  selectedPriceTiers: Record<string, number>;
  setSelectedPriceTiers: (tiers: Record<string, number>) => void;
  ticketTypes: TicketType[];
}> = ({ selectedPriceTiers, setSelectedPriceTiers, ticketTypes }) => {
  const selectedItems: {
    ticketType: string;
    section: string;
    category: string;
    tier: string;
    price: number;
    quantity: number;
    tierId: string;
  }[] = [];

  ticketTypes.forEach((ticketType) => {
    ticketType.sections.forEach((section) => {
      section.categories.forEach((category) => {
        category.priceTiers.forEach((tier) => {
          if (selectedPriceTiers[tier._id]) {
            selectedItems.push({
              ticketType: ticketType.name,
              section: section.name,
              category: category.name,
              tier: tier.name,
              price: tier.price,
              quantity: selectedPriceTiers[tier._id],
              tierId: tier._id,
            });
          }
        });
      });
    });
  });

  const totalPrice = selectedItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleDelete = (tierId: string) => {
    const updatedTiers = { ...selectedPriceTiers };
    delete updatedTiers[tierId];
    setSelectedPriceTiers(updatedTiers);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Ticket Summary</h2>

      {selectedItems.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>Henüz bilet seçmediniz.</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {selectedItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-center">
                  <div className="text-lg font-semibold">{item.tier}</div>
                  <button
                    onClick={() => handleDelete(item.tierId)}
                    className="text-red-600 hover:text-red-800 transition"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
                <div className="text-sm text-gray-600">
                  <span>Ticket Type: {item.ticketType}</span>
                  <br />
                  <span>Section: {item.section}</span>
                  <br />
                  <span>Category: {item.category}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-700">
                    Quantity: {item.quantity}
                  </span>
                  <span className="text-sm font-bold text-gray-800">
                    ₺{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t mt-4 pt-4 flex justify-between items-center">
            <span className="text-lg font-bold">Total Price</span>
            <span className="text-lg font-bold text-blue-600">
              ₺{totalPrice.toFixed(2)}
            </span>
          </div>

          <div className="mt-6">
            <button className="w-full py-3 px-4 rounded-lg text-white font-bold bg-blue-600 hover:bg-blue-700 transition">
              Buy Tickets
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const TicketPage: FC = () => {
  const [activeTab, setActiveTab] = useState<string>("aboutEvent");
  const [selectedTicketType, setSelectedTicketType] = useState<string>("");
  const [selectedSection, setSelectedSection] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPriceTiers, setSelectedPriceTiers] = useState<
    Record<string, number>
  >({});

  const ticket: Ticket = {
    name: "Beartooth Concert",
    slug: "beartooth-concert",
    date: new Date(),
    seatingPlanImage: "https://via.placeholder.com/600x400",
    ticketTypes: [
      {
        _id: "1",
        name: "General Admission",
        sections: [
          {
            _id: "1-1",
            name: "Diamond Circle",
            categories: [
              {
                _id: "1-1-1",
                name: "Early Entry",
                priceTiers: [
                  { _id: "1-1-1-1", name: "Adult", price: 150 },
                  { _id: "1-1-1-2", name: "Child", price: 100 },
                ],
              },
            ],
          },
        ],
      },
    ],
    city: {
      name: "Los Angeles",
      slug: "los-angeles",
    },
    event: {
      name: "Beartooth Concert",
      slug: "beartooth-concert",
      description:
        "Beartooth is one of the most electrifying bands in the metal scene today. Join us for an unforgettable night of music and energy.",
      subCategory: {
        name: "Hard Rock/Metal",
        slug: "hard-rock-metal",
        description:
          "Rock out to the best hard rock and metal bands in the world.",
        category: {
          name: "Music",
          slug: "music",
          description: "Get tickets to the best music events in town.",
        },
      },
    },
  };

  const breadcrumbs = [
    { label: "Home", link: "/" },
    {
      label: ticket.event.subCategory.category.name,
      link: `/${ticket.event.subCategory.category.slug}`,
    },
    {
      label: ticket.event.subCategory.name,
      link: `/${ticket.event.subCategory.slug}`,
    },
    { label: ticket.event.name, link: `/${ticket.event.slug}` },
    { label: ticket.city.name, link: `/${ticket.city.slug}` },
    {
      label: `${ticket.name} - ${ticket.date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}`,
    },
  ];

  const tabs = [
    {
      id: "aboutEvent",
      label: "About the Event",
      component: <AboutEvent description={ticket.event.description} />,
    },
    {
      id: "seatingPlan",
      label: "Seating Plan",
      component: (
        <div className="relative bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Seating Plan</h2>
          <div className="relative w-full h-96 bg-gray-100 overflow-hidden border rounded-lg">
            <Image
              src={ticket.seatingPlanImage}
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
  return (
    <div className="min-h-screen">
      <Header title={ticket.event.name} breadcrumbs={breadcrumbs} />
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-4 container mx-auto p-6">
        <div className="col-span-2 p-4">
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
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

export default TicketPage;
