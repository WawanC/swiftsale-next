import LoadingIndicator from "@/app/_components/LoadingIndicator";

const Loading = () => {
  return (
    <main className={`flex-1 flex justify-center items-center`}>
      <LoadingIndicator size={75} />
    </main>
  );
};

export default Loading;
