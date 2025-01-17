import { MdLink, MdPhotoLibrary, MdCode } from "react-icons/md";
import { motion } from "framer-motion";

interface project {
  title: string;
  company: string;
  desc: string;
  date: string;
  gallery: string | undefined;
  code: string | undefined;
  live: string | undefined;
}

export const ProjectCard = ({ title, desc, date, gallery, code, live, company }: project) => {
  return (
    <motion.div initial={{ x: -100 }} whileInView={{ x: 0 }} viewport={{ once: true }}>
      <div className="px-2 py-1 mb-2 border border-gray-700 border-solid rounded-full bg-pink-50 w-fit">
        <p className="text-xs md:text-sm">{date}</p>
      </div>
      <div className="w-full mb-8 bg-white border-2 border-gray-700 border-solid rounded-xl md:mb-10">
        <div
          className="relative right-0 w-5 h-5 -translate-y-1/2 bg-gray-700 border-2 border-gray-400 border-solid rounded-full top-1/2"
          style={{
            right: "29px",
          }}
        ></div>
        <div className="px-4">
          <h2 className="mb-2 text-2xl md:text-3xl">{title}</h2>
          <h3 className="mb-4 md:mb-6 text-gray-600">{company}</h3>
          <p className="mb-4 md:text-lg md:mb-6">{desc}</p>
          <div className="flex mb-4">
            {live && (
              <a href={live} target="_blank" rel="noreferrer" className="mr-4 text-lg text-gray-700 md:text-xl md:mr-6">
                <MdLink />
              </a>
            )}
            {code && (
              <a href={code} target="_blank" rel="noreferrer" className="mr-4 text-lg text-gray-700 md:text-xl md:mr-6">
                <MdCode />
              </a>
            )}
            {gallery && (
              <a
                href={gallery}
                target="_blank"
                rel="noreferrer"
                className="mr-4 text-lg text-gray-700 md:text-xl md:mr-6"
              >
                <MdPhotoLibrary />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
