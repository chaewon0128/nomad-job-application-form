import { FieldErrors, Path, UseFormRegister } from "react-hook-form";

export interface RadioType {
  question: string;
  topic: Path<FormValue>;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer1_title?: string;
  answer2_title?: string;
  answer3_title?: string;
  answer4_title?: string;
  register: UseFormRegister<FormValue>;
  error: FieldErrors<FormValue>;
}

export interface FormValue {
  introduce: string;
  email: string;
  dream: string;
  salary: any;
  department: any;
  reason: any;
}

export interface InputType {
  title: string;
  type: "text" | "textarea";
  topic: Path<FormValue>;
  register: UseFormRegister<FormValue>;
  error: FieldErrors<FormValue>;
}
