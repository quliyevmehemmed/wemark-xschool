
export default function Founder({ founder }) {
    if (!founder) return null;

    return (
        <section className="bg-background px-6 py-16 text-foreground md:px-12 md:py-24">
            <div className="mx-auto max-w-[1440px]">

                {/* Section heading */}
                <h2 className="mb-14 inline-block font-tt-firs text-[42px] leading-[48px] font-medium uppercase sm:text-[64px] sm:leading-[72px] lg:text-[90px] lg:leading-[100px]">
                    Founder
                </h2>

                {/* Founder content */}

                <div className="grid items-stretch gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-10 lg:gap-16">

                    {/* Image */}
                    <div className="relative w-full aspect-square max-w-[420px]">
                        <img
                            src={founder.image}
                            alt={founder.name}
                            className="absolute inset-0 h-full w-full object-cover grayscale"
                        />

                        {/* Image caption */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-background px-3 py-2 font-tt-hoves text-[10px] text-black shadow-sm sm:text-xs">
                            <span className="font-medium text-sm">{founder.name}</span>
                            {" - "}
                            {founder.position}
                        </div>
                    </div>

                    {/* Founder message */}
                    <div className="flex h-full flex-col justify-center">
                        <h3 className="mb-4 max-w-[320px] font-tt-firs text-xl font-medium uppercase leading-relaxed sm:text-2xl lg:text-3xl">
                            Message of the Founder
                        </h3>

                        <p className="font-tt-hoves text-[#141414] text-[20px] leading-[27px] font-normal sm:text-[24px] sm:leading-[34px] lg:text-[30px] lg:leading-[44px]">
                            {founder.description?.slice(0, Math.floor(founder.description.length / 2.4))}...
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
