import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

function init() {
    Sentry.init({
        dsn: "https://8bbd2480df4f4a87b977a62f5682d5cc@o1421200.ingest.sentry.io/6766737",
        integrations: [new BrowserTracing()],

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });
}
function log(error) {
    Sentry.captureException(error)
}

const logger = {
    init,
    log,
}
export default logger