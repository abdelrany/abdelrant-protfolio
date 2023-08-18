import { contact } from "../data/config";
import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {contact.title}
        </h2>
      </div>
      <p>
        Shoot me an email:{" "}
        <a
          className="dark:text-white text-black transition-colors duration-500"
          href={`mailto:${contact.email}`}
        >
          {contact.email}
        </a>
      </p>
      <div className="flex space-x-5 mt-5 text-lightText transition-colors duration-500">
        {contact.socialMediaPlatforms.map((platform) => {
          const platformInfo = contact[platform.platform];
          if (platformInfo) {
            return (
              <a
                key={platform.platform}
                href={`https://${platform.platform}.com/${platformInfo}`}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="dark:text-white text-black transition-colors duration-500 "
                  src={`/static/icons/${platform.icon}`}
                  width={20}
                  height={20}
                  alt={`${platform.label} icon`}
                />
              </a>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
