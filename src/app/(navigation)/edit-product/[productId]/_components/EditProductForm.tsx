"use client";

import { Picture, Product } from "@/types/product";
import { FC, FormEventHandler, useCallback, useMemo, useState } from "react";
import ProductPictureDisplay from "@/app/_components/ProductPictureDisplay";
import { useUpdateProductMutation } from "@/hooks/Product";
import { useRouter } from "next/navigation";
import LoadingIndicator from "@/app/_components/LoadingIndicator";

type Props = {
  product: Product;
};

const EditProductForm: FC<Props> = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(props.product.title);
  const [enteredPrice, setEnteredPrice] = useState(props.product.price);
  const [enteredDescription, setEnteredDescription] = useState(
    props.product.description,
  );
  const [enteredPictures, setEnteredPictures] = useState<FileList | null>(null);

  const updateProduct = useUpdateProductMutation();
  const router = useRouter();

  const previewPictures = useMemo(() => {
    const temp: Picture[] = [];

    if (!enteredPictures) return props.product.pictures;

    for (const picFile of Array.from(enteredPictures)) {
      temp.push({
        url: URL.createObjectURL(picFile),
        public_id: Math.random().toString(),
      });
    }

    return temp;
  }, [enteredPictures, props.product.pictures]);

  const submitFormHandler: FormEventHandler = useCallback(
    async (e) => {
      e.preventDefault();

      const pictures: File[] = [];
      if (enteredPictures)
        for (const picture of Array.from(enteredPictures)) {
          pictures.push(picture);
        }

      try {
        await updateProduct.mutateAsync({
          productId: props.product.id,
          data: {
            title: enteredTitle.trim(),
            price: enteredPrice,
            description: enteredDescription.trim(),
            pictures: pictures,
          },
        });

        router.refresh();
        router.push("/");
      } catch (e) {
        console.error(e);
      }
    },
    [
      router,
      enteredTitle,
      enteredPrice,
      enteredDescription,
      enteredPictures,
      updateProduct,
      props.product.id,
    ],
  );

  if (updateProduct.isLoading)
    return (
      <div className={`flex justify-center py-8`}>
        <LoadingIndicator size={50} />
      </div>
    );

  return (
    <form
      className={`flex-1 flex flex-col md:flex-row`}
      onSubmit={submitFormHandler}
    >
      {/* Picture Section */}
      <div className={`flex-1 flex flex-col justify-center items-center gap-8`}>
        <div className={`w-full md:w-3/4`}>
          <ProductPictureDisplay pictures={previewPictures} />
        </div>
        <input
          id={"picture"}
          type="file"
          className={"hidden"}
          onChange={(e) => {
            if (!e.target.files) return;
            if (e.target.files.length > 4)
              return alert("Max 4 pictures allowed");
            setEnteredPictures(e.target.files);
          }}
          multiple={true}
        />
        <label
          htmlFor={"picture"}
          className={"btn text-xl hover:cursor-pointer"}
        >
          Upload Picture
        </label>
      </div>

      {/* Info Section */}
      <div className={`flex-1 border-l flex flex-col gap-4 text-xl p-4 md:p-8`}>
        <div className={`flex flex-col gap-2`}>
          <label htmlFor="title" className={`font-semibold`}>
            Title :
          </label>
          <input
            id={"title"}
            type="text"
            className={`input`}
            placeholder={"Enter product title"}
            value={enteredTitle}
            onChange={(e) => setEnteredTitle(e.target.value)}
            required={true}
          />
        </div>

        <div className={`flex flex-col gap-2`}>
          <label htmlFor="price" className={`font-semibold`}>
            Price :
          </label>
          <div className={`flex gap-4 items-center min-w-[25%]`}>
            <span className={`text-3xl font-bold`}>$</span>
            <input
              id={"price"}
              type="text"
              className={`input text-center w-fit`}
              value={enteredPrice}
              onChange={(e) => {
                if (!isNaN(+e.target.value)) setEnteredPrice(+e.target.value);
              }}
              required={true}
            />
          </div>
        </div>

        <div className={`flex flex-col gap-2`}>
          <label htmlFor="description" className={`font-semibold`}>
            Description :
          </label>
          <textarea
            id={"description"}
            className={`input`}
            placeholder={"Enter product description"}
            rows={4}
            value={enteredDescription}
            onChange={(e) => setEnteredDescription(e.target.value)}
            required={true}
          />
        </div>

        <div className={`flex justify-center`}>
          <button type={"submit"} className={`btn`}>
            Update
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditProductForm;
