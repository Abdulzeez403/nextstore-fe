import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  product: {
    title: string;
    price: number;
    sellerPhoneNumber: string;
  };
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  userAddress: string;
  userPhone: string;
  userNotes: string;
}

export function WhatsAppButton({
  product,
  quantity,
  selectedSize,
  selectedColor,
  userAddress,
  userPhone,
  userNotes,
}: WhatsAppButtonProps) {
  const generateWhatsAppMessage = () => {
    const message = `
Hi, I'd like to buy the following product:
- Name: ${product.title}
- Price: $${product.price.toFixed(2)}
- Quantity: ${quantity}
- Variants: Size: ${selectedSize}, Color: ${selectedColor}

Delivery Details:
- Address: ${userAddress}
- Phone Number: ${userPhone}
- Notes: ${userNotes}

Please confirm availability and delivery options.
    `.trim();

    return encodeURIComponent(message);
  };

  const handleBuyNow = () => {
    if (!validateInputs()) {
      alert("Please fill in all required fields");
      return;
    }

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${product.sellerPhoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const validateInputs = () => {
    return (
      quantity > 0 &&
      selectedSize !== "" &&
      selectedColor !== "" &&
      userAddress.trim() !== "" &&
      userPhone.trim() !== ""
    );
  };

  return (
    <Button onClick={handleBuyNow} className="w-full">
      Buy Now via WhatsApp
    </Button>
  );
}
