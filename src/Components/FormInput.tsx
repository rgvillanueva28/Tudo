export default function FormInput({ title, htmlFor, ...rest }: any) {
  return (
    <>
      <label htmlFor={htmlFor} className="font-bold">{title}</label>
      <input {...rest} className="border p-2 rounded " />
    </>
  );
}
