import { Schema, model } from "mongoose";
import { ISector } from "./types";

const schema = new Schema<ISector>(
	{
		fullName: {
			type: String,
			required: true,
			lowercase: true,
		},
		name: {
			type: String,
			required: true,
			lowercase: true,
		},
		sector: {
			name: {
				type: String,
				required: true,
				lowercase: true,
			},
			industry: {
				name: {
					type: String,
					required: false,
					lowercase: true,
				},
				subIndustry: {
					type: String,
					required: false,
				},
			},
		},
	},
	{
		timestamps: true,
	}
);

const Sector = model<ISector>("sectors", schema);
Sector.syncIndexes();

export const addNewEntryDB = async (payload: ISector): Promise<ISector> => {
	const sector = new Sector(payload);
	await sector.save();
	return sector;
};

export const getEntryDB = async (id: string): Promise<ISector | null> => {
	try {
		const sector = await Sector.findById<ISector>(id, {
			name: 1,
			sector: 1,
		});
		return sector;
	} catch (error) {
		return null;
	}
};

export const getAllEntriesDB = async (): Promise<ISector[]> => {
	const sectors = await Sector.find(
		{},
		{
			name: 1,
			sector: 1,
		}
	);
	return sectors;
};
