import Image from "next/image";
import React from "react";
import img from "@/public/bridge.jpg";
import profileImg from "@/public/profile2.jpg";

const page = () => {
  return (
    <div className=" bg-customGray shadow-xl shadow-black rounded-3xl p-6">
      <div className="flex flex-col lg:flex-row mb-12 gap-3">
        <div className="flex flex-col justify-center w-full lg:w-1/2 gap-4">
          <h2 className="text-center font-bold text-3xl sm:text-left sm:text-4xl md:text-5xl lg:text-6xl">
            Crossing Boundaries: Exploring the Magnificent Bridges Around the
            World
          </h2>
          <p>
            Experience the world's most stunning bridges. Marvel at their
            beauty, learn their stories, and be captivated by the breathtaking
            views they offer. Embark on an unforgettable journey.
          </p>
          <div className="flex items-center gap-3">
            <Image
              src={profileImg}
              className="rounded-full h-12 w-12"
              alt="profile"
            />
            <p>Emily Anderson</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Image src={img} className="rounded-3xl" alt={"post_img"} />
        </div>
      </div>
      <div className="gap-4">
        <p>
          The Golden Gate Bridge in San Francisco stands as an iconic symbol of
          American engineering prowess. Spanning the magnificent Golden Gate
          Strait, this majestic suspension bridge stretches across 1.7 miles,
          connecting the city to Marin County. Completed in 1937, its vibrant
          orange-red hue and elegant Art Deco design make it a visual
          masterpiece. As you walk or drive across this engineering marvel, the
          sweeping views of the San Francisco Bay and the Pacific Ocean will
          leave you breathless. The Golden Gate Bridge is not only a testament
          to human innovation but also a captivating gateway to the wonders of
          the California coast.
        </p>
        <p>
          Travel across the globe to London, and you'll encounter the
          magnificent Tower Bridge. This iconic bascule and suspension bridge,
          with its towering stone towers and majestic walkways, spans the River
          Thames. Built in the late 19th century, the Tower Bridge is a symbol
          of the city's rich history and architectural brilliance. Step inside
          its exhibition to learn about the bridge's construction and witness
          the mesmerizing mechanics that allow it to lift its roadways for
          passing ships. Ascend to the elevated walkways and savor the panoramic
          views of the Thames, capturing glimpses of famous landmarks such as
          the Tower of London and the Shard. A visit to the Tower Bridge is a
          journey through time and an immersion into London's captivating charm.
        </p>
        <p>
          Crossing over to Sydney, Australia, the Sydney Harbour Bridge proudly
          stands as an engineering marvel and an integral part of the city's
          skyline. Known as the "Coathanger" due to its distinctive shape, this
          colossal steel arch bridge spans the iconic Sydney Harbour. Climb the
          bridge's arches on the BridgeClimb experience for a truly
          unforgettable adventure. As you ascend, you'll be rewarded with
          breathtaking views of the Sydney Opera House, the shimmering waters of
          the harbor, and the bustling city below. The Sydney Harbour Bridge
          represents the indomitable spirit of Australia and offers a unique
          perspective of Sydney's beauty and vibrancy.
        </p>
        <p>
          Venture further to the east, and you'll discover the magnificent
          Charles Bridge in Prague, Czech Republic. This historic stone bridge,
          adorned with statues of saints and lined with talented local artists,
          connects the Old Town with the Lesser Town across the Vltava River.
          Built in the 14th century, the Charles Bridge exudes an enchanting
          atmosphere that transports you back in time. Stroll along its
          cobblestone path, absorb the captivating views of Prague Castle and
          the city's red-roofed skyline, and immerse yourself in the lively
          ambiance of street musicians and artisans. The Charles Bridge is not
          just a physical connection between two districts, but a cultural and
          artistic landmark that embodies the essence of Prague's rich heritage.
        </p>
      </div>
    </div>
  );
};

export default page;
