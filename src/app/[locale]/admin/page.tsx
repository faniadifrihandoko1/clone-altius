import { Button } from "primereact/button";

export default function HomePage() {
  return (
    <div className="flex w-full justify-center">
      <div className="card">
        <Button icon="pi pi-plus" className="mr-2" label="Increment"></Button>
      </div>
    </div>
  );
}
