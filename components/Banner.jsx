
export default function Banner({ title, image }) {
  return (
    <section
      className="relative flex min-h-[520px] items-center justify-center bg-cover bg-center px-6 pt-24 md:min-h-[650px]"
      style={{
        backgroundImage: `url("${image}")`,
      }}
    >
      <div className="absolute inset-0 bg-black/25" />

      <h1 className="font-tt-hoves relative z-10 max-w-5xl whitespace-pre-line text-center text-4xl uppercase leading-[1.15] tracking-tight text-white md:text-6xl lg:text-[116px]">
        {title}
      </h1>
    </section>

  );
}
