import { Schema, model } from "mongoose";
import { ISector } from "./types";

const schema = new Schema<ISector>(
  {
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
          required: true,
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

// schema.index({
// 	name: 1,
// });

const Sector = model<ISector>("sectors", schema);
Sector.syncIndexes();

/**
 * The function `addNewEntryDB` saves a new sector entry to the database and returns the saved sector.
 * @param {ISector} payload - The `payload` parameter is an object of type `ISector`. It contains the
 * data that will be used to create a new entry in the database.
 * @returns a Promise that resolves to an object of type ISector.
 */
export const addNewEntryDB = async (payload: ISector): Promise<ISector> => {
  const sector = new Sector(payload);
  await sector.save();
  return sector;
};

/**
 * The function `getEntryDB` retrieves a sector entry from a database based on its ID.
 * @param {string} id - The `id` parameter is a string that represents the unique identifier of a
 * sector in the database.
 * @returns a Promise that resolves to either an ISector object or null.
 */
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

/**
 * The function getAllEntriesDB retrieves all entries from the database.
 * @returns The getAllEntriesDB function is returning an array of ISector objects.
 */
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
