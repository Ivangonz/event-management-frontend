import CreateEventForm from "@/components/CreateEventForm";

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Welcome to the Event Management System</h1>
      <div className="container mx-auto p-4">
        <CreateEventForm/>
      </div>
    </div>
  );
}