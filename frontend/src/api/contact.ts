const API_URL = import.meta.env.VITE_API_URL;

export async function submitContactForm(formData: any) {
  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    throw new Error("Failed to send contact form");
  }

  return res.json();
}
