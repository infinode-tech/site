import React, { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode; // ReactNode allows any valid JSX/React node to be passed as icon
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <li className="group z-10 rounded-2xl border border-white p-8 relative ">
      <div className="pointer-events-none">
        <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(black,transparent)] group-hover:bg-purple">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-white/[0.02] stroke-white/5"
          >
            <defs>
              <pattern
                id="pattern"
                width="72"
                height="56"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="16"
              >
                <path d="M.5 56V.5H72" fill="none"></path>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#pattern)"
            ></rect>
            <svg x="50%" y="16" className="overflow-visible">
              <rect strokeWidth={0} width="73" height="57" x="0" y="56"></rect>
              <rect
                strokeWidth={0}
                width="73"
                height="57"
                x="72"
                y="168"
              ></rect>
            </svg>
          </svg>
        </div>
      </div>
      <div className="relative z-10">
        <span>{icon}</span>
        <h3 className="mt-6 font-semibold text-white tracking-wide leading-6 antialiased text-sm">
          {title}
        </h3>
        <p className="mt-2 text-white tracking-wide leading-6 antialiased text-sm">
          {description}
        </p>
      </div>
    </li>
  );
};

export default ServiceCard;
