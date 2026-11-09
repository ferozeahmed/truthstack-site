const DEFAULT_TO = "algofire-contact@googlegroups.com";
const DEFAULT_FROM = "Truthstack Contact <onboarding@resend.dev>";

/** Reads a non-empty trimmed env value, or returns the fallback. */
function pick(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

/**
 * Where contact messages go and who they are sent from.
 * Override with CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL (set in Vercel).
 * Until a domain is verified in Resend, the default sender can only deliver to
 * the Resend account owner's own address.
 */
export function getContactConfig(env: Record<string, string | undefined> = process.env) {
  return {
    to: pick(env.CONTACT_TO_EMAIL, DEFAULT_TO),
    from: pick(env.CONTACT_FROM_EMAIL, DEFAULT_FROM),
  };
}
