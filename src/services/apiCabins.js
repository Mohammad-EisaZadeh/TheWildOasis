import supabase from "./supabase";
import { supabaseUrl } from "../services/supabase";

export async function getCabins() { 

  const { data, error } = await supabase.from("cabins").select("*");
  console.log(data)
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createEditCabins(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Date.now()}-${newCabin.image.name}`.replaceAll("/", "");

  const imagePath = hasImagePath
  ? newCabin.image
  : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  //1.Create/Edit Cabin
  let query = supabase.from("cabins");
  // A) Create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  // B) Edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }
  if (hasImagePath) return data;
  //2.Upload Image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  //3.Delete The Cabin If There Was An Error On Uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploadid and the cabin was not created"
    );
  }

  return data;
}

export async function deleteCabins(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
}
