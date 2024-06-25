import express from "express";
interface ActionParameter {
	/** parameter name in url */
	name: string;
	/** placeholder text for the user input field */
	label?: string;
	/** declare if this field is required (defaults to `false`) */
	required?: boolean;
}
interface LinkedAction {
	/** URL endpoint for an action */
	href: string;
	/** button text rendered to the user */
	label: string;
	/** Parameter to accept user input within an action */
	parameters?: [ActionParameter];
}
interface ActionError {
	/** non-fatal error message to be displayed to the user */
	message: string;
}
interface ActionGetResponse {
	/** url of some descriptive image for the action */
	icon: string;
	/** title of the action */
	title: string;
	/** brief description of the action */
	description: string;
	/** text to be rendered on the action button */
	label: string;
	/** optional state for disabling the action button(s) */
	disabled?: boolean;
	/** optional list of related Actions */
	links?: {
		actions: LinkedAction[];
	};
	/** optional (non-fatal) error message */
	error?: ActionError;
}
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (req, res) => {
	const Action: ActionGetResponse = {
		icon: "https://ember-dashboard-git-dev-edgewoodtd.vercel.app/playEmberLogo.svg",
		title: "Testing",
		description: "This is a test action",
		label: "Button A",
	};
	res.json(Action);
});
