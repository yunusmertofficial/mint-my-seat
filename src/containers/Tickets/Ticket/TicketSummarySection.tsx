import { TicketType } from "@/types/model";
import { FC } from "react";
import { FaTrashAlt } from "react-icons/fa";

const TicketSummary: FC<{
  selectedPriceTiers: Record<string, number>;
  setSelectedPriceTiers: (tiers: Record<string, number>) => void;
  ticketTypes?: TicketType[];
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

  ticketTypes?.forEach((ticketType) => {
    ticketType.ticketSections?.forEach((section) => {
      section.categories?.forEach((category) => {
        category.priceTiers?.forEach((tier) => {
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

export default TicketSummary;
