export default function MyArlertNotice({ className, children }) {
  return (
    <div>
      <p
        className={
          ` w-full text-center text-[0.8rem] text-red-500 ` + className
        }
      >
        {children}
      </p>
    </div>
  );
}
