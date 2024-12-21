interface Props {
  text: string;
}

const ErrorMessage = ({ text }: Props) => {
  return (
    <div className="flex h-20 items-center justify-center rounded-2xl bg-red-600 text-slate-950">
      {text}
    </div>
  );
};

export default ErrorMessage;
