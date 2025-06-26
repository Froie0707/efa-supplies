export default function MapLocation() {
  return (
    <section className="mt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-center">Visit Us</h3>
      <div className="rounded overflow-hidden shadow-md aspect-video">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.327589105538!2d125.6291973!3d7.0879714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d660f717f77%3A0x7bc888b5c6904f66!2sEFA%20Supplies!5e0!3m2!1sen!2sph!4v1750900422932!5m2!1sen!2sph"
          width="100%"
              height="100%"
          style={{ border: '0' }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}