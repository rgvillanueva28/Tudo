export default function FormInput({ title, htmlFor, ...rest }: any) {
  return (
    <>
      <label htmlFor={htmlFor}>{title}</label>
      <input {...rest} className="border p-2 rounded" />
    </>
  );
}
