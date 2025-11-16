import { socials } from "../config/socials";

const SocialIcons = () => (
  <div className="social-icons">
    <a href={socials.facebook} target="_blank" rel="noreferrer" aria-label="Dark Peak Landscaping on Facebook">
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M15 8h2V4h-2.4C11.6 4 10 5.5 10 8.2V10H8v4h2v6h4v-6h2.5l.5-4H14V8.8c0-.5.2-.8 1-.8Z" />
      </svg>
    </a>
    <a href={socials.instagram} target="_blank" rel="noreferrer" aria-label="Dark Peak Landscaping on Instagram">
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M8 3h8c2.8 0 5 2.2 5 5v8c0 2.8-2.2 5-5 5H8c-2.8 0-5-2.2-5-5V8c0-2.8 2.2-5 5-5Zm0 2C6.3 5 5 6.3 5 8v8c0 1.7 1.3 3 3 3h8c1.7 0 3-1.3 3-3V8c0-1.7-1.3-3-3-3H8Zm8.8 1.7c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1ZM12 8.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5Z" />
      </svg>
    </a>
  </div>
);

export default SocialIcons;
