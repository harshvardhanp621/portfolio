export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center px-8 py-24 bg-bottom bg-no-repeat fill-screen snap-start snap-always md:px-32 bg-waveMobile lg:bg-wave"
    >
      <div className="flex flex-col items-center justify-center max-w-3xl">
        <p className="mb-4 text-3xl font-bold md:text-4xl md:mb-8">About</p>
        <div className="mb-8 text-lg md:text-xl md:mb-16">
          <p className="mb-4">
            I am a lifelong learner with expertise in no code tools. I have worked with Shopify, Wix, Wordpress and I can help with integrating custom designs and userflows.
          </p>
          <p>
            In addition to development, I enjoy road trips, hitting gym, and connecting with different individuals and communities.
          </p>
        </div>
        <a
          href="https://drive.google.com/file/d/165-TzZyy8b55qeY3pvFkSbBJzYG3EwJY/view?usp=drivesdk"
          target="_blank"
          rel="noreferrer"
        >
          <button className="px-8 py-1 bg-white border-2 border-gray-700 rounded-full shadow-md md:text-lg">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
};
