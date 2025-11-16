import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageSection from "../components/PageSection";
import Button from "../components/Button";
import logoImage from "../assets/logo.jpg";
import { submitContactForm } from "../api/contact";

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  address: string;
  workType: string;
  message: string;
  preferredContact: string;
  bestTime: string;
};

const initialFormState: ContactFormData = {
  name: "",
  phone: "",
  email: "",
  address: "",
  workType: "",
  message: "",
  preferredContact: "",
  bestTime: "",
};

const Contact = () => {
  const { hash } = useLocation();
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [hash]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    try {
      await submitContactForm(formData);
      setFormData(initialFormState);
      setStatus("success");
      setStatusMessage("Message sent! We'll get back to you shortly.");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <PageSection>
      <div className="contact-card__grid">
        <article id="request-quote" className="project-thumb contact-card">
          <div className="project-thumb__media contact-card__media" style={{ backgroundImage: `url(${logoImage})` }} />
          <div className="project-thumb__content">
            <p className="eyebrow">Ready to start?</p>
            <h1>Request a free quote</h1>
            <p>Send a few details about your garden and we'll line up a quick visit. No obligation, no pushy sales talk.</p>
            <form className="contact-inline-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </label>
              <label>
                Phone number
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </label>
              <label>
                Email address
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>
              <label>
                Address / area
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Whaley Bridge, New Mills, etc."
                  required
                />
              </label>
              <label>
                Type of work
                <input
                  type="text"
                  name="workType"
                  value={formData.workType}
                  onChange={handleChange}
                  placeholder="Patios, planting, garden tidy..."
                  required
                />
              </label>
              <label>
                Preferred contact method
                <input
                  type="text"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleChange}
                  placeholder="Phone, email or WhatsApp"
                  required
                />
              </label>
              <label>
                Best time to reach you
                <input
                  type="text"
                  name="bestTime"
                  value={formData.bestTime}
                  onChange={handleChange}
                  placeholder="Weekday evenings, weekend mornings, etc."
                  required
                />
              </label>
              <label>
                Message
                <textarea name="message" rows={4} value={formData.message} onChange={handleChange} required />
              </label>
              <Button type="submit">{status === "sending" ? "Sending..." : "Send my details"}</Button>
              {status !== "idle" && statusMessage && (
                <p className={`form-feedback ${status === "success" ? "success" : "error"}`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </article>
        <article className="project-thumb contact-card">
          <div className="project-thumb__media contact-card__media" style={{ backgroundImage: `url(${logoImage})` }} />
          <div className="project-thumb__content">
            <p className="eyebrow">Prefer to talk?</p>
            <h1>Call or message Liam</h1>
            <p>Sometimes a quick conversation is best. Give us a ring or drop a WhatsApp and we'll get back to you quickly.</p>
            <p>
              Phone: <a href="tel:07702252453">07702 252453</a>
              <br />
              WhatsApp: <a href="https://wa.me/447702252453" target="_blank" rel="noreferrer">Message Liam</a>
            </p>
            <p>Based in Whaley Bridge and covering the High Peak, New Mills, Chapel-en-le-Frith, Disley and nearby villages. If you're unsure whether we cover your area, just ask.</p>
          </div>
        </article>
      </div>
    </PageSection>
  );
};

export default Contact;
