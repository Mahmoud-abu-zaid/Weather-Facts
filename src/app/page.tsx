import Weather from "@/modules/weather/components/Weather";

export default function Home() {
  return (
    <div className="  flex justify-center items-center flex-col gap-10">
      <h1 className=" block text-center leading-15 text-white pt-26 text-4xl">
        Seeing the weather of the whole world <br /> <span className="font-bold bg-linear-to-r from-white to-[#316d8b] text-transparent bg-clip-text">with Dark Weather!</span>
      </h1>
      <div className="container w-full p-4">
        <Weather />
      </div>
    </div>
  );
}
