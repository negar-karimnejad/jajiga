import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  links?: string[];
  pageLink: string|undefined;
}

function Breadcrumb({ links, pageLink }: BreadcrumbProps) {
  return (
    <nav className="container py-5 text-sm" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-gray-500 hover:text-gray-700"
          >
            جاجیگا
          </Link>
        </li>
        {links?.map((link, index) => (
          <li key={index} className="whitespace-nowrap">
            <div className="flex items-center whitespace-nowrap">
              <svg
                className="mx-1 h-2.5 w-2.5 text-gray-500 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                to={`/products/${link}`}
                className="ms-1 text-gray-500 hover:text-gray-700 md:ms-2"
              >
                {link?.replaceAll('-', ' ')}
              </Link>
            </div>
          </li>
        ))}
        <svg
          className="mx-1 h-2.5 w-2.5 text-gray-500 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <div className="ms-1 cursor-default font-vazirBold text-base text-gray-700 md:ms-2">
          {pageLink}
        </div>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
