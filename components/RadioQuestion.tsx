import { RadioType } from "../type/type";

export default function RadioQuestion({
  question,
  topic,
  answer1,
  answer2,
  answer3,
  answer4,
  answer1_title,
  answer2_title,
  answer3_title,
  answer4_title,
  register,
  error
}: RadioType) {
  return (
    <div className="space-y-1 mb-4">
      <label className="font-semibold inline-block mb-2">{question}</label>
      <span className="text-red-500  font-semibold text-xs ml-1">
        {topic === "department" ? error?.department?.message : null}
        {topic === "reason" ? error?.reason?.message : null}
      </span>
      <div className="space-x-1">
        <input
          className="inline-block"
          type="radio"
          id={answer1}
          value={answer1}
          {...register(topic, { required: "*required" })}
        />
        <label className="font-semibold" htmlFor={answer1}>
          {answer1_title ? answer1_title : answer1}
        </label>
      </div>
      <div className="space-x-1">
        <input
          className="inline-block"
          type="radio"
          id={answer2}
          value={answer2}
          {...register(topic, { required: "*required" })}
        />
        <label className="font-semibold" htmlFor={answer2}>
          {answer2_title ? answer2_title : answer2}
        </label>
      </div>
      <div className="space-x-1">
        <input
          className="inline-block"
          type="radio"
          id={answer3}
          value={answer3}
          {...register(topic, { required: "*required" })}
        />
        <label className="font-semibold" htmlFor={answer3}>
          {answer3_title ? answer3_title : answer3}
        </label>
      </div>
      <div className="space-x-1">
        <input
          className="inline-block"
          type="radio"
          id={answer4}
          value={answer4}
          {...register(topic, { required: "*required" })}
        />
        <label className="font-semibold" htmlFor={answer4}>
          {answer4_title ? answer4_title : answer4}
        </label>
      </div>
    </div>
  );
}
