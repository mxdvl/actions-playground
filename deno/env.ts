const token = Deno.env.get("GITHUB_TOKEN");
if (!token) throw new Error("Missing GITHUB_TOKEN");

const path = Deno.env.get("GITHUB_EVENT_PATH");
if (!path) throw new Error("Missing GITHUB_EVENT_PATH");

Deno.run({
	cmd: ["ls"],
});

Deno.run({
	cmd: ["which", "group"],
});

console.log("::group::My very super group")

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

const issue_number = (payload.issue || payload.pull_request || payload).number;
console.log({ issue_number });

console.log("::groupend::")

Deno.run({
	cmd: ["which", "groupend"],
});

if (!issue_number) throw new Error("Missing issue_number");
