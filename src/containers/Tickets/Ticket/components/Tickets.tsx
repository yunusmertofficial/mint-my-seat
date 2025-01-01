import Dropdown from "@/components/Dropdown";
import { TicketType } from "@/types/model";
import { FC } from "react";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

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

const Tickets: FC<{
  ticketTypes?: TicketType[];
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
  const selectedTypeData = ticketTypes?.find(
    (ticketType) => ticketType._id === selectedTicketType
  );

  const selectedSectionData =
    selectedTypeData?.ticketSections?.find(
      (section) => section._id === selectedSection
    ) || null;

  const selectedCategoryData =
    selectedSectionData?.categories?.find(
      (category) => category._id === selectedCategory
    ) || null;

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Select Your Tickets</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {ticketTypes && (
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
        )}
        {selectedTypeData && selectedTypeData.ticketSections && (
          <Dropdown
            label="Section"
            value={selectedSection}
            onChange={(e) => {
              setSelectedSection(e.target.value);
              setSelectedCategory("");
            }}
            defaultOption="Select Section"
            options={selectedTypeData.ticketSections.map((section) => ({
              value: section._id,
              label: section.name,
            }))}
          />
        )}

        {selectedSectionData && selectedSectionData.categories && (
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

      {selectedCategoryData && selectedCategoryData.priceTiers && (
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

export default Tickets;
