import { InputType } from "../type/type";
import cls from "../util/cls";
export default function Input({
  title,
  type,
  topic,
  register,
  error
}: InputType) {
  return (
    <div className="my-3">
      <label className="font-semibold block">{title}</label>
      {topic === "dream" ? (
        <>
          <textarea
            className={cls(
              "w-full border-2 border-black rounded-md",
              error?.dream?.message ? "border-red-500" : ""
            )}
            rows={4}
            {...register(topic, {
              required: "Please write down your introduction",
              minLength: {
                value: 10,
                message: "Please write more than 10 characters"
              }
            })}
          />
          <p className="text-red-500 text-sm font-semibold">
            {error.dream?.message}
          </p>
        </>
      ) : null}
      {topic === "introduce" ? (
        <>
          <input
            className={cls(
              "w-full border-2 border-black rounded-md",
              error?.introduce?.message ? "border-red-500" : ""
            )}
            type={type}
            {...register(topic, {
              required: "Please tell us what your dreams are"
            })}
          />
          <p className="text-red-500 text-sm font-semibold">
            {error.introduce?.message}
          </p>
        </>
      ) : null}
      {topic === "email" ? (
        <>
          <input
            className={cls(
              "w-full border-2 border-black rounded-md",
              error?.email?.message ? "border-red-500" : ""
            )}
            type={type}
            {...register(topic, {
              required: "Please write down your email.",
              validate: {
                onlyNaver: (value) =>
                  value.includes("@naver.com") || "Only @naver is allowed"
              }
            })}
          />
          <p className="text-red-500 text-sm font-semibold">
            {error.email?.message}
          </p>
        </>
      ) : null}
    </div>
  );
}
