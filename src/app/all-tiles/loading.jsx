import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <Spinner label="Loading tile details..." color="primary" />
    </div>
  );
}