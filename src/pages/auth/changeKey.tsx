import { ActionFunctionArgs, Form, Link, redirect } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/outline";
import { type ChangeKey, UserService, OpenAPI } from "~~/api/generated";
import { useState } from "react";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const keyData = Object.fromEntries(formData) as ChangeKey;
  OpenAPI.HEADERS = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  await UserService.postChangeKey({
    rawOldKey: keyData.rawOldKey,
    rawNewKey: keyData.rawNewKey,
  });
  localStorage.clear();
  return redirect("/login");
}

export default function ChangeKey() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  return (
    <>
      <header className="bg-white shadow">
        <div className="flex justify-between mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Change Key
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 mb-2">
          <Form method="post">
            <div className="space-y-12">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="old-key"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Old Key
                  </label>
                  <div className="mt-2">
                    <div className="flex justify-between rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                      <input
                        type={passwordVisibility ? "text" : "password"}
                        name="rawOldKey"
                        id="rawOldKey"
                        className="border-0 bg-transparent w-full py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                      <span
                        className="flex select-none items-center pr-3 text-gray-500 sm:text-sm"
                        onClick={() =>
                          setPasswordVisibility(!passwordVisibility)
                        }
                      >
                        <EyeIcon className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="new-key"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    New Key
                  </label>
                  <div className="mt-2">
                    <div className="flex justify-between rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                      <input
                        type={passwordVisibility ? "text" : "password"}
                        name="rawNewKey"
                        id="rawNewKey"
                        className="border-0 bg-transparent w-full py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                      <span
                        className="flex select-none items-center pr-3 text-gray-500 sm:text-sm"
                        onClick={() =>
                          setPasswordVisibility(!passwordVisibility)
                        }
                      >
                        <EyeIcon className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="confirm-new-key"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm New Key
                  </label>
                  <div className="mt-2">
                    <div className="flex justify-between rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                      <input
                        type={passwordVisibility ? "text" : "password"}
                        name="rawNewConfirmKey"
                        id="rawNewConfirmKey"
                        className="border-0 bg-transparent w-full py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                      <span
                        className="flex select-none items-center pr-3 text-gray-500 sm:text-sm"
                        onClick={() =>
                          setPasswordVisibility(!passwordVisibility)
                        }
                      >
                        <EyeIcon className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-end gap-x-6">
              <Link to="/">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
              </Link>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </Form>
        </div>
      </main>
    </>
  );
}
