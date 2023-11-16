export default function MySuscesstNotice({ className, children }) {
  return (
    <div>
      <p
        className={
          ` w-full text-center text-[0.8rem] text-green-400 ` + className
        }
      >
        {children}
      </p>
    </div>
  );
}
