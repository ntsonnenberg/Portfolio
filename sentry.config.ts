import * as Sentry from "@sentry/gatsby";
import { feedbackIntegration } from "@sentry/gatsby";

Sentry.init({
  dsn: "https://60026fc946284a37dddacc04398844ab@o4508984804507648.ingest.us.sentry.io/4508984806408192",
  integrations: [
    Sentry.feedbackIntegration({
      colorScheme: "system",
      isNameRequired: true,
      isEmailRequired: true,
      showBranding: false,
      triggerLabel: "Feedback",
      formTitle: "Give us some Feedback!",
      submitButtonLabel: "Submit Feedback",
      successMessageText: "Thank you for your feedback!",
      messagePlaceholder:
        "Provide your feedback here including bugs, design issues, etc.",
    }),
  ],
});
