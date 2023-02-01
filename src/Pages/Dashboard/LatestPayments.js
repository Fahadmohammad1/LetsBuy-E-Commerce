import React from "react";

const LatestPayments = () => {
  return (
    <section className="">
      <div>
        <div class="flex overflow-hidden bg-white">
          <div
            id="main-content"
            class="h-full w-full bg-gray-50 relative overflow-y-auto"
          >
            <div>
              <div class="px-4">
                <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                  <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:px-8 ">
                    <div class="mb-4 flex items-center justify-between">
                      <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">
                          Latest Transactions
                        </h3>
                        <span class="text-base font-normal text-gray-500">
                          This is a list of latest transactions
                        </span>
                      </div>
                      <div class="flex-shrink-0">
                        <a
                          href="."
                          class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                    <div class="flex flex-col mt-8">
                      <div class="overflow-x-auto rounded-lg">
                        <div class="align-middle inline-block min-w-full">
                          <div class="shadow overflow-hidden sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                              <thead class="bg-gray-50">
                                <tr>
                                  <th
                                    scope="col"
                                    class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                    Transaction
                                  </th>
                                  <th
                                    scope="col"
                                    class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                    Date & Time
                                  </th>
                                  <th
                                    scope="col"
                                    class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                    Amount
                                  </th>
                                </tr>
                              </thead>
                              <tbody class="bg-white">
                                <tr>
                                  <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                    Payment from{" "}
                                    <span class="font-semibold">
                                      Bonnie Green
                                    </span>
                                  </td>
                                  <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    Apr 23 ,2021
                                  </td>
                                  <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    $2300
                                  </td>
                                </tr>
                                <tr class="bg-gray-50">
                                  <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                    Payment refund to{" "}
                                    <span class="font-semibold">#00910</span>
                                  </td>
                                  <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    Apr 23 ,2021
                                  </td>
                                  <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    -$670
                                  </td>
                                </tr>
                                <tr>
                                  <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                    Payment failed from{" "}
                                    <span class="font-semibold">#087651</span>
                                  </td>
                                  <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    Apr 18 ,2021
                                  </td>
                                  <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    $234
                                  </td>
                                </tr>
                                <tr class="bg-gray-50">
                                  <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                    Payment from{" "}
                                    <span class="font-semibold">Lana Byrd</span>
                                  </td>
                                  <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    Apr 15 ,2021
                                  </td>
                                  <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    $5000
                                  </td>
                                </tr>
                                <tr>
                                  <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                    Payment from{" "}
                                    <span class="font-semibold">Jese Leos</span>
                                  </td>
                                  <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    Apr 15 ,2021
                                  </td>
                                  <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    $2300
                                  </td>
                                </tr>
                                <tr class="bg-gray-50">
                                  <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                    Payment from{" "}
                                    <span class="font-semibold">
                                      THEMESBERG LLC
                                    </span>
                                  </td>
                                  <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    Apr 11 ,2021
                                  </td>
                                  <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    $560
                                  </td>
                                </tr>
                                <tr>
                                  <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                    Payment from{" "}
                                    <span class="font-semibold">
                                      Lana Lysle
                                    </span>
                                  </td>
                                  <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    Apr 6 ,2021
                                  </td>
                                  <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    $1437
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex-shrink-0">
                        <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                          $45,385
                        </span>
                        <h3 class="text-base font-normal text-gray-500">
                          Sales this week
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPayments;
