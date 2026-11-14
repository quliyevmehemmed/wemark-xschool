
export default function Program({ program }) {
  if (!program) return null;

  return (
    <section
      id="program"
      className="bg-background px-6 py-16 text-foreground md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-[1440px]">

        <h2 className="mb-10 font-tt-firs text-[42px] leading-[48px] font-medium uppercase sm:text-[64px] sm:leading-[72px] lg:text-[90px] lg:leading-[100px]">
          Program
        </h2>

        <div
          className="program-content font-tt-hoves text-sm leading-[1.55] md:text-base text-[#141414] text-[20px] leading-[27px] font-normal sm:text-[24px] sm:leading-[34px] lg:text-[30px] lg:leading-[44px]"
          dangerouslySetInnerHTML={{
            __html: program.description,
          }}
        />

      </div>
    </section>
  );
}
