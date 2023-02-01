import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoadAllUsers from "../../redux/thunk/user/fetchUsers";

const AllUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.user?.users);

  useEffect(() => {
    dispatch(LoadAllUsers());
  }, [dispatch]);
  return (
    <section className="w-full">
      <ul>
        {users.map((user) => (
          <li className="my-2">
            <div class="flex w-1/3 items-center space-x-4">
              <div class="flex-shrink-0">
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://demo.themesberg.com/windster/images/users/neil-sims.png"
                  alt="Neil"
                />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate">
                  {user.email}
                </p>
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
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AllUsers;
