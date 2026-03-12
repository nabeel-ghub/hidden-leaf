"use client";
import { useEffect, useState, useRef, FormEvent } from "react";
import Image from "next/image";

export default function Gallery() {
  const [images, setImages] = useState<any>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function getImages() {
      try {
        const response = await fetch(
          `https://res.cloudinary.com/dzczno8ka/image/list/cafe-gallery.json`,
        );
        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Cloudinary Error (${response.status}):`, errorText);
          return;
        }
        const data = await response.json();
        console.log(data.resources);
        setImages(data.resources);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      }
    }

    getImages();
  }, []);

  function handleClick(e: FormEvent) {
    e.preventDefault();
    if (!fileRef || !fileRef.current) return;
    fileRef.current.click();
  }

  const uploadToCloudinary = async () => {
    const fileInput = fileRef.current;
    if (!fileInput || !fileInput.files) return;
    const file: File | undefined = (fileInput as HTMLInputElement).files?.[0];
    if (!file) return;
    const isImage = file.type.startsWith("image/");

    // 2. Define allowed extensions
    const allowedExtensions: string[] = ["jpg", "jpeg", "png", "webp"];
    const fileExtension: string =
      file.name.split(".").pop()?.toLowerCase() || " ";

    if (!isImage || !allowedExtensions.includes(fileExtension)) {
      alert("Only JPG, PNG, and WEBP images are allowed!");
      (fileInput as HTMLInputElement).value = ""; // Reset the input
      return;
    }

    const maxSize: number = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      alert("File is too large! Max limit is 5MB.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");
    formData.append("tags", "cafe-gallery");
    formData.append("folder", "Memories/");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dzczno8ka/image/upload",
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await response.json();
    if (data) {
      alert("Your memory was saved check back in a minute to see it here ;)");
    }
    return data.secure_url;
  };
  return (
    <div id="gallery" className="min-h-[60vh] h-auto bg-[#f2ebd8] flex flex-col items-center p-5">
      <h2 className="fontPoppins font-[700] text-xl text-black w-[90%] text-center">
        Have memories with <br></br>Hidden Leaf Cafe?
      </h2>
      <input
        ref={fileRef}
        onChange={uploadToCloudinary}
        type="file"
        className="hidden h-0 w-0"
      ></input>
      <button
        onClick={handleClick}
        className="bg-white border-black border-1 border-solid text-black fontOutfit h-10 text-xs cursor-pointer p-2 mt-2 rounded-sm"
      >
        Upload your memory
      </button>
      <div className="mt-10 flex flex-row flex-wrap gap-5 pl-5 pr-5">
        {images.length <= 0 &&
        <h2 className="text-orange-900 fontOutfit font-[600] text-sm">...No memories yet, try adding yours...</h2>
        }
        {images?.map((img: any) => {
            console.log(images.length)
          const imageUrl = `https://res.cloudinary.com/dzczno8ka/image/upload/v${img.version}/${img.public_id}.${img.format}`;
          return (
            <Image
              key={img.public_id}
              height={300}
              width={350}
              src={imageUrl}
              alt={img.public_id}
              className="max-h-[300px] max-w-[350px] object-cover"
            />
          );
        })}
      </div>
    </div>
  );
}
