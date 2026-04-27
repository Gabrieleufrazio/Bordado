const WHATSAPP_NUMBER = "5511999999999"; // placeholder
const DEFAULT_MSG = "Olá Rodrigo! Vim pelo site e gostaria de fazer um pedido personalizado.";

export function whatsappLink(message: string = DEFAULT_MSG) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const CONTACT = {
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappDisplay: "(11) 99999-9999",
  instagram: "@rodrigobordados",
  instagramUrl: "https://instagram.com/rodrigobordados",
  email: "contato@rodrigobordados.com.br",
};
