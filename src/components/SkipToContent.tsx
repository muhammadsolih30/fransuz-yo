import { useSitePreferences } from "../contexts/SitePreferencesContext";

export function SkipToContent() {
  const { content } = useSitePreferences();

  return (
    <a href="#main-content" className="skip-link">
      {content.ui.a11y.skipToContent}
    </a>
  );
}
