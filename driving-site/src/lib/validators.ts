export type ContactPayload = {
  name: string;
  phone: string;
  area: string;
  transmission: string;
  message: string;
  token: string;
};

const stripTags = (value: string) => value.replace(/<[^>]*>?/gm, "").trim();

export const sanitizeContactPayload = (payload: ContactPayload) => ({
  name: stripTags(payload.name),
  phone: stripTags(payload.phone),
  area: stripTags(payload.area),
  transmission: stripTags(payload.transmission),
  message: stripTags(payload.message),
  token: stripTags(payload.token),
});

export const validateContactPayload = (payload: ContactPayload) => {
  if (!payload.name || payload.name.length < 2) return "Please enter your name.";
  if (!payload.phone || payload.phone.length < 8) return "Please enter a valid phone number.";
  if (!payload.area) return "Please enter your area.";
  if (!payload.transmission) return "Please select a transmission preference.";
  if (!payload.message || payload.message.length < 5) return "Please share a brief message.";
  if (!payload.token) return "Security verification failed. Please retry.";
  return null;
};
