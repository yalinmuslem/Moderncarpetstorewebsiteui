import React from "react";
import { Link, useLocation } from "react-router";

const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();

  // Memecah path: "/carpet/cormar" -> ["carpet", "cormar"]
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <nav
      className="flex items-center space-x-2 text-xs md:text-sm text-gray-400 mb-6 capitalize"
      aria-label="Breadcrumb"
    >
      <Link to="/" className="hover:text-[#660000] transition-colors">
        Home
      </Link>

      {pathSegments.map((segment, index) => {
        const isLast = index === pathSegments.length - 1;
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;

        return (
          <React.Fragment key={path}>
            <span className="text-gray-300">/</span>
            {isLast ? (
              <span className="text-[#220905] font-semibold">
                {segment.replace(/-/g, " ")}
              </span>
            ) : (
              <Link
                to={path}
                className="hover:text-[#660000] transition-colors"
              >
                {segment.replace(/-/g, " ")}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
