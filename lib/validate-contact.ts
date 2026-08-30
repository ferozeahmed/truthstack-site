export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  serviceInterest: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(data: ContactFormData): ValidationResult {
  const errors: ValidationResult["errors"] = {};

  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.serviceInterest.trim()) errors.serviceInterest = "Pick a service.";
  if (!data.message.trim()) errors.message = "Message is required.";

  return { valid: Object.keys(errors).length === 0, errors };
}
