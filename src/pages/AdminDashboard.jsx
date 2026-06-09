import Navbar from "../components/layout/Navbar";

function AdminDashboard() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <p className="text-gray-500 mt-2">Product management coming soon.</p>
      </div>
    </>
  );
}

export default AdminDashboard;
