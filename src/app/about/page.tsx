import Image from "next/image";

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="flex flex-col items-center justify-center py-32">
        <div className="w-full max-w-4xl p-8 bg-black shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden group">
                <Image
                  src="/areeb.jpg"
                  alt="Profile"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-full object-cover transition-transform transform group-hover:scale-105 group-hover:shadow-xl"
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-4">About Areeb</h1>
              <p className="text-lg mb-4">
                Hello! I&apos;m Areeb, a 21-year-old student of the Governor Sindh
                Kamran Khan Tessori Initiative for Artificial Intelligence, Web
                3.0 &amp; Metaverse, with expertise in modern technologies including
                HTML, CSS, JavaScript, Tailwind CSS, TypeScript, and Next.js. As
                a web developer, I am passionate about building innovative and
                scalable solutions that leverage the latest advancements in web
                development and emerging technologies. I strive to continuously
                improve my skills and stay updated with the rapidly evolving
                tech landscape.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white">
              Areeb&apos;s Journey as a Coder
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              From curious beginner to seasoned developer, here&apos;s how Areeb
              navigated the world of programming.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 group">
                <Image
                  src="/3.jpg"
                  alt="Areeb as a beginner"
                  width={500}
                  height={300}
                  className="w-full rounded-lg shadow-lg transition-transform transform group-hover:scale-105 group-hover:shadow-xl"
                  priority
                />
              </div>

              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-white">
                  The Spark of Curiosity
                </h3>
                <p className="mt-4 text-gray-300">
                  My journey in technology truly began in 2019 when I pursued a
                  Diploma in Information Technology (DIT) under the mentorship
                  of Sardar Yaseen Malik. During my DIT, I learned HTML, CSS,
                  and JavaScript, which sparked my interest in web development.
                  At that time, I was in 11th grade, and my passion for web
                  development grew stronger as I delved deeper into the field.
                </p>
                <p className="mt-4 text-gray-300">
                  After my initial education, I took online courses to further
                  my knowledge about web development. This led me to participate
                  in the Governor&apos;s Initiative course, where I learned
                  TypeScript and Next.js. The course is about to finish, and
                  then I will start learning Python and Artificial Intelligence.
                  This course provided me with hands-on experience in building
                  modern web applications and further solidified my interest in
                  web development.
                </p>
                <p className="mt-4 text-gray-300">
                  Today, I am passionate about building innovative and scalable
                  solutions that leverage the latest advancements in web
                  development and emerging technologies. I strive to
                  continuously improve my skills and stay updated with the
                  rapidly evolving tech landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
