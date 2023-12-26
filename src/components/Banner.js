import { ResponsiveGrid } from "components/theme";

export const Banner = () => {
  return (
    <div className="banner bg-white py-4">
      <ResponsiveGrid className="">
        <h1 className="font-heading font-semibold text-md col-start-1 col-span-12 text-center">
          Impatient Care
        </h1>
      </ResponsiveGrid>
    </div>
  );
};
