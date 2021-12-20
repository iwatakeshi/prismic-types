import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.WebhookBodyAPIUpdate): true => {
	switch (typeof value) {
		case "object": {
			if (value === null) {
				expectNever(value);
			}

			return true;
		}

		default: {
			return expectNever(value);
		}
	}
};

expectType<prismicT.WebhookBodyAPIUpdate>({
	type: "api-update",
	domain: "string",
	apiUrl: "string",
	secret: "string",
	masterRef: "string",
	releases: {
		update: [
			{
				id: "string",
				ref: "string",
				label: "string",
				documents: ["string"],
			},
		],
		addition: [
			{
				id: "string",
				ref: "string",
				label: "string",
				documents: ["string"],
			},
		],
		deletion: [
			{
				id: "string",
				ref: "string",
				label: "string",
				documents: ["string"],
			},
		],
	},
	masks: {
		update: [
			{
				id: "string",
				label: "string",
			},
		],
		addition: [
			{
				id: "string",
				label: "string",
			},
		],
		deletion: [
			{
				id: "string",
				label: "string",
			},
		],
	},
	tags: {
		update: [
			{
				id: "string",
			},
		],
		addition: [
			{
				id: "string",
			},
		],
		deletion: [
			{
				id: "string",
			},
		],
	},
	documents: ["string"],
	experiments: {
		update: ["unknown"],
		addition: ["unknown"],
		deletion: ["unknown"],
	},
});

/**
 * Secret is nullable.
 */
expectType<prismicT.WebhookBodyAPIUpdate["secret"]>(null);

/**
 * MasterRef is optional.
 */
expectType<prismicT.WebhookBodyAPIUpdate["masterRef"]>(undefined);

/**
 * Experiments is optional
 */
expectType<prismicT.WebhookBodyAPIUpdate["experiments"]>(undefined);
