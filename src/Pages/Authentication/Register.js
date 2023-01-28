import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  if (loading || updating) {
    return <Loading />;
  }

  const handleRegister = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);

    if (user) {
      await updateProfile({ displayName: data.name });
    }
    reset();
  };
  console.log(user, error, updateError, errors);
  return (
    <div>
      <div class="relative flex h-full w-full">
        <div class="h-screen w-2/3 bg-black mx-auto">
          <div class="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
            <div>
              <p class="text-2xl">REGISTER</p>
              <p>
                Already have account?{" "}
                <Link className="link text-blue-600" to="/login">
                  LOGIN
                </Link>{" "}
              </p>
            </div>
            <div class="my-6">
              <button class="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2">
                <img
                  src="https://freesvg.org/img/1534129544.png"
                  alt=""
                  class="mr-2 w-6 object-fill"
                />
                Sign Up with Google
              </button>
            </div>
            <div>
              <fieldset class="border-t border-solid border-gray-600">
                <legend class="mx-auto px-2 text-center text-sm">
                  Or login via our secure system
                </legend>
              </fieldset>
            </div>
            <div class="mt-6">
              <form onSubmit={handleSubmit(handleRegister)}>
                <div>
                  <label class="mb-2.5 block font-extrabold" for="name">
                    Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    id="name"
                    class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label class="mb-2.5 block font-extrabold" for="email">
                    Email
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    id="email"
                    class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    placeholder="mail@user.com"
                  />
                </div>
                <div class="mt-4">
                  <label class="mb-2.5 block font-extrabold" for="password">
                    Password
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    id="password"
                    class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow"
                  />
                </div>
                <div class="mt-4 flex w-full flex-col justify-between sm:flex-row">
                  <div>
                    <input type="checkbox" id="remember" />
                    <label for="remember" class="mx-2 text-sm">
                      Remember me
                    </label>
                  </div>

                  <div>
                    <a href="." class="text-sm hover:text-gray-200">
                      Forgot password
                    </a>
                  </div>
                </div>
                <div class="my-7">
                  <button class="w-full rounded-full bg-[#FF4E16] px-5 py-3 hover:bg-orange-800">
                    SIGN UP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
