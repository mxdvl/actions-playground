const token = Deno.env.get("GITHUB_TOKEN");
if (!token) throw new Error("Missing GITHUB_TOKEN");

const path = Deno.env.get("GITHUB_EVENT_PATH");
if (!path) throw new Error("Missing GITHUB_EVENT_PATH");

console.log("::group::Log event payload");

/**
 * https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads
 */
const payload: {
	action: string;
	sender: Record<string, unknown>;
	repository: Record<string, unknown>;
	organization: Record<string, unknown>;
	installation: Record<string, unknown>;
	issue?: { number: number };
	pull_request?: { number: number };
	number?: number;
} = JSON.parse(Deno.readTextFileSync(path));
console.log({ payload });

console.log("::endgroup::");
console.log("::group::Get issue number");

const issue_number = (payload.issue || payload.pull_request || payload).number;
console.log({ issue_number });

if (!issue_number) throw new Error("Missing issue_number");

console.log("::endgroup::");
