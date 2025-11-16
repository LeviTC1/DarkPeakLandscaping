import { socials } from "../config/socials";

const SocialIcons = () => (
  <div className="social-icons">
    <a
      href={socials.facebook}
      target="_blank"
      rel="noreferrer"
      aria-label="Dark Peak Landscaping on Facebook"
      className="social-link social-link--facebook"
    >
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M22 12.07c0-5.52-4.48-10-10-10S2 6.55 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.39-3.62 3.53-3.62 1.02 0 2.09.18 2.09.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46v1.76h2.58l-.41 2.9h-2.17V22c4.78-.8 8.44-4.94 8.44-9.93Z" />
      </svg>
    </a>
    <a
      href={socials.instagram}
      target="_blank"
      rel="noreferrer"
      aria-label="Dark Peak Landscaping on Instagram"
      className="social-link social-link--instagram"
    >
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M16.78 2H7.22A5.24 5.24 0 0 0 2 7.22v9.56A5.24 5.24 0 0 0 7.22 22h9.56A5.24 5.24 0 0 0 22 16.78V7.22A5.24 5.24 0 0 0 16.78 2Zm3.03 14.78a3.03 3.03 0 0 1-3.03 3.03H7.22a3.03 3.03 0 0 1-3.03-3.03V7.22A3.03 3.03 0 0 1 7.22 4.19h9.56a3.03 3.03 0 0 1 3.03 3.03ZM12 6.65A5.35 5.35 0 1 0 17.35 12 5.35 5.35 0 0 0 12 6.65Zm0 8.55A3.2 3.2 0 1 1 15.2 12 3.2 3.2 0 0 1 12 15.2Zm5.49-8.98a1.22 1.22 0 1 0 1.22 1.22 1.22 1.22 0 0 0-1.22-1.22Z" />
      </svg>
    </a>
  </div>
);

export default SocialIcons;
