import supabase from "./supabase";
import { supabaseUrl } from "../services/supabase";
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createCabins(newCabin) {
  //https://wvgulpngadweglxloutx.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg
  const imageName = `${Date.now()}-${newCabin.image.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images//${imageName}`;
  //1.Create Cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([
      {
        ...newCabin,
        image: imagePath,
      },
    ])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }
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
