import { SelectMultipleControlValueAccessor } from "@angular/forms";
import { environment } from "../../environments/environment.development";
import { ICharacter } from "../interfaces/ICharacter";
import { ICharacters } from "../interfaces/ICharacters";
import { sleep } from "../helpers/sleep";

const URL = environment.url;

export const getCharacters = async (): Promise<ICharacters> => {

  await sleep(2000);

  try {
  const response = await fetch(`${URL}/characters`);
  if (!response.ok) {
    throw new Error("Error fetching characters");
  }
  const data: ICharacters  = await response.json();
  console.log(data);
  return data;
  }
  catch (error) {
    console.error(error);
    throw error;
  }
};