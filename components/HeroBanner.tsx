type HeroBannerProps = {
  title: string;
  subtitle?: string;
  imageUrl: string;
};

export default function HeroBanner({ title, subtitle, imageUrl }: HeroBannerProps) {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white text-lg mt-2 max-w-xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
