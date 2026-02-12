"use client";

export default function ExportMap() {
const handleClick = (e:any) => {

  const rect = e.currentTarget.getBoundingClientRect();

  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  console.log(`x:${x.toFixed(1)}, y:${y.toFixed(1)}`);

};

  const countries = [
    { name: "Libya", x: 52, y: 58 },
    { name: "Greece",x:54.0, y:34.6 },
    { name: "Russia", x:76.9, y:28.8 },
    { name: "Albania",x:58.8, y:46. },
    { name: "Algeria", x: 45, y: 60 },
  ];

  return (

    <section className="py-40 bg-[#020617] text-center relative">

      <h2 className="text-5xl font-black text-white mb-20">
        Export Network
      </h2>

      <div className="relative w-full max-w-6xl mx-auto">

        {/* WORLD MAP BACKGROUND */}
        <img
          src="/img/map.png"
          className="w-full opacity-40"
          onClick={handleClick}
        />

        {/* EXPORT POINTS */}
        {countries.map((c, i) => (

          <div
            key={i}
            className="absolute"
            style={{
              left: `${c.x}%`,
              top: `${c.y}%`,
            }}
          >

            <div className="w-4 h-4 bg-yellow-400 rounded-full animate-ping absolute"></div>
            <div className="w-4 h-4 bg-yellow-400 rounded-full relative"></div>

          </div>
          

        ))}

      </div>

    </section>

  );
}
