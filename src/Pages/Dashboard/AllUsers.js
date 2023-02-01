import React from "react";

const AllUsers = () => {
  return (
    <section className="w-full">
      <div class="flex w-1/3 items-center space-x-4">
        <div class="flex-shrink-0">
          <img
            class="h-8 w-8 rounded-full"
            src="https://demo.themesberg.com/windster/images/users/neil-sims.png"
            alt="Neil"
          />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate">Neil Sims</p>
          <p class="text-sm text-gray-500 truncate">
            <a
              href="/cdn-cgi/l/email-protection"
              class="__cf_email__"
              data-cfemail="17727a767e7b57607e7973646372653974787a"
            >
              [email&#160;protected]
            </a>
          </p>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-gray-900">
          $320
        </div>
      </div>
    </section>
  );
};

export default AllUsers;
