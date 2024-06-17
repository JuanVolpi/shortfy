const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col md:flex-row z-10 space-y-14 p-5">
        <div className="w-full md:w-1/2 flex justify-center items-center bg-pink-500 rounded-xl">
          <img
            src="/logo2.png"
            alt="SHORFY Sabor"
            className="max-w-xs md:max-w-none w-1/2"
          />
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="flex justify-center ">{children}</div>
        </div>
      </div>
      <footer className="absolute bottom-0 left-0 w-full overflow-hidden z-0"></footer>
    </div>
  );
};

export default AuthLayout;
