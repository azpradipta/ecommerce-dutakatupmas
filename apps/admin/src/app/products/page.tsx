import { Product, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Product[]> => {
  return [
    {
      id: 1,
      name: "Adidas CoreFit T-Shirt",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 39.9,
      image: "/products/1g.png",
    },
    {
      id: 2,
      name: "Puma Ultra Warm Zip",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 59.9,
      image: "/products/2g.png",
    },
    {
      id: 3,
      name: "Nike Air Essentials Pullover",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 69.9,
      image: "/products/3gr.png",
    },
    {
      id: 4,
      name: "Nike Dri Flex T-Shirt",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 29.9,
      image: "/products/4w.png",
    },
    {
      id: 5,
      name: "Under Armour StormFleece",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 49.9,
      image: "/products/5r.png",
    },
    {
      id: 6,
      name: "Nike Air Max 270",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 59.9,
      image: "/products/6g.png",
    },
    {
      id: 7,
      name: "Nike Ultraboost Pulse",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 69.9,
      image: "/products/7g.png",
    },
    {
      id: 8,
      name: "Levi's Classic Denim",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 59.9,
      image: "/products/8b.png",
    },
  ];
};

const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Products</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentsPage;