import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalSquareIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
       Welcome to the CXP documentation.
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
        Here you can find the comprehensive documentation of the CXP platform including user guide, developer guide, API documentation, and release notes.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          User Guide
        </Link>
        <Link
          href="/blog"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          Developer Guide
        </Link>
      </div>
      <span className="flex flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-7 -mb-12 max-[800px]:mb-12 font-code text-base font-medium">
        <TerminalSquareIcon className="w-5 h-5 mr-1 mt-0.5" />
        {"The code for this repository is on GitHub."}
      </span>
    </div>
  );
}
