import Image from "next/image";
import { doSocialLogin } from "../actions/loginAction";

export default function OAuth() {
  return (
    <form action={doSocialLogin}>
      <div className="flex flex-col gap-3">
        <button
          type="submit"
          name="action"
          value="google"
          className="cursor-pointer flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
        >
          <Image src="google.svg" width={20} height={20} alt="Google" />
          Continue with Google
        </button>

        <button
          type="submit"
          name="action"
          value="github"
          className="cursor-pointer flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-800 text-white font-medium hover:bg-gray-700 transition"
        >
          <Image src="github.svg" width={20} height={20} alt="Github" />
          Continue with GitHub
        </button>
      </div>
    </form>
  );
}
