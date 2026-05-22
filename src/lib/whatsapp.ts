export const WHATSAPP_PHONE = "5534996413377";
export const WHATSAPP_DISPLAY = "(34) 9 9641-3377";
export const WHATSAPP_DEFAULT_MSG =
  "Olá, vim pelo site da Energy Sun e gostaria de solicitar um orçamento de energia solar.";

export function waLink(message: string = WHATSAPP_DEFAULT_MSG) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
