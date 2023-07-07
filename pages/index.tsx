import React, { useState } from "react";
import RadioQuestion from "../components/RadioQuestion";
import Input from "../components/Input";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { FormValue } from "../type/type";

export default function Home() {
  const [formData, setFormData] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful }
  } = useForm<FormValue>();

  const onValid = (data: FormValue) => {
    setFormData(JSON.stringify(data));
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-red-100 border-2 border-black border-r-8 border-b-8 rounded-3xl p-7  w-[450px]">
        <h1 className="text-center font-bold text-2xl mb-9">
          Job Application Form
        </h1>
        <form onSubmit={handleSubmit(onValid)}>
          <RadioQuestion
            question="What department do you want to work for?"
            topic="department"
            answer1="sales"
            answer2="marketing"
            answer3="accounting"
            answer4="customerService"
            register={register}
            error={errors}
          />
          <RadioQuestion
            question="Why do you want to join this company?"
            topic="reason"
            answer1="loveMoney"
            answer1_title="I want money!"
            answer2="loveCompany"
            answer2_title="I love this company"
            answer3="wannaLearn"
            answer3_title="I want to learn"
            answer4="iDontKnow"
            answer4_title="I don't know why"
            register={register}
            error={errors}
          />

          <div>
            <label className="block font-semibold" htmlFor="salary">
              Salary
            </label>
            <select
              className="pl-2 py-1 text-sm w-full border-2 border-black rounded-md"
              id="salary"
              {...register("salary")}
            >
              <option value="50k">$ 50k</option>
              <option value="100k">$ 100k</option>
              <option value="150k">$ 150k</option>
              <option value="200k">$ 200k</option>
            </select>
          </div>
          <Input
            title="Introduce yourself"
            type="text"
            topic="introduce"
            register={register}
            error={errors}
          />
          <Input
            title="Tell us what your dreams are"
            type="textarea"
            topic="dream"
            register={register}
            error={errors}
          />
          <Input
            title="Email"
            type="text"
            topic="email"
            register={register}
            error={errors}
          />
          <Button />
          <p>{isSubmitSuccessful ? `${formData}` : ""}</p>
        </form>
      </div>
    </div>
  );
}
